import React from "react";
import { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { User, Lightbulb, Folder, Mail } from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {

    return (
        <div className="portfolio-container">
            {/* Navbar */}
            {/* <nav className="navbar">
                <motion.h2 className="logo" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    JA
                </motion.h2>
                <ul className="nav-links">
                    {["About", "Skills", "Projects", "Contact"].map((item, index) => (
                        <motion.li key={index} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 * index, duration: 0.5 }}>
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav> */}
            <nav className="navbar">
                <motion.h2
                    className="logo"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    JA
                </motion.h2>

                <ul className="nav-links">
                    {[
                        { name: "About", icon: <User size={18} /> },
                        { name: "Skills", icon: <Lightbulb size={18} /> },
                        { name: "Projects", icon: <Folder size={18} /> },
                        { name: "Contact", icon: <Mail size={18} /> }
                    ].map((item, index) => (
                        <motion.li key={index} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 * index, duration: 0.5 }}>
                            <a href={`#${item.name.toLowerCase()}`} className="nav-item">
                                {item.icon} <span>{item.name}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Hero Section */}
            <header id="about" className="hero">
                {/* Left Side: Text Content */}
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>
                        Hi, I'm <span>Jerlin Amsleena</span>
                    </h1>
                    <h2 style={{ color: "white" }}>Backend Trainee</h2>
                    <p>
                        {/* Passionate and driven, I am always eager to learn and embrace new challenges with a strong mindset. I thrive in dynamic environments, continuously improving my skills and adapting to new technologies. With a problem-solving approach and a keen eye for detail, I strive to deliver quality results in everything I do */}
                        I am from Pavoorchatram, driven by a passion for learning and embracing new challenges. With a problem-solving mindset and keen attention to detail, I strive to deliver high-quality results in every task I undertake.
                    </p>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                </motion.div>

            </header>


            {/* Sections */}
            {["Skills", "Projects", "Contact"].map((section, index) => (
                <motion.section id={section.toLowerCase()} className={`${section.toLowerCase()}-section`} key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                    <h2>{section}</h2>
                    {/* {section === "About" && <p>I specialize in backend development, building robust applications with a focus on performance.</p>} */}
                    {/* {section === "Skills" && (
                        <div className="skills-list">
                            {["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "GraphQL"].map((skill, i) => (
                                <motion.span key={i} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    )} */}
                    {section === "Skills" && (
                        <div className="skills-listFull">
                            <div className="skills-list">
                                {[
                                    { name: "Java", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191330/java_zs9qjz.png" },
                                    { name: "JavaScript", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191330/javascript_bkjvdj.png" },
                                    { name: "MySQL", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/mysql_gakere.png" },
                                    { name: "React JS", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191332/react_uuvlhr.png" },

                                    { name: "HTML & CSS", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191330/html-css_splrli.png" },
                                    { name: "Scratch", img: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/scratch_umjjhs.png" }
                                ].map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        className="skill-card"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <img src={skill.img} alt={skill.name} className="skill-icon" />
                                        <p>{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* {section === "Projects" && (
                        <div className="projects-list">
                            {["Project One", "Project Two"].map((project, i) => (
                                <motion.div key={i} className="project-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <h3>{project}</h3>
                                    <p>A scalable and high-performance backend project.</p>
                                </motion.div>
                            ))}
                        </div>
                    )} */}
                    {section === "Projects" && (
                        <div className="projects-list">
                            {[
                                {
                                    title: "HireXpert",
                                    description: "HireXpert is an AI-driven Resume Analyzer for efficient candidate screening.",
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/logo1_redzuu.png",
                                    link: "https://github.com/JerlinAmsleena/HireXpert",
                                    concepts: ["React", "Java", "MySQL", "AI", "Python"]
                                },
                                {
                                    title: "Banking System",
                                    description: "A console-based Java banking system with role-based access, account approval, and MySQL integration for secure data management.",
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191330/bank_crtstz.png",
                                    link: "https://github.com/JerlinAmsleena/BankConsoleProject",
                                    concepts: ["Java", "MySQL"]
                                },
                                {
                                    title: "Printer Job Scheduler",
                                    description: "A queue-based system for managing and processing print jobs efficiently in Java.",
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/lQ1_xkuzze.png",
                                    link: "https://github.com/JerlinAmsleena/PrinterJobScheduler",
                                    concepts: ["Java", "Queue"]
                                },
                                {
                                    title: "SkillJet",
                                    description: "SkillJet is a job application platform connecting job seekers with employers for seamless hiring.",
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191332/skillJet_egxrdm.png",
                                    link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/JS_Projects/index.html",
                                    concepts: ["Javascript", "Html", "CSS"]
                                },
                                {
                                    title: "Zomato",
                                    description: "A Zomato-inspired UI design built using HTML and CSS.",
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191332/zomato_elp9yl.png",
                                    link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/Zomato/mainpage.html",
                                    concepts: ["Html", "CSS"]
                                },
                                {
                                    title: "4 Pics in 1 Word",
                                    description: `Developed a fun and interactive "4 Pics 1 Word" game in Scratch, enhancing problem-solving and creativity.`,
                                    image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/4pic_kzsgp3.png",
                                    link: "https://scratch.mit.edu/projects/1039054027/fullscreen/",
                                    concepts: ["Scratch", "Loop", "Function", "Condition"]
                                },
                            ].map((project, i) => (
                                <motion.div
                                    key={i}
                                    className="project-card"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="project-image-container">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                        <div className="project-overlay">
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <div className="concepts-list">
                                                {project.concepts.map((concept, index) => (
                                                    <span key={index} className="concept">{concept}</span>
                                                ))}
                                            </div>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                                                View Project →
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}




                    {section === "Contact" && <p> ZS ID: ZSTTK388 | Mail ID: jerlinamsleena.j@zohocorp.com | Phone Number: 9344035151</p>}
                </motion.section>
            ))}

            {/* Footer */}
            {/* <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <p>© 2025 Backend Developer. All Rights Reserved.</p>
            </motion.footer> */}
        </div>
    );
};

export default Portfolio;
