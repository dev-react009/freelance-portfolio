
import Rock from "../../assets/rock-paper.png";
import Crud from "../../assets/Crud.png";
import Instaclone from "../../assets/Instaclone.png"
import ChatApp from "../../assets/chat-app.png";
import Gallery from "../../assets/PhotoGallery.png";
import Todo from "../../assets/Todo.png";
export const SkillsData =[
    {
        label:"FrontEnd",
        data:[
            {
                skillName:"HTML",
                percentage:"80"
            },
            {
                skillName: "CSS",
                percentage: "80"
            },
            {
                skillName: "MATERIAL UI",
                percentage: "80"
            }, 
            {
                skillName: "JAVASCRIPT",
                percentage: "80"
            },
            {
                skillName: "REACT.JS",
                percentage: "80"
            },
            {
                skillName:"ANGULAR.JS",
                percentage:"65"
            },  
    ]
    },
    {
        label: "BackEnd",
        data: [
            {
                skillName: "NODE.JS",
                percentage: "70"
            },
            {
                skillName: "EXPRESS.JS",
                percentage: "70"
            }
        ]
    },
    {
        label: "DATABASE",
        data: [
            {
                skillName: "SQL",
                percentage: "60"
            },
            {
                skillName: "MONGODB",
                percentage: "70"
            }
        ]
    }
];


export const Projects = [
    {
        title: "Rock-Paper-Scissors Game",
        description: "Built a Rock-Paper-Scissors game using React, TypeScript, and Material UI for responsive design and styling. Focused on delivering a clean UI and an optimized user experience, deploying the application on Vercel.",
        link: "https://rock-papper.vercel.app/",
        image:Rock
    },
    {
        title: "Task Management Features with Angular",
        description: "Developed a sleek and responsive Todo app using Angular with modular architecture for efficient task management. Users can add, edit, delete, and mark tasks as complete.",
        // Integrated Angular Material for a clean UI and reactive forms for real-time updates, ensuring smooth transitions and an optimal experience across all devices.",
        image: Todo,
        link: "https://angular-todo-app-xi.vercel.app/",

    },
    {
        title: "Dynamic MERN Stack CRUD Application",
        description:"Developed a full-stack CRUD application using MongoDB, Express, React, Node.js, and React-Bootstrap for a professional and responsive design. To ensure smooth user workflows and robust functionality across devices",link: "https://crud-app-client-theta.vercel.app/",
        image: Crud,
    },
    {
        title: "Photo Sharing Platform with  React-Based UI",
        description: "Designed a modern photo sharing application using the MERN stack, featuring a sleek, intuitive interface.Users can effortlessly upload and organize photos, interact with others ",
        link: "https://instaclone-react-app.vercel.app/",
        image: Instaclone,
        
    },
    {
        title: "Real-Time Chat App with MERN",
        description: "Developed a feature-rich real-time chat application using the MERN stack, enhanced with TypeScript for type safety and Material UI for a sleek, modern interface.", 
        image:ChatApp,
        link:"https://chat-app-react-coral.vercel.app/",
    },
    {
        title: "Photo Gallery with React and Tailwind CSS",
        description: "Designed a modern photo gallery application using the MERN stack, featuring a sleek, intuitive interface.",
        link: "https://photo-gallery-react-tailwand.vercel.app/",
        image: Gallery,
    },
];
