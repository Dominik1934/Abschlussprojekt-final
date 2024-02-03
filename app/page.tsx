"use client"

import * as React from "react"
import "./layout";
import 'flowbite';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";


export function Home() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <link href={"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css"} rel="stylesheet"/>
            <Navigation>
            </Navigation>
            {/*Banner*/}
            <div id="marketing-banner"
                 className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-4 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                    <a href="#"
                       className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.svg" className="h-6 me-2" alt="24/7 Logo"/>
                        <span
                            className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">24/7</span>
                    </a>
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Jetzt 10%
                        Rabatt für neue Kunden sichern!</p>
                </div>
                <div className="flex items-center flex-shrink-0">
                    <a href="#"
                       className="px-5 py-2 me-2 text-xs font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-100 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none dark:focus:ring-green-600">Sign
                        up</a>
                    <button data-dismiss-target="#marketing-banner" type="button"
                            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close banner</span>
                    </button>
                </div>
            </div>
            {/*Jumbotron*/}
            <section
                className="dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className="pt-4 pb-4 pl-4 pr-4 mx-auto max-w-screen-xl text-center z-10 relative">
                    <a href="#"
                       className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Sale!</span>
                        <span
                            className="text-sm font-medium">25% Rabatt auf alle Bio-Produkte</span>
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Wir
                        sind für die Menschen da</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        Unser Ziel hier bei 24/7 ist Ihnen faire, naturfreundliche, günstige Produkte zu verkaufen.
                        Wir konnten bereits über 10+ Millionen Kunden zufriedenstellen.<br/>
                        Melden Sie sich für unseren wöchentlichen Newsletter an!
                    </p>
                    <form className="w-full max-w-md mx-auto">
                        <label htmlFor="default-email"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email
                            sign-up</label>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input type="email" id="default-email"
                                   className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Geben Sie hier ihre E-Mail ein..." required/>
                            <button type="submit"
                                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ich
                                bin dabei!
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {/*Accordion*/}
            <Accordion type="single" collapsible className="pb-4 m-auto w-2/4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Gibt es einen kostenlosen Lieferservice?</AccordionTrigger>
                    <AccordionContent>
                        Ja, ab einem Bestellwert von 50€ liefern wir kostenlos zu ihrer Haustür.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Wie lange dauert es bis ich meine Bestellung erhalte?</AccordionTrigger>
                    <AccordionContent>
                        Es liegt an ihrem Standort. Unsere 200 Standorte in Deutschland sind bei den meisten Großstätten, dort dauert es ca. 20 Minuten.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Kann ich auch Bar bezahlen?</AccordionTrigger>
                    <AccordionContent>
                        Ja, wir bieten Bar- und Kartenzahlung an. Zusätzlich können sie mit PayPal, ApplePay oder Kryptowährungen zahlen.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Sind ihre Produkte umweltfreundlich?</AccordionTrigger>
                    <AccordionContent>
                        Natürlich, weiter Informationen zu Umweltfreundlichkeit <a href="#"> hier.</a>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Footer>
            </Footer>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src={"https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"}></script>
        </main>
    )
}

export default Home;
