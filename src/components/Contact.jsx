

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <form action="https://formsubmit.co/nepalsinhrajput007773@gmail.com" method="POST">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white w-full py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
