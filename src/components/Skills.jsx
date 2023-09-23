
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaDatabase,
    FaPython,
    FaJava,
    FaSass,
    FaBootstrap,
} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 size={60} /> },
        { name: 'CSS3', icon: <FaCss3 size={60} /> },
        { name: 'JavaScript', icon: <FaJs size={60} /> },
        { name: 'React', icon: <FaReact size={60} /> },
        { name: 'Node.js', icon: <FaNodeJs size={60} /> },
        { name: 'Git', icon: <FaGit size={60} /> },
        { name: 'Database', icon: <FaDatabase size={60} /> },
        { name: 'Python', icon: <FaPython size={60} /> },
        { name: 'Java', icon: <FaJava size={60} /> },
        { name: 'Sass', icon: <FaSass size={60} /> },
        { name: 'Bootstrap', icon: <FaBootstrap size={60} /> },
    ];

    return (
        <section id="skills" className="bg-gray-200 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-black flex flex-col items-center justify-center hover:text-blue-500 transform hover:scale-110 transition duration-300 ease-in-out"
                        >
                            {skill.icon}
                            <p className="text-lg mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
