import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import "./App.css";

import heroImg from "./assets/cover.png";
import skillImg from "./assets/skills.png";
import embednchat from "./assets/embed_n_chat.jpg";
import embednchatvdo from "./assets/embed_and_chat.mp4";
import topdf from "./assets/toPDF.jpg";
import topdfvdo from "./assets/to_PDFvdo.mp4";
import remindly from "./assets/ReminderAlert.jpg";
import remindlyvdo from "./assets/remindly.mp4";
import inrglobaly from "./assets/inr.jpg";
import inrglobalyvdo from "./assets/inr2globaly.mp4";
import cicd from "./assets/cicd.jpg";
import cicdvdo from "./assets/cicd_demo.mp4";
import hearzap from "./assets/hearzap.jpg";
import cmp from "./assets/cmp.jpg";



export default function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    // Smooth scroll for header links
    const links = document.querySelectorAll("header a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

   const go = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  return (
    <>
     <header className="header">
  <div className="header-inner">
    <nav>
      <span onClick={() => go("hero")}>Home</span>
      <span onClick={() => go("about")}>About Me</span>
      <span onClick={() => go("skills")}>Skills & Tools</span>
      <span onClick={() => go("projects")}>My Works</span>
      <span onClick={() => go("contact")}>Contact</span>
    </nav>
  </div>
</header>


      {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-inner">
            <div className="hero-text reveal">
              <h1>Akshaya Stephen</h1>
              <div className=" reveal">
      <h2>Python Developer</h2>
      <h3>6+ Years of Experience Building Software Solutions</h3>
      <p>Passionate in Full-Stack and Data Engineering</p>
  </div><br/><br/>
            <div className="social-icons">
  <a
    href="https://github.com/AkshayaStephen125/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
&nbsp;&nbsp;&nbsp;&nbsp;
  <a
    href="https://www.linkedin.com/in/akshaya-stephen-0982b5171/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <div className="buttons">
              <span onClick={() => go("contact")} className="btn primary" style={{ marginTop: "180px" }}>Contact Me</span>
            </div>
</div>

          </div>
           <div className="hero-image reveal">
        <div className="">
          <img src={heroImg} alt="Akshaya Stephen" />
        </div>
      </div>
        </div>
      </section>

      {/* EXPERIENCE
      <section id="experience" className="section light">
        <h2 className="reveal">Experience</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {[
            { year: "2024 - Present", role: "Full Stack and Data Engineering", company: "Career Sabbatical | Professional Development" },
            { year: "2023 - 2024", role: "Software Programmer - Python", company: "Iza Medi Technologies Pvt. Ltd. (Product Based Company)" },
            { year: "2022 - 2023", role: "Python Developer", company: "Seaant Web Technologies Pvt. Ltd." },
            { year: "2020 - 2022", role: "Software Developer", company: "MTL WebKing Technology Pvt. Ltd." },
            { year: "2019 - 2020", role: "Software Developer Intern", company: "Intellize Software Solutions" }
          ].map((item, i) => (
            <div key={i} className={`timeline-item reveal ${i % 2 ? "right" : "left"}`}>
              <div className="dot"></div>
              <div className="content">
                <span>{item.year}</span>
                <h3>{item.role}</h3>
                <p>{item.company}</p>

              </div>
            </div>
          ))}
        </div>
      </section> */}
 {/* ABOUT */}
      <section id="about" className="section light">
        <h2 className="reveal">About Me</h2>
        <div className="about-wrapper reveal">
       <p>My journey in software development began with a passion for transforming ideas into impactful digital solutions. Over the years, that passion has evolved into strong expertise in building scalable backend architectures, intelligent AI-powered systems, and modern full-stack applications that solve real-world business problems.</p>
        <br/>
      <p>I am Akshaya Stephen, a Python developer with 6 years of experience specializing in building scalable, secure, and maintainable software solutions across diverse business domains. Throughout my professional journey, I have worked on designing and developing robust backend and creating efficient APIs, implementing complex business workflows, and building applications capable of supporting real-time production environments. My experience also extends into AI-integrated systems, workflow automation solutions and scalable real-time architectures and full-stack application development, where I contribute to building seamless end-to-end user experiences by combining scalable backend architectures with modern and responsive frontend applications. Alongside development, I focus strongly on system design, application scalability, clean coding practices, maintainability, and long-term software reliability, ensuring that the solutions I build are not only technically strong but also aligned with business goals and evolving user needs.</p>
      <br/>
      <p>Having worked in a healthcare product-based company, I gained strong hands-on experience across B2B and B2C domains, building end-to-end systems from customer-facing applications to administration and management dashboards, covering complete workflows from purchase and sales processing to secure role-based permissions, automated reporting, and real-time notifications. </p>
      <br/>
      <p>My experience in service-based companies further shaped my adaptability. I worked across multiple projects, contributed to different application modules, and supported long-term maintenance and enhancements—learning how to build systems that evolve gracefully over time.</p>
      <br/>
      <p>My goal is to apply the skills and experience I have gained to build modern software solutions that align with current industry and business trends. I focus on developing applications that are reliable, scalable, and adaptable to evolving business requirements supporting real-world operational needs. By combining strong technical foundations with modern technologies and practical business understanding, I aim to contribute to building efficient digital solutions that deliver long-term value, improve processes, and support business growth.</p>

</div>
      </section>
{/* SKILLS */}
<section id="skills" className="section skills-section">
  <div className="skills-container reveal">
    {/* Title */}
     <h2 className="reveal">Skills & Tools</h2>

    {/* Photo + Card wrapper */}
    <div className="skills-photo-wrapper">
      
      {/* Photo on the left */}
      <div className="photo-container reveal" style={{alignItems: "center"}}>
        <img src={skillImg} alt="Akshaya Stephen" />
      </div>

      {/* Skills card on the right */}
      <div className="skill-card reveal">

<div className="skill-category">
  <div className="category-title">Programming Languages</div>
  <div className="category-skills">Python • Java • C++ • SQL • JavaScript</div>
</div>

<div className="skill-category">
  <div className="category-title">Backend Frameworks & APIs</div>
  <div className="category-skills">
    Django • DRF • Flask • FastAPI • REST API • GraphQL (Graphene for Django & Strawberry for FastAPI)
  </div>
</div>

<div className="skill-category">
  <div className="category-title">AI & Data Engineering</div>
  <div className="category-skills">
    RAG Architecture • LLM Integration • ETL Pipelines • Apache Airflow
  </div>
</div>

<div className="skill-category">
  <div className="category-title">Front End Technologies</div>
  <div className="category-skills">HTML • CSS • Bootstrap • JavaScript • jQuery • ReactJS</div>
</div>

<div className="skill-category">
  <div className="category-title">Database Management</div>
  <div className="category-skills">MySQL • PostgreSQL • MongoDB • Python ORM • ChromaDB</div>
</div>

<div className="skill-category">
  <div className="category-title">Version Control</div>
  <div className="category-skills">Git • GitHub</div>
</div>

<div className="skill-category">
  <div className="category-title">Deployment & DevOps</div>
  <div className="category-skills">
    GCP • AWS (S3, Lambda, EC2) • CI/CD Pipelines • Docker
  </div>
</div>

<div className="skill-category">
  <div className="category-title">Messaging & Distributed Systems</div>
  <div className="category-skills">
    Apache Kafka • RabbitMQ • Celery
  </div>
</div>

<div className="skill-category">
  <div className="category-title">Tools</div>
  <div className="category-skills">
    VS Code/PyCharm • Postman/SwaggerUI • Figma • Jira • Apache Airflow • Power BI
  </div>
</div>

      </div>

    </div>
  </div>
</section>





      {/* PROJECTS */}
      <section id="projects" className="section light">
        <h2 className="reveal">Insights on My Works</h2>
 <div className="projects-list">
  {[
    {
      title: "embedNchat",
      desc: [
  "embedNchat is a SaaS-based application designed to help businesses integrate AI-powered customer support into their websites with minimal setup. Clients can create their own accounts, configure customized brand themes and generate an embeddable API script for seamless chatbot integration. By uploading their knowledge base documents the platform enables intelligent customer interaction directly through the embedded chat window. Website visitors can initiate real-time conversations, receive AI-generated responses based on the uploaded knowledge database.The platform also supports agent collaboration, allowing support team to manage customer issues and resolve tickets efficiently.",
  "The application is built using FastAPI with an event-driven and real-time communication architecture to support scalable customer interaction. The system implements a Retrieval-Augmented Generation (RAG) architecture, where uploaded knowledge base documents are processed into embedding vectors and stored for semantic search and contextual retrieval. When users submit queries, the application retrieves the most relevant knowledge content and provides AI-generated responses using LLM integration. Apache Kafka is utilized for streaming data between distributed services, enabling reliable real-time processing. The platform also includes a dedicated agent dashboard to monitor conversations, manage customer tickets, collaborate with support teams whenever AI responses require escalation."
],
tech: "FastAPI + RAG + Apache Kafka",
techStack: [
  {
    category: "Frontend",
    items: ["HTML", "Jinja2 Templates", "CSS", "JavaScript"]
  },
  {
    category: "Backend",
    items: ["FastAPI", "RAG", "LLM Integration"]
  },
  {
    category: "Real-Time Communication",
    items: ["WebSocket", "Apache Kafka Streaming"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "ChromaDB"]
  },
  {
    category: "DevOps",
    items: ["Docker"]
  }
]

,
      link: "https://github.com/AkshayaStephen125/embedNchat",
      img: embednchat,
      video: embednchatvdo, 
    },
    {
      title: "toPDF",
      desc: [
  "toPDF is an AWS-driven, event-based backend service designed to automatically convert uploaded text files, images, and documents into standardized PDF outputs. The system relies on Amazon S3 as the primary storage layer, where file uploads trigger an automated processing pipeline. Upon object creation in the S3 bucket, an AWS Lambda function is invoked to perform content transformation and PDF generation, ensuring consistent document formatting and reliable output storage. This architecture leverages AWS-managed services to deliver a scalable, fault-tolerant, and highly available document conversion workflow.",
  "The user-facing interface for file uploads and system interaction is developed using a Django-based web application, which acts as the orchestration layer between the client and AWS services. To implement this workflow securely and efficiently, IAM roles and fine-grained permission policies were configured to establish controlled trust relationships between S3, Lambda, and EC2 services. The AWS Lambda function is configured to be automatically invoked upon user file uploads to the Amazon S3 bucket. Once triggered, the function processes the uploaded content into a standardized PDF format, and persists the generated output to the designated S3 storage location. The application was deployed on an AWS EC2 instance and fronted with NGINX as a reverse proxy to handle incoming traffic and enforce production-ready configurations. The system is exposed via a public IP address with controlled access, ensuring secure and reliable availability while maintaining separation of concerns between compute, storage, and processing layers."
],
tech: "Django + AWS(Lambda, S3, EC2)",

techStack: [
    {
    category: "Frontend",
    items: ["Django Template"]
  },
  {
    category: "Backend",
    items: ["Django", "AWS Lambda Funtion"]
  },
  {
    category: "Cloud & Storage",
    items: ["AWS Lambda", "Amazon S3", "AWS EC2"]
  },
  {
    category: "Security",
    items: ["IAM Roles", "IAM Policies"]
  },
  {
    category: "Web Server & Deployment",
    items: ["NGINX", "Linux (Ubuntu)"]
  },
  {
    category: "Networking",
    items: ["Security Groups", "Inbound/Outbound Traffic Rules"
    ]
  },
]

,
      link: "http://51.20.53.186/",
      img: topdf,
      video: topdfvdo, 
    },
    {
      title: "Remindly",
      desc: [
  "Remindly is a full-stack reminder management application designed to help users schedule tasks and receive timely notifications, ensuring important events and deadlines are never missed. The application enables users to create, update, and manage reminders through a clean and intuitive interface, while delivering alerts at precise times using real-time communication. The front end is built with React.js for a responsive and interactive user experience and styled using Tailwind CSS to maintain a modern, consistent design. On the back end, Django powers the core business logic and exposes a GraphQL API, allowing flexible and efficient data querying while minimizing over-fetching and improving overall performance.",
  "I built this project to strengthen my full-stack development expertise and gain hands-on experience with modern backend architectures and asynchronous systems. The project was designed to deeply explore GraphQL as an API layer, RabbitMQ as a messaging queue, and Celery for background task processing, particularly for time-based reminder scheduling and notification delivery. To ensure real-time updates, WebSockets were integrated for instant push notifications, creating a smooth and event-driven user experience. Through this project, I focused on building a scalable, decoupled architecture that demonstrates practical knowledge of full-stack development, messaging queues, and real-time systems working together in a production-like environment."
],
tech: "React + GraphQL + RabbitMQ + WebSocket",

      techStack: [
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Django", "GraphQL API"]
  },
  {
    category: "Async & Real-Time",
    items: ["RabbitMQ", "Celery", "WebSockets"]
  },
  {
    category: "Database",
    items:  ["PostgreSQL (Django User & Admin Models)",
    "MongoDB (Application Data)"]
  },
  {
    category: "DevOps",
    items: ["Docker"]
  }
]
,
      link: "https://github.com/AkshayaStephen125/Project-Remindly",
      img: remindly,
      video: remindlyvdo, 
    },
    {
      title: "INR2Globally",
      desc: ["INR2Globally is a data analytics and reporting project designed to extract, track, and analyze day-to-day global currency exchange rates with respect to the Indian Rupee (INR). The system enables both historical and trend-based analysis of currency movements, including daily, monthly, and comparative rate changes. These insights are visualized through interactive Power BI dashboards, allowing users to easily monitor currency fluctuations, identify trends, and make data-driven interpretations from exchange rate patterns.",
      "I built this project to gain hands-on expertise in data engineering and analytics workflows, with a strong focus on ETL automation and orchestration. The solution is implemented using Apache Airflow to design and schedule ETL pipelines that automatically extract currency data from external APIs, transform it into an analytics-ready format, and load it into PostgreSQL. Airflow schedulers ensure consistent and timely data ingestion, while PostgreSQL serves as a reliable analytical data source for Power BI. The dashboards leverage DAX queries to enable efficient data modeling, real-time reporting, and meaningful visual insights, demonstrating a complete end-to-end data analytics pipeline from ingestion to visualization. The implementation reflects practical experience in building scalable, maintainable data pipelines and delivering insights through business intelligence tools."],
      tech: "Python + ETL + Apache Airflow",

      techStack: [
        {
          category: "Backend & Processing",
          items: ["Python"]
        },
  {
    category: "ETL & Orchestration",
    items: ["Apache Airflow", "ETL Pipelines"]
  },
  {
    category: "Database",
    items: ["PostgreSQL"]
  },
  {
    category: "Analytics & Visualization",
    items: ["Power BI"]
  },
  {
    category: "Devops",
    items: ["Docker"]
  }
]
,
      link: "https://github.com/AkshayaStephen125/Project-INR2GLOBALY",
      img: inrglobaly,
      video: inrglobalyvdo
    },
    {
      title: "CI/CD Implementation",
      desc: ["This portfolio website implements a fully automated CI/CD pipeline to build and deploy a modern JavaScript frontend application using GitHub Actions. The pipeline ensures reliable, repeatable builds and seamless deployment to GitHub Pages whenever changes are pushed to the main branch. By automating the build and deployment lifecycle, the project eliminates manual intervention, improves delivery speed, and ensures that only production-ready artifacts are published, making it suitable for professional-grade frontend applications.",
      "The workflow is designed with separate build and deploy jobs to maintain clear separation of concerns and enforce dependency control. The build stage checks out the repository, configures a Node.js 20 environment, installs dependencies, and generates an optimized production build, which is stored as a versioned artifact. The deploy stage consumes this artifact and securely publishes it to GitHub Pages using token-based authentication, ensuring controlled access and safe deployments. Conditional execution and artifact-based handoff improve reliability, traceability, and scalability of the deployment process."],
    tech: "GitHub Pages + GitHub Actions",

          techStack: [
      {
        category: "Version Control",
        items: ["Git", "GitHub"]
      },
      {
        category: "CI/CD & Automation",
        items: ["GitHub Actions", "YAML"]
      },
      {
        category: "Deployment",
        items: ["GitHub Pages"]
      }
    ]
    ,
      link: "https://github.com/AkshayaStephen125/AkshayaStephen125.github.io/blob/main/.github/workflows/main.yml",
      img: cicd,
      video: cicdvdo
    },
       {
      title: "Hearzap — Complete Hearing Care Platform",
      desc: ["Hearzap is India’s first comprehensive digital platform for end-to-end hearing care, offering users the ability to take rapid hearing tests, consult with certified audiologists, and find personalized hearing aids. Combining online and offline services through a network of 150+ experience stores, Hearzap makes hearing health accessible and convenient, providing in-store and virtual consultations, a curated marketplace for hearing aids, and tools to increase awareness about hearing care. The platform leverages technology to deliver personalized solutions, reduce the stigma around hearing loss, and ensure users receive professional support tailored to their needs.",
        "Through this project, I transitioned from a service-based role to working directly with the client’s product-based company, contributing to the product launch and delivering APIs for mobile developers. I implemented business logic for customer-facing websites, management dashboards, and administrative tools, ensuring seamless functionality across platforms. Additionally, I developed automated report generation using CronJobs, set up SMS alerts on scheduled times, and created dynamic reports such as audiogram reports from the customer’s perspective. My responsibilities also included end-to-end production support, timely bug fixes, and continuous feature updates to enhance the product’s performance and user experience."
      ],
tech: "Django + RestAPI + CronJobs",

      techStack: [
        {
          category: "Backend & APIs",
          items: ["Python", "Django", "REST APIs"]
        },
        {
          category: "Frontend & Web",
          items: ["HTML", "CSS", "Bootstrap", "JavaScript"]
        },
        {
          category: "Database",
          items: ["PostgreSQL"]
        },
        {
          category: "Automation & Scheduling",
          items: ["CronJobs", "SMS Alerts"]
        },
        {
          category: "DevOps & Deployment",
          items: ["Git", "GCP","AWS S3"]
        }
      ],

      link: "https://play.google.com/store/apps/details?id=com.cruisecity.app",
      img: hearzap
    },
      {
      title: "Cruise City – Explore on Shore",
      desc: ["Cruise City is a mobile application designed to help cruise passengers maximize their limited shore time by delivering personalized city guides and recommendations tailored to their interests, cruise itinerary, and available duration. The application provides curated suggestions for attractions, restaurants, and local events, along with interactive maps for easy navigation, traveler reviews and ratings, and the ability to explore and shop local products with convenient pick-up options at cruise terminals. In addition to enhancing traveler convenience, the platform promotes sustainable tourism by highlighting eco-friendly experiences and offering practical travel tips, improving the overall visitor experience in destinations such as Copenhagen.",
        "As part of this implementation, I was responsible for developing the core backend business logic for the administration dashboard and designing secure RESTful APIs to support seamless mobile application integration. The APIs were implemented with JWT-based authentication to ensure secure access and role-based operations. I developed a key offline-first feature, implementing a PostgreSQL-based local database that automatically synchronizes with the central server whenever network connectivity becomes available.This approach ensured reliable data availability, consistent CRUD operations, and efficient data synchronization, resulting in a resilient system that supports real-world mobile usage scenarios and improves both user experience and administrative efficiency."
      ],
      tech: "Django + RestAPI + PostgreSQL",
      techStack: [
      {
        category: "Backend & APIs",
        items: ["Python", "Django", "REST APIs", "JWT Authentication"]
      },
      {
        category: "Frontend & Dashboard",
        items: ["HTML", "CSS", "JavaScript"]
      },
      {
        category: "Database",
        items: ["PostgreSQL", "Offline Sync"]
      },
      {
        category: "Mobile Integration",
        items: ["API for iOS & Android Apps"]
      },
      {
        category: "DevOps & Deployment",
        items: ["Git", "GCP", "AWS S3"]
      }
    ],

      link: "https://play.google.com/store/apps/details?id=com.cruisecity.app",
      img: cmp
    }
  ].map((proj, i) => (
    <div key={i} className="project-card reveal">

      {/* Media Row */}
      <div className="media-row">
      {proj.link ? (
  // <a href={proj.link} target="_blank" rel="noopener noreferrer">
    <img src={proj.img} alt={proj.title} className="project-img" />
  // </a>
) : (
  <img src={proj.img} alt={proj.title} className="project-img" />
)}


        {/* Render video ONLY if it exists */}
{proj.video ? (
  <video
    className="project-video"
    src={proj.video}
    controls
    muted
    playsInline
  />
): (
  <div className="video-placeholder"></div>
)}


      </div>
 <div>
    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
  </div>
  <div className="project-content-grid">
     <div className="project-left">
      <h3>{proj.title} 
        <div className="tech-muted">{proj.tech}</div>
        </h3>
      {/* {proj.desc.map((para, index) => (
  <p key={index}>{para}</p>
))} */}
<br></br>
    <p><b>Overview</b><br></br>{proj.desc[0]}</p>
    <br></br>
    <p><b>Technical Implementation</b><br></br> {proj.desc[1]}</p>

</div>
<div className="project-right">
     <div className="tech-stack-section">
  {proj.techStack.map((group, index) => (
    <div key={index} className="tech-group">
      <h4 className="tech-heading">{group.category}</h4>

     <div className="tech-items">
  {group.items.join(" • ")}
</div>
    </div>
  ))}
</div>
</div>

      </div>
    </div>
  ))}
</div>


      </section>
{/* PROJECT LINKS */}
<section id="project-links" className="section light">
  <h2 className="reveal">Other Self-Driven Projects</h2>
  <div className="project-links-card reveal">
    {[
      { name: "Drowsiness-Detection(Python & OpenCV)", link: "https://github.com/AkshayaStephen125/Drowsiness-Detection" },
      { name: "WooEats(Python, Django & Android)", link: "https://myblog.com" },
      { name: "Todo(FastAPI & GraphQL Strawberry)", link: "https://todomgr.com" },
      { name: "E-Attendance(Java)", link: "https://github.com/AkshayaStephen125/E-Attendance" },
      { name: "Online Yearbook(Java)", link: "https://github.com/AkshayaStephen125/Online-yearbook" },
      // { name: "Chat App", link: "https://chatapp.com" },
    ].map((proj, i) => (
      <u><a
        key={i}
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        className="simple-project-link"
      >
        {proj.name}
      </a></u>
    ))}
  </div>
</section>



      {/* CONTACT */}
      <section id="contact" className="contact reveal">
        <h2>Contact</h2>
        <p>Email: akshayastephen125@gmail.com</p><br/>
              <div className="social-icons">
  <a
    href="https://github.com/AkshayaStephen125/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
&nbsp;&nbsp;&nbsp;&nbsp;
  <a
    href="https://www.linkedin.com/in/akshaya-stephen-0982b5171/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
</div>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} Akshaya Stephen
      </footer>
    </>
  );
}
