

const About = () => {
    return (
        <section id="about" className="bg-gray-100 py-16">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-6">
                    I am a passionate web developer with expertise in various technologies
                    including HTML, CSS, JavaScript, and React. I love building web applications
                    and creating beautiful user experiences.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/nepalsinhrajput/" className="text-blue-500 hover:underline">LinkedIn</a>
                    <a href="https://twitter.com/nepalsinh7773" className="text-blue-500 hover:underline">Twitter</a>
                    <a href="https://instagram.com/nepalsinh7773" className="text-blue-500 hover:underline">Instagram</a>
                </div>
                <p className="text-lg mt-4">Email: <a href="mailto:nepalsinhrajput007773@gmail.com">nepalsinh007773@gmail.com</a></p>
            </div>
        </section>
    );
};

export default About;
