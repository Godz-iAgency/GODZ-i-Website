'use client'

import * as React from "react"

export function WavesDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
            {/* Centered content with aspect ratio */}
            <div className="w-full flex flex-col items-center">
                {/* Top border - thin white line */}
                <div className="w-full h-[1px] bg-white/80"></div>

                {/* 16:9 container that's full width */}
                <div className="w-full aspect-video relative">
                    {/* Waves disabled to fix missing component error */}
                </div>

                {/* Bottom border - thin white line */}
                <div className="w-full h-[1px] bg-white/80"></div>
            </div>
        </div>
    )
}
