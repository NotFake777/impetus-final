'use client'
import React from 'react'

interface WarpSpeedTextProps {
  children: React.ReactNode
  className?: string
}

export function WarpSpeedText({ children, className = '' }: WarpSpeedTextProps) {
  const [translateX, setTranslateX] = React.useState(-32.155)
  const [textTransform, setTextTransform] = React.useState({ x: -3.26815, y: 3.26815, scale: 0.8 })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newVal = prev + 0.2
        return newVal > 10 ? -100 : newVal
      })
      setTextTransform(prev => ({
        x: prev.x + (Math.random() - 0.5) * 0.05,
        y: prev.y + (Math.random() - 0.5) * 0.05,
        scale: 0.8 + Math.sin(Date.now() * 0.001) * 0.02
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`bg-grid-small-neutral-200 hover:bg-grid-small-neutral-800 dark:bg-grid-small-neutral-800 group relative inline-block rounded-sm bg-neutral-100 px-2 py-2 transition duration-200 hover:bg-neutral-900 dark:bg-neutral-900 ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden" style={{ opacity: 1 }}>
        <div className="flex h-full w-[200%]" style={{ transform: `translateX(${translateX}%)` }}>
          <div className="opacity-0 h-full w-full" style={{ opacity: 1 }}>
            <div className="h-full w-full">
              <div 
                className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-60"
                style={{ width: '100%', height: '100%' }}
              />
              <div 
                className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Particles effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="opacity-0 h-full w-full" style={{ opacity: 1 }}>
            <div className="h-full w-full">
              <div 
                className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-60"
                style={{ width: '100%', height: '100%' }}
              />
              <div 
                className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_50%)] animate-pulse"
                style={{ width: '100%', height: '100%', animationDelay: '0.5s' }}
              />
              {/* Particles effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {Array.from({ length: 15 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2 + 0.5}s`,
                      animationDuration: `${1.5 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
      <span 
        className="relative z-20 inline-block text-neutral-900 transition duration-200 [text-shadow:0_0_rgba(0,0,0,0.1)] group-hover:text-white dark:text-white"
        style={{ transform: `translateX(${textTransform.x}px) translateY(${textTransform.y}px) scale(${textTransform.scale})` }}
      >
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