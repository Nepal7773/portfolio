

const Hero = () => {
    return (
        <section id="hero" className="bg-gray-800 text-white py-16 text-center">
            <div className="mx-auto w-32 h-32 rounded-full bg-white border-4 border-blue-500 overflow-hidden">
                <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl font-bold mt-4">Hello, I am Nepal</h1>
            <p className="text-lg">A passionate developer.</p>
            <button href="#contact" className="bg-white text-gray-800 px-4 py-2 mt-6 rounded-full hover:bg-gray-900 duration-300 transition-all hover:text-white">
                Contact Me
            </button>
        </section>
    );
};

export default Hero;
