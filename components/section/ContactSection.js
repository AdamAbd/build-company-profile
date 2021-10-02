import React from 'react';
import Image from 'next/image';
import { ArrowCircleRightIcon, ArrowCircleLeftIcon, ArrowCircleDownIcon } from '@heroicons/react/solid';

import Field from '../widget/Field';

export default function ContactSection() {
    return (
        <section id="contact" className="pt-28 pb-14 bg-gray-500">
            <h2 className="text-white text-4xl font-semibold text-center">Questions?</h2>
            <div className="container mx-auto flex justify-between items-start py-14">
                <div className="w-5/12 items-start">
                    <svg width="210" height="40" viewBox="0 0 283 64" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#ffff" />
                    </svg>
                    <h2 className="text-white text-2xl font-semibold py-6 tracking-wide">PT. Universal Coco Indonesia</h2>
                    <p className="text-white text-xl font-normal leading-loose">We also continue to update the information about the company through social media, for the latest information you can follow our social media.</p>
                    <div className="flex pt-10">
                        <ArrowCircleRightIcon className="h-10 w-10 text-white" />
                        <ArrowCircleLeftIcon className="h-10 w-10 text-white" />
                        <ArrowCircleDownIcon className="h-10 w-10 text-white" />
                    </div>
                </div>
                <div className="w-6/12">
                    <form action="">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-6/12 px-4">
                                <Field label="Name" name="name" type="text" />
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <Field label="Email" name="email" type="text" />
                            </div>
                        </div>
                        <Field label="Subject" name="subject" type="text" />
                        <Field
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-left">
                            {/* <Button variant="black">Send</Button> */}
                            <button type="submit" className="bg-green-700 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">Halo</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
