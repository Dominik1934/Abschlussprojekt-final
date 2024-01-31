"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import 'flowbite';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";


function Navigation() {
    const { setTheme } = useTheme()

    return (
        <main className="bg-white dark:bg-gray-900">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"/>
            {/*Nav*/}
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 z-30">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="z-30 flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.svg" className="z-30 h-8" alt="24/7 Logo"/>
                        <span
                            className="z-30 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">24/7 Shop</span>
                    </a>
                    <button data-collapse-toggle="mega-menu-full-image" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mega-menu-full-image" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="z-30 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div id="mega-menu-full-image"
                         className="z-30 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                   aria-current="page">Einkaufslisten</a>
                            </li>
                            <li>
                                <button id="mega-menu-full-cta-image-button"
                                        data-collapse-toggle="mega-menu-full-image-dropdown"
                                        className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Produkte <svg
                                    className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg></button>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Nachhaltigkeit</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Kontakt</a>
                            </li>
                            <li>
                                <span className="mr-2 mb-2"></span>
                            </li>
                        </ul>
                        {/*ThemeToggle*/}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun
                                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                                    <Moon
                                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div id="mega-menu-full-image-dropdown"
                     className="z-30 hidden mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                    <div
                        className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                        <ul className="z-30 hidden mb-4 space-y-4 md:mb-0 md:block"
                            aria-labelledby="mega-menu-full-image-button">
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Obst & Gemüse
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Backwaren
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Fast-Food
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Haushalt
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Tiefgekühltes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Getränke
                                </a>
                            </li>
                        </ul>
                        <ul className="z-30 mb-4 space-y-4 md:mb-0">
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Milchprodukte
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Fisch & Fleisch
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Süßigkeiten
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Spirituosen
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    Saucen
                                </a>
                            </li>
                        </ul>
                        <a href="#"
                           className="z-30 p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply bg-[url('/nav-dropdown-image.jpg')]"
                        >
                            <p className="text-2xl mb-5 font-extrabold leading-tight tracking-tight text-white">Unsere
                                Bio-Produkte</p>
                            <button type="button"
                                    className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                                Einkaufen
                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
        </main>
    )
}


export { Navigation }