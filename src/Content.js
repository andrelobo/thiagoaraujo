// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/figma.png";
import illustrator from "./assets/images/Skills/figma.png";
import indesign from "./assets/images/Skills/figma.png";
import branding from "./assets/images/Skills/figma.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Senior Designer",
    firstName: "THIAGO",
    LastName: "ARAÚJO",
    btnText: "Work With Me",
    image: Hero_person,
    hero_content: [
      {
        count: "10+",
        text: "Years of experience in Graphic & UI/UX Design",
      },
      {
        count: "50+",
        text: "Projects completed in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY EXPERTISE",
    skills_content: [
      {
        name: "Figma",
        para: "Advanced UI/UX design for digital products.",
        logo: figma,
      },
      {
        name: "Adobe Photoshop",
        para: "High-end photo editing and graphic design.",
        logo: ps,
      },
      {
        name: "Adobe Illustrator",
        para: "Vector illustrations and branding design.",
        logo: illustrator,
      },
      {
        name: "Sketch",
        para: "Wireframing and UI design for mobile & web.",
        logo: sketch,
      },
      {
        name: "Adobe InDesign",
        para: "Professional layouts for magazines & books.",
        logo: indesign,
      },
      {
        name: "Branding & Identity",
        para: "Creating strong visual identities for brands.",
        logo: branding,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Brand Identity & Logo Design",
        para: "I create unique and impactful brand identities that leave a lasting impression.",
        logo: services_logo1,
      },
      {
        title: "UI/UX Design",
        para: "Designing intuitive and visually appealing digital experiences for web and mobile.",
        logo: services_logo2,
      },
      {
        title: "Print & Digital Media",
        para: "Creating stunning print materials, social media graphics, and digital marketing assets.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY WORK",
    image: person_project,
    project_content: [
      {
        title: "Corporate Branding",
        image: project1,
      },
      {
        title: "E-commerce UI/UX Design",
        image: project2,
      },
      {
        title: "Marketing & Social Media Campaigns",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "CLIENT REVIEWS",
    testimonials_content: [
      {
        review: "Thiago transformed our brand with a unique and memorable identity!",
        img: avatar1,
        name: "Sophia Carter",
      },
      {
        review: "His UI/UX designs are intuitive and visually stunning!",
        img: avatar2,
        name: "Michael Lee",
      },
      {
        review: "Highly professional, creative, and always meets deadlines!",
        img: avatar3,
        name: "Emily Johnson",
      },
      {
        review: "A true expert in graphic and branding design!",
        img: avatar4,
        name: "Daniel Smith",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR DESIGN NEEDS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a creative designer to elevate your brand or digital presence? Let's work together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "thiago.design@gmail.com",
        icon: GrMail,
        link: "mailto:thiago.design@gmail.com",
      },
      {
        text: "+55 99999-9999",
        icon: MdCall,
        link: "https://wa.me/559999999999",
      },
      {
        text: "thiago.design",
        icon: BsInstagram,
        link: "https://www.instagram.com/thiago.design/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
