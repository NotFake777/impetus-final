'use client'
import React from 'react'

interface WarpSpeedTextProps {
  children: React.ReactNode
  className?: string
}

export function WarpSpeedText({ children, className = '' }: WarpSpeedTextProps) {
  return (
    <div className={`bg-grid-small-neutral-200 hover:bg-grid-small-neutral-800 dark:bg-grid-small-neutral-800 group relative inline-block rounded-sm bg-neutral-100 px-2 py-2 transition duration-200 hover:bg-neutral-900 dark:bg-neutral-900 ${className}`}>
      {/* SVG Gradients - Top */}
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-2">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rm)"></path>
        <defs>
          <linearGradient id="svgGradient-rm" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-4">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rn)"></path>
        <defs>
          <linearGradient id="svgGradient-rn" gradientUnits="userSpaceOnUse" x1="81.565%" x2="76.565%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-6">
        <path d="M0 0.5H800" stroke="url(#svgGradient-ro)"></path>
        <defs>
          <linearGradient id="svgGradient-ro" gradientUnits="userSpaceOnUse" x1="72.71%" x2="67.71%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-8">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rp)"></path>
        <defs>
          <linearGradient id="svgGradient-rp" gradientUnits="userSpaceOnUse" x1="40.7825%" x2="35.7825%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-10">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rq)"></path>
        <defs>
          <linearGradient id="svgGradient-rq" gradientUnits="userSpaceOnUse" x1="81.565%" x2="76.565%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      {/* SVG Gradients - Bottom */}
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-2">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rr)"></path>
        <defs>
          <linearGradient id="svgGradient-rr" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-4">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rs)"></path>
        <defs>
          <linearGradient id="svgGradient-rs" gradientUnits="userSpaceOnUse" x1="81.565%" x2="76.565%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-6">
        <path d="M0 0.5H800" stroke="url(#svgGradient-rt)"></path>
        <defs>
          <linearGradient id="svgGradient-rt" gradientUnits="userSpaceOnUse" x1="40.7825%" x2="35.7825%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-8">
        <path d="M0 0.5H800" stroke="url(#svgGradient-ru)"></path>
        <defs>
          <linearGradient id="svgGradient-ru" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Main text */}
      <span className="relative z-20 inline-block text-neutral-900 transition duration-200 [text-shadow:0_0_rgba(0,0,0,0.1)] group-hover:text-white dark:text-white">
        {children}
      </span>
      
      {/* Corner dots */}
      <div className="group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover:hidden group-hover:bg-white group-hover:opacity-100 dark:bg-white absolute -top-[2px] -right-[2px]"></div>
      <div className="group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover:hidden group-hover:bg-white group-hover:opacity-100 dark:bg-white absolute -right-[2px] -bottom-[2px]"></div>
      <div className="group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover:hidden group-hover:bg-white group-hover:opacity-100 dark:bg-white absolute -top-[2px] -left-[2px]"></div>
      <div className="group pointer-events-none h-2 w-2 animate-pulse rounded-full bg-neutral-600 opacity-20 group-hover:hidden group-hover:bg-white group-hover:opacity-100 dark:bg-white absolute -bottom-[2px] -left-[2px]"></div>
    </div>
  )
} 