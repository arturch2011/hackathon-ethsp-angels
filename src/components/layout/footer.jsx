'use client'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-slate-700">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    AI Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Web3 Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Sustainability
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Whitepapers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-camber hover:text-amber transition-colors duration-300">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-amber mt-8 pt-4 text-center">
                    <p className="text-sm text-amber">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
