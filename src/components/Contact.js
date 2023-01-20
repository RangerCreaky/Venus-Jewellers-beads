import React from 'react';

import Iframe from "react-iframe";

const ContactUs = () => {
    return (
        <>
            {/* <section class="text-gray-600 body-font   bg-red-100"> */}
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
                <div class="lg:w-1/2   rounded-lg overflow-none sm:mr-10 p-10 flex items-end justify-start ">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2071021790507!2d78.49304141466261!3d17.40184598807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c1d0000001%3A0x1b9fe9cc3053db7f!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674158853315!5m2!1sen!2sin"
                        width="1000"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></Iframe>

                    {/* <div class="bg-white flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div> */}
                </div>

                <div class="lg:w-1/2 rounded-lg overflow-none sm:mr-10 p-10 flex items-end justify-start ">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.4451701463304!2d79.56831161471257!3d18.0045323877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334582e9e72123%3A0x76188943e75ceb6e!2sVenus%20Jewellers!5e0!3m2!1sen!2sin!4v1674193884305!5m2!1sen!2sin"
                        width="1000"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></Iframe>
                    {/* <div class="bg-white flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div> */}
                </div>
            </div>
            <div class=" bg-white flex flex-col md:ml-auto  md:py-8 mt-8 md:mt-0 items-center justify-center w-full">
                <div>
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p class="leading-relaxed mb-5 text-gray-600">
                        Please fill the deatils , we will get back to you . Thank You
                    </p>
                    <div class="  mb-4">
                        <label for="name" class="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="  mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="  mb-4">
                        <label for="message" class="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button>
                    {/* <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                </div>
            </div>
            {/* </section> */}
        </>
    );
};

export default ContactUs;
