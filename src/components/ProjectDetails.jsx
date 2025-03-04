import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

const ProjectDetails = () => {
    const { id } = useParams(); // Get ID from URL
    const project = PROJECTS.find((_, index) => index === Number(id)); 
    if (!project) {
        return <h1 className="text-center my-20 text-4xl">Project Not Found</h1>;
    }

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="mt-20 text-center text-4xl margin-t-300"
            >
                {project.title}
            </motion.h1>
            <motion.h6
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-1xl cursor-pointer"
            >
                <a 
                    href={project.source} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mr-4 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:bg-neutral-800 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    View Project
                </a>
            </motion.h6>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="rounded" src={project.image} alt="logo" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{project.description}</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="rounded" src={project.image1} alt="logo" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{project.description1}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
