import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>;
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>;

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  onClick?: () => void;
  href?: string;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

export type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) {
    return null;
  }

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav className={`relative inline-flex items-center h-14 rounded-full bg-slate-900/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/5 px-2 ${className}`}>
      {items.map(({ id, icon, label, onClick, href }, index) => (
        <a
          key={id}
          href={href}
          ref={el => { navItemRefs.current[index] = el as HTMLAnchorElement }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-4 ${iconContainerClassName}`}
          onClick={(e) => {
            if (!href) e.preventDefault();
            handleItemClick(index, onClick);
          }}
          aria-label={label}
        >
          {cloneElement(icon as React.ReactElement<any>, {
            className: `w-5 h-5 transition-all duration-300 ease-in-out ${activeIndex === index ? 'opacity-100 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : 'opacity-45 text-white hover:opacity-90 hover:-translate-y-[1px]'
              } ${(icon.props as any).className || ''} ${iconClassName || ''}`,
          })}
        </a>
      ))}

      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-9 h-1 rounded-b-md bg-primary shadow-[0_4px_15px_rgba(232,67,10,0.6),0_0_5px_rgba(232,67,10,0.4)] ${isReady ? 'transition-[left] duration-400 ease-in-out' : ''} ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-50%] top-[4px] w-[200%] h-10 [clip-path:polygon(10%_100%,30%_0,70%_0,90%_100%)] bg-gradient-to-b from-primary/40 via-primary/5 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};