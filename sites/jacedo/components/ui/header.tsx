'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LogIn, Search, X } from 'lucide-react'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Collection', href: '/collection' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className={`${!isHome ? 'bg-white shadow-sm' : 'bg-transparent'} max-pad-container absolute top-0 left-0 right-0 w-full flex items-center justify-between py-4 transition-all z-50 px-4 md:px-8`}>

            {/* Logo */}
            <Link href='/' className={`${searchOpen ? 'hidden md:block' : 'block'} text-amber-600 text-lg font-bold transition-all`}>
              JACED<span className='text-destructive'>O</span>
            </Link>

            {/* Desktop Links */}
            <div className={`${searchOpen ? 'hidden lg:flex' : 'hidden sm:flex'} gap-6 md:gap-12 transition-all`}>
                {links.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        className={`transition-colors pb-1 relative ${pathname === link.href ? 'border-b border-destructive font-medium' : 'text-gray-700 hover:text-black'}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right Side Icons & Actions */}
            <div className={`flex items-center gap-4 sm:gap-6 ${searchOpen ? 'w-full justify-end sm:w-auto' : ''}`}>
                
                {/* Collapsible Search Bar */}
                <div className={`flex items-center text-sm transition-all duration-300 ${
                    searchOpen 
                        ? 'border border-gray-300 px-3 rounded-full bg-white w-full max-w-[280px] sm:max-w-[200px] md:max-w-[250px]' 
                        : 'border-0 p-0 w-auto'
                }`}>
                    {searchOpen ? (
                        <>
                            <input 
                                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-black" 
                                type="text" 
                                placeholder="Search products..." 
                                autoFocus 
                            />
                            <button onClick={() => setSearchOpen(false)} aria-label="Close search" className="cursor-pointer text-gray-500 hover:text-black ml-1">
                                <X size={16} />
                            </button>
                        </>
                    ) : (
                        <button onClick={() => setSearchOpen(true)} aria-label="Open search" className="text-gray-700 hover:text-black cursor-pointer p-1">
                            <Search size={20} className="stroke-[1.75]" />
                        </button>
                    )}
                </div>

                {/* Cart Badge */}
                <div className={`${searchOpen ? 'hidden sm:block' : 'relative'} cursor-pointer sm:mr-2`}>
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://w3.org">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-[10px] text-white bg-destructive w-4 h-4 flex items-center justify-center rounded-full">3</button>
                </div>

                {/* Desktop Login Button */}
                <button className={`${searchOpen ? 'hidden md:flex' : 'hidden sm:flex'} items-center justify-center gap-2 cursor-pointer pl-6 pr-8 py-2 bg-destructive hover:opacity-90 transition text-white rounded-full text-sm font-medium`}>
                    <LogIn size={16} />
                    <span>Login</span>
                </button>

                {/* Mobile Hamburger Trigger */}
                <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className={`${searchOpen ? 'hidden sm:block' : 'block'} sm:hidden cursor-pointer z-50 ml-2`}>
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://w3.org">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-md py-6 flex-col items-start gap-4 px-5 text-sm sm:hidden z-40`}>
                {links.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setOpen(false)}
                        className={`block w-full py-1 transition-colors ${pathname === link.href ? 'text-destructive font-semibold' : 'text-gray-700'}`}
                    >
                        {link.name}
                    </Link>
                ))}
                
                {/* Mobile Login Button */}
                <button className="w-full flex items-center justify-center gap-2 cursor-pointer text-center px-6 py-2.5 mt-2 bg-destructive hover:opacity-90 transition text-white rounded-full text-sm font-medium">
                    <LogIn size={16} />
                    <span>Login</span>
                </button>
            </div>

        </nav>
    )
}

export default Header
