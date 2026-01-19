// src/data/projectsData.js
export const projectsData = [
  {
    id: 1,
    title: "J.A.R.V.I.S (Virtual Assistant)",
    shortDesc: "Text and voice controlled AI assistant",
    problem:
      "Users need faster hands-free interaction with systems",
    solution:
      "Developed a voice assistant that handles commands, automation, and responses",
    tech: ["Python", "AI", "Speech Recognition","OpenAI API"],
    image: "/images/projects/jarvis.png",
  },
  {
    id: 2,
    title: "Malaysian Sign Language Recognition",
    shortDesc: "Real-time MSL hand-gesture recognition built for Malaysians.Turning sign gestures into instant readable text",
    problem:
      "There is no accessible, real-time MSL recognition tool available anywhere not in Malaysia",
    solution:
      "I combined computer vision, deep learning, and web streaming technology to create a full end-to-end assistive system.",
    tech: ["Deep Learning","Docker","OpenCV","Flask","Pytorch"],
    image: "/images/projects/msl.png",
    live: "https://huggingface.co/spaces/SamuelParker/Malaysian-Sign-Language-Recognition",
    github: "https://github.com/sam-codecode/Malaysian-Sign-Language-Recognition",
  },
  {
    id: 3,
    title: "WiFi Camera Smart Robot Car",
    shortDesc: "A robot car controlled from mobile app.This robot car has features like, avoid obstacles, follow lines and a live camera",
    problem:
      "There is no embedded system other than drone to spy, especially on land",
    solution:
      "Developed a robot car powered by arduino and developed an mobile app to control it",
    tech: ["C++","Android Studio","Arduino"],
    image: "/images/projects/robot.png",
  },
    {
    id: 4,
    title: "Girlie's Cafe E-Commerce System",
    shortDesc: "An e-commerce system developed for academic purpose",
    problem:
      "Develop an e-commerce system demonstrating java OOP and web development principle",
    solution:
      "A e-commerce system developed for a cafe",
    tech: ["Java","MySQL","Javascript","Apache Tomcat","CSS"],
    image: "/images/projects/cafe.png",
    github: "https://github.com/sam-codecode/Girlie_Cafe_Ecommerce",
  },
];
