"use client"

import * as React from "react"
import "./layout";
import 'flowbite';

import ProductCard, { ProductProp } from "@/components/productCard";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import { Spinner } from "@/components/ui/spinner";

import { data } from "../_data";
import { it } from "node:test";

async function obstgemuese() {
    return (
        <main>
            <h2>Obst & Gemüse</h2>

            <section className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item: ProductProp, index) => (
                    <ProductCard key={item.id} product={item} index={index} />
                ))}
            </section>

        </main>
    );
}