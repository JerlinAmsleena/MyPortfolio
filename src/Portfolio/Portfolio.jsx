import React from "react";
import { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { User, Lightbulb, Folder, Mail } from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("Java");
    const projects = [
        {
            title: "HireXpert",
            description: "HireXpert is an AI-driven Resume Analyzer for efficient candidate screening.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/logo1_redzuu.png",
            link: "https://github.com/ThoufeekRZ/HireExpert",
            concepts: ["React", "Java", "MySQL", "AI", "Python"],
        },
        {
            title: "Banking System",
            description:
                "A console-based Java banking system with role-based access, account approval, and MySQL integration for secure data management.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191330/bank_crtstz.png",
            link: "https://github.com/JerlinAmsleena/BankConsoleProject",
            concepts: ["Java", "MySQL"],
        },
        {
            title: "Printer Job Scheduler",
            description: "A queue-based system for managing and processing print jobs efficiently in Java.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/lQ1_xkuzze.png",
            link: "https://github.com/JerlinAmsleena/PrinterJobScheduler",
            concepts: ["Java", "Queue"],
        },
        {
            title: "Thread Race",
            description: "A race simulation where multiple threads compete to reach the finish line first.",
            image:
                "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742196257/Screenshot_from_2025-03-17_12-54-00_iuzl6l.png",
            link: "https://github.com/JerlinAmsleena/ThreadRace",
            concepts: ["Java", "Socket", "Thread"],
        },
        {
            title: "1-1 Chat",
            description: "A one-on-one chat application using Java sockets for real-time communication.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742196842/header_a3gxwu.png",
            link: "https://github.com/JerlinAmsleena/OneToOneChat",
            concepts: ["Java", "Thread", "Condition"],
        },
        {
            title: "SkillJet",
            description: "SkillJet is a job application platform connecting job seekers with employers for seamless hiring.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191332/skillJet_egxrdm.png",
            link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/JS_Projects/index.html",
            concepts: ["Javascript", "Html", "CSS"],
        },
        {
            title: "Zomato",
            description: "A Zomato-inspired UI design built using HTML and CSS.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191332/zomato_elp9yl.png",
            link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/Zomato/mainpage.html",
            concepts: ["Html", "CSS"],
        },
        {
            title: "Filter Fun",
            description:
                "Filter Fun is a web-based image filtering tool using HTML, CSS, and JavaScript with the <canvas> tag.",
            image:
                "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742195340/black-and-white-filter-before-and-after-comparison-for-a-young-lady-removebg-preview_s19xsh.png",
            link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/FilterFun/",
            concepts: ["Html", "CSS", "Canvas", "JavaScript"],
        },
        {
            title: "Timer",
            description: "A simple timer that counts up or down, tracking time efficiently.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742195339/images-removebg-preview_dongdx.png",
            link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/JS_Assignment026/",
            concepts: ["Html", "CSS", "JavaScript"],
        },
        {
            title: "Rock-Paper-Scissors-Lizard-Spock",
            description: "A fun, interactive game where you play Rock-Paper-Scissors-Lizard-Spock against the computer.",
            image:
                "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742195663/Screenshot_from_2025-03-17_12-43-40-removebg-preview_dc2xjs.png",
            link: "https://jerlinamsleenaj-7469-8443.zcodeusers.in/JS_Assignment023/",
            concepts: ["JavaScript", "Html", "CSS"],
        },
        {
            title: "4 Pics in 1 Word",
            description:
                "Developed a fun and interactive '4 Pics 1 Word' game in Scratch, enhancing problem-solving and creativity.",
            image: "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742191331/4pic_kzsgp3.png",
            link: "https://scratch.mit.edu/projects/1039054027/fullscreen/",
            concepts: ["Scratch", "Loop", "Function", "Condition"],
        },
        {
            title: "Burst Balloons",
            description: "A fun game where you pop balloons before they escape!",
            image:
                "https://res.cloudinary.com/dkyjnn3of/image/upload/v1742196099/Screenshot_from_2025-03-17_12-51-20_ikuhfp.png",
            link: "https://scratch.mit.edu/projects/1034288034/fullscreen/",
            concepts: ["Scratch", "Loop", "Audio"],
        },
    ]

    // Filter projects based on active tab
    const filteredProjects =
        activeTab === "All"
            ? projects
            : projects.filter((project) => {
                if (activeTab === "Java") {
                    return project.concepts.includes("Java")
                } else if (activeTab === "Javascript") {
                    return project.concepts.includes("Javascript") || project.concepts.includes("JavaScript")
                } else if (activeTab === "HTML&CSS") {
                    return project.concepts.includes("Html") || project.concepts.includes("CSS")
                } else if (activeTab === "Scratch") {
                    return project.concepts.includes("Scratch")
                }
                return false
            })

    const tabs = ["All", "Java", "Javascript", "HTML&CSS", "Scratch"]

    return (
        <div className="portfolio-container">
            
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
                    <h2 style={{ color: "white" }}>Backend Developer</h2>
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
                    {section === "Projects" && (
                        <>
                            <div className="project-tabs">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        className={`tab-button ${activeTab === tab ? "active" : ""}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="projects-list">
                                {filteredProjects.map((project, i) => (
                                    <motion.div
                                        key={i}
                                        className="project-card"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="project-image-container">
                                            <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                                            <div className="project-overlay">
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                <div className="concepts-list">
                                                    {project.concepts.map((concept, index) => (
                                                        <span key={index} className="concept">
                                                            {concept}
                                                        </span>
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
                        </>
                    )}
                    {section === "Contact" && <div> <p> <strong> ZS ID: </strong> ZSTTK388 </p> <p> <strong>Mail ID:</strong> jerlinamsleena.j@zohocorp.com</p> <p> <strong>Phone Number:</strong> 9344035151</p> </div>}
                </motion.section>
            ))}

           
        </div>
    );
};

export default Portfolio;
