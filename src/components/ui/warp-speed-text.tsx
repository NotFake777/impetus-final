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
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6c)"></path>
        <defs>
          <linearGradient id="svgGradient-r6c" gradientUnits="userSpaceOnUse" x1="0.66%" x2="-4.34%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-4">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6d)"></path>
        <defs>
          <linearGradient id="svgGradient-r6d" gradientUnits="userSpaceOnUse" x1="0.33%" x2="-4.67%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-6">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6e)"></path>
        <defs>
          <linearGradient id="svgGradient-r6e" gradientUnits="userSpaceOnUse" x1="36.88667%" x2="31.88667%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-8">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6f)"></path>
        <defs>
          <linearGradient id="svgGradient-r6f" gradientUnits="userSpaceOnUse" x1="0.165%" x2="-4.835%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute top-10">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6g)"></path>
        <defs>
          <linearGradient id="svgGradient-r6g" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      {/* SVG Gradients - Bottom */}
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-2">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6h)"></path>
        <defs>
          <linearGradient id="svgGradient-r6h" gradientUnits="userSpaceOnUse" x1="0.66%" x2="-4.34%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-4">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6i)"></path>
        <defs>
          <linearGradient id="svgGradient-r6i" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-6">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6j)"></path>
        <defs>
          <linearGradient id="svgGradient-r6j" gradientUnits="userSpaceOnUse" x1="0.165%" x2="-4.835%" y1="0" y2="0">
            <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
            <stop stopColor="var(--color-blue-500)"></stop>
            <stop offset="1" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      
      <svg width="600" height="1" viewBox="0 0 600 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 w-full absolute bottom-8">
        <path d="M0 0.5H800" stroke="url(#svgGradient-r6k)"></path>
        <defs>
          <linearGradient id="svgGradient-r6k" gradientUnits="userSpaceOnUse" x1="110%" x2="105%" y1="0" y2="0">
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