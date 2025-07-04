'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'

import { AnimatedGroup } from '@/components/ui/animated-group'
import { RainbowButton } from '@/components/ui/rainbow-button'
import ShinyText from '@/components/ui/shiny-text'
import TrueFocus from '@/components/ui/true-focus'
import BlurText from '@/components/ui/blur-text'
import Aurora from '@/components/ui/aurora'
import { AvatarStack } from '@/components/ui/avatar-stack'
import { PulsatingButton } from '@/components/magicui/pulsating-button'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-black">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        {/* Background Aurora Effect */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            <Aurora
                                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                                blend={0.5}
                                amplitude={1.0}
                                speed={0.5}
                            />
                        </div>

                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#000000_75%)]" />
                        <div className="mx-auto max-w-7xl px-6 relative z-10">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-black dark:hover:border-t-border group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950" style={{ borderColor: '#525252' }}>
                                        <span className="text-white text-sm">Impulsionando Seu Sucesso Digital</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-gray-400"></span>

                                        <div className="bg-black group-hover:bg-neutral-700 size-6 overflow-hidden rounded-full duration-500" style={{ backgroundColor: '#000000' }}>
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] flex flex-wrap items-center justify-center gap-4">
                                        <span>O</span>
                                        <TrueFocus 
                                            sentence="Nosso Negócio"
                                            manualMode={false}
                                            blurAmount={3}
                                            borderColor="#5227FF"
                                            animationDuration={1.5}
                                            pauseBetweenAnimations={2}
                                        />
                                        <span>é</span>
                                        <BlurText
                                            text="Vender o Seu"
                                            delay={150}
                                            animateBy="words"
                                            direction="top"
                                            className=""
                                            onAnimationComplete={() => console.log('BlurText animation completed!')}
                                        />
                                    </h1>
                                    <div className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        <ShinyText 
                                            text="Criamos experiências digitais que redefinem padrões e revolucionam mercados." 
                                            disabled={false} 
                                            speed={3} 
                                            className="custom-class" 
                                        />
                                    </div>
                                </AnimatedGroup>

                                {/* Novo Componente Social Proof */}
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.1,
                                                    delayChildren: 1.2,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        },
                                    }}
                                    className="mt-8"
                                >
                                    <AvatarStack />
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-8 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <Link href="#link">
                                        <RainbowButton>Fale conosco</RainbowButton>
                                    </Link>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-black absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-black relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <img
                                        className="bg-black aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-black pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Home', href: '#link' },
    { name: 'About', href: '#link' },
    { name: 'Services', href: '#link' },
    { name: 'Contact', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-black/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white hover:text-white block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Link href="#" className={cn(
                                    "transition-all duration-300",
                                    isScrolled && 'lg:hidden'
                                )}>
                                    <PulsatingButton 
                                        pulseColor="#ffffff"
                                        className="bg-white text-black hover:bg-gray-100"
                                    >
                                        Login
                                    </PulsatingButton>
                                </Link>
                                
                                <Link href="#" className={cn(
                                    "transition-all duration-300",
                                    isScrolled && 'lg:hidden'
                                )}>
                                    <PulsatingButton 
                                        pulseColor="#000000"
                                        className="bg-black text-white hover:bg-gray-900"
                                    >
                                        Sign Up
                                    </PulsatingButton>
                                </Link>
                                
                                <Link href="#" className={cn(
                                    "transition-all duration-300",
                                    isScrolled ? 'lg:inline-flex' : 'hidden'
                                )}>
                                    <PulsatingButton 
                                        pulseColor="#000000"
                                        className="bg-black text-white hover:bg-gray-900"
                                    >
                                        Get Started
                                    </PulsatingButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            id="Camada_1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1920 1080"
            className={cn('h-8 w-auto scale-[3]', className)}>
            <defs>
                <style>
                    {`.st0, .st1, .st2 {
                        fill: #fff;
                    }

                    .st1 {
                        fill-opacity: .69;
                    }

                    .st2 {
                        fill-opacity: .76;
                    }`}
                </style>
            </defs>
            <path className="st0" d="M753.37,635.53l182.95-90.18c13.21-6.51,34.83-6.94,48.29-.96l186.38,82.87c13.46,5.98,13.66,16.11.45,22.63l-182.95,90.18c-13.21,6.51-34.83,6.94-48.29.96l-186.38-82.87c-13.46-5.98-13.66-16.11-.45-22.63Z"/>
            <path className="st1" d="M751.12,531.22l182.95-90.18c13.21-6.51,34.83-6.94,48.29-.96l186.38,82.87c13.46,5.98,13.66,16.11.45,22.63l-182.95,90.18c-13.21,6.51-34.83,6.94-48.29.96l-186.38-82.87c-13.46-5.98-13.66-16.11-.45-22.63Z"/>
            <path className="st2" d="M751.19,414.25l182.95-90.18c13.21-6.51,34.83-6.94,48.29-.96l186.38,82.87c13.46,5.98,13.66,16.11.45,22.63l-182.95,90.18c-13.21,6.51-34.83,6.94-48.29.96l-186.38-82.87c-13.46-5.98-13.66-16.11-.45-22.63Z"/>
        </svg>
    )
} 