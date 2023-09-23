
const Projects = () => {
    const projects = [
        {
            title: 'Social Media Application',
            description: 'This is social media application built with MERN stack',
            imageSrc: '/portfolio/p1.png',
            link: "https://github.com/Kailash8799/SocialMediaApp_MERN"
        },
        {
            title: 'News Application',
            description: 'This is News application built with React and api',
            imageSrc: 'https://opengraph.githubassets.com/935db8c101d6eb5dc75e2ef1bee175a61962ad60b40a69cfb72b8e94ab2b70bb/Nepal7773/newsApplication',
            link: "https://github.com/Nepal7773/newsApplication"
        },
        {
            title: 'World Time Flutter app',
            description: 'This is World time flutter application ',
            imageSrc: 'https://opengraph.githubassets.com/a589d0163cfd8355779817dc89338c597f3904d361e9c1154645f77cc8dd0beb/Nepal7773/World-Time-Flutter-App',
            link: "https://github.com/Nepal7773/World-Time-Flutter-App"
        },
        {
            title: 'Todo Application',
            description: 'This is Todo application built with Flutter',
            imageSrc: '/portfolio/p4.png',
            link: "https://github.com/Nepal7773/todo-flutter"
        },
        {
            title: 'Snake Game',
            description: 'This is Snake Game built with pure javascript',
            imageSrc: '/portfolio/p5.png',
            link: "https://github.com/Nepal7773/snake-game"
        },
        // Add more project objects here
    ];

    return (
        <section id="projects" className="py-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <a
                        href={project.link}
                        target="_blank"
                        key={index}
                        className="bg-white p-6 rounded shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out"
                    >
                        <img
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
