// waves.js

class Waves {
    constructor(selector, options = {}) {
        this.container = document.querySelector(selector);
        if (!this.container) return;

        this.options = {
            strokeColor: options.strokeColor || "#ffffff",
            backgroundColor: options.backgroundColor || "transparent",
            pointerSize: options.pointerSize || 0.5, // rem
            ...options
        };

        this.mouse = { x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false };
        this.paths = [];
        this.lines = [];
        this.noise2D = null;
        this.raf = null;
        this.bounding = null;

        this.init();
    }

    init() {
        if (typeof SimplexNoise === 'undefined') {
            console.error("SimplexNoise is missing.");
            return;
        }

        this.noise2D = new SimplexNoise(); // v2 API

        // Create elements
        this.container.innerHTML = `
            <svg class="waves-svg" xmlns="http://www.w3.org/2000/svg" style="display: block; width: 100%; height: 100%;"></svg>
            <div class="waves-pointer" style="position: absolute; top: 0; left: 0; width: ${this.options.pointerSize}rem; height: ${this.options.pointerSize}rem; background: ${this.options.strokeColor}; border-radius: 50%; transform: translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0); will-change: transform;"></div>
        `;

        this.svg = this.container.querySelector('.waves-svg');

        // Container styling
        this.container.style.backgroundColor = this.options.backgroundColor;
        this.container.style.position = 'absolute';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.overflow = 'hidden';
        this.container.style.pointerEvents = 'none'; // Critical for buttons to work!
        this.container.style.zIndex = '0';

        this.container.style.setProperty('--x', '-0.5rem');
        this.container.style.setProperty('--y', '50%');

        this.setSize();
        this.setLines();

        // Bindings
        this.onResize = this.onResize.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.tick = this.tick.bind(this);

        window.addEventListener('resize', this.onResize);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('touchmove', this.onTouchMove, { passive: true });

        // Ensure parent is relative and siblings have higher z-index
        const parent = this.container.parentElement;
        if (parent) {
            parent.style.position = 'relative';
            Array.from(parent.children).forEach(child => {
                if (child !== this.container && getComputedStyle(child).position === 'static') {
                    child.style.position = 'relative';
                    child.style.zIndex = '2';
                }
            });
        }

        this.raf = requestAnimationFrame(this.tick);
    }

    setSize() {
        this.bounding = this.container.getBoundingClientRect();
        this.svg.style.width = `${this.bounding.width}px`;
        this.svg.style.height = `${this.bounding.height}px`;
    }

    setLines() {
        if (!this.bounding) return;

        const { width, height } = this.bounding;
        this.lines = [];

        this.paths.forEach(p => p.remove());
        this.paths = [];

        const xGap = 12; // Gap for spacing
        const yGap = 12;

        const oWidth = width + 200;
        const oHeight = height + 30;

        const totalLines = Math.ceil(oWidth / xGap);
        const totalPoints = Math.ceil(oHeight / yGap);

        const xStart = (width - xGap * totalLines) / 2;
        const yStart = (height - yGap * totalPoints) / 2;

        for (let i = 0; i < totalLines; i++) {
            const points = [];
            for (let j = 0; j < totalPoints; j++) {
                points.push({
                    x: xStart + xGap * i, y: yStart + yGap * j,
                    wave: { x: 0, y: 0 },
                    cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                });
            }

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.classList.add('a__line', 'js-line');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', this.options.strokeColor);
            path.setAttribute('stroke-width', '1');

            this.svg.appendChild(path);
            this.paths.push(path);
            this.lines.push(points);
        }
    }

    onResize() {
        this.setSize();
        this.setLines();
    }

    onMouseMove(e) {
        this.updateMousePosition(e.clientX, e.clientY);
    }

    onTouchMove(e) {
        const touch = e.touches[0];
        this.updateMousePosition(touch.clientX, touch.clientY);
    }

    updateMousePosition(x, y) {
        if (!this.bounding) return;

        // Convert to be relative to container
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = x - rect.left;
        this.mouse.y = y - rect.top;

        if (!this.mouse.set) {
            this.mouse.sx = this.mouse.x;
            this.mouse.sy = this.mouse.y;
            this.mouse.lx = this.mouse.x;
            this.mouse.ly = this.mouse.y;
            this.mouse.set = true;
        }
    }

    movePoints(time) {
        if (!this.noise2D) return;

        const { lx, ly, sx, sy, vs, a } = this.mouse;

        this.lines.forEach(points => {
            points.forEach(p => {
                const move = this.noise2D.noise2D(
                    (p.x + time * 0.008) * 0.003,
                    (p.y + time * 0.003) * 0.002
                ) * 8;

                p.wave.x = Math.cos(move) * 12;
                p.wave.y = Math.sin(move) * 6;

                const dx = p.x - sx;
                const dy = p.y - sy;
                const d = Math.hypot(dx, dy);
                const l = Math.max(175, vs);

                if (d < l) {
                    const s = 1 - d / l;
                    const f = Math.cos(d * 0.001) * s;

                    p.cursor.vx += Math.cos(a) * f * l * vs * 0.00035;
                    p.cursor.vy += Math.sin(a) * f * l * vs * 0.00035;
                }

                p.cursor.vx += (0 - p.cursor.x) * 0.01;
                p.cursor.vy += (0 - p.cursor.y) * 0.01;

                p.cursor.vx *= 0.95;
                p.cursor.vy *= 0.95;

                p.cursor.x += p.cursor.vx;
                p.cursor.y += p.cursor.vy;

                p.cursor.x = Math.min(50, Math.max(-50, p.cursor.x));
                p.cursor.y = Math.min(50, Math.max(-50, p.cursor.y));
            });
        });
    }

    moved(point, withCursorForce = true) {
        return {
            x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
            y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
        };
    }

    drawLines() {
        this.lines.forEach((points, lIndex) => {
            if (points.length < 2 || !this.paths[lIndex]) return;

            const firstPoint = this.moved(points[0], false);
            let d = `M ${firstPoint.x} ${firstPoint.y}`;

            for (let i = 1; i < points.length; i++) {
                const current = this.moved(points[i]);
                d += `L ${current.x} ${current.y}`;
            }

            this.paths[lIndex].setAttribute('d', d);
        });
    }

    tick(time) {
        const mouse = this.mouse;

        mouse.sx += (mouse.x - mouse.sx) * 0.1;
        mouse.sy += (mouse.y - mouse.sy) * 0.1;

        const dx = mouse.x - mouse.lx;
        const dy = mouse.y - mouse.ly;
        const d = Math.hypot(dx, dy);

        mouse.v = d;
        mouse.vs += (d - mouse.vs) * 0.1;
        mouse.vs = Math.min(100, mouse.vs);

        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.a = Math.atan2(dy, dx);

        this.container.style.setProperty('--x', `${mouse.sx}px`);
        this.container.style.setProperty('--y', `${mouse.sy}px`);

        this.movePoints(time);
        this.drawLines();

        this.raf = requestAnimationFrame(this.tick);
    }
}
