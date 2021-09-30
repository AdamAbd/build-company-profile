import React from 'react';
import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className="py-28 bg-gray-50" id="about">
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-col w-5/12 justify-center">
                    <h2 className="text-black text-4xl font-semibold">About Us</h2>
                    <p className="text-black text-xl font-light tracking-wider pt-10 pb-4">We process more than 1,500 hectares of coconut plantations, spread across several islands in Eastern Indonesia.</p>
                    <p className="text-black text-xl font-light tracking-wider">In the beginning, our company was engaged in manufacturing where we processed coconut derivative products, namely coconut shells into coconut shell charcoal. And after that our company expanded and expanded into coconut plantations, to process more derivative products.</p>
                </div>
                <Image src="/coconut.png" width="500" height="500" className="w-7/12"/>
            </div>
        </section>
    )
}
