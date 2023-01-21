import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='w-full md:h-[104px] h-[180px] -z-10 bg-white'></div>
            <div class=" bg-white flex flex-col md:ml-auto  md:py-8 mt-8 md:mt-0 items-center justify-center w-full">
                <div>
                    <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                        Enquire
                    </h2>
                    <p class="leading-relaxed mb-5 text-gray-600">
                        Please fill the details , we will get back to you . Thank You
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
                        <label for="phone" class="leading-7 text-sm text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
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
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
