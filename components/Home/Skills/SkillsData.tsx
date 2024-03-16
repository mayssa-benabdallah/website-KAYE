import { IconPalette, IconBraces, IconServer, IconTimeline } from '@tabler/icons-react';

const SkillsData = [
  {
    title: "01 DÉCOUVRE",
    icon: <IconPalette className='mr-3' />,
    description: "Les meilleures adresses et événements",
    technologies: ["Figma", "Photoshop", "Tailwind"],
    animation: "animate__rotateInDownLeft",
    imageSrc: "/images/about/interface1.png" // Ajoutez l'URL de votre image ici
  },
  {
    title: "Frontend Developer",
    icon: <IconBraces className='mr-3' />,
    description: "Specialized in developing responsive, interactive, ",
    technologies: ["React", "Next.js", "Vite", "Three.js"],
    animation: "animate__zoomIn",
    imageSrc: "/images/about/interface2.png" // Ajoutez l'URL de votre image ici
  },
  {
    title: "Backend Developer",
    icon: <IconServer className='mr-3' />,
    description: "Proficient in server-side development,",
    technologies: ["Python", "PHP", "Postgres", "ORM"],
    animation: "animate__zoomIn",
    imageSrc: "/images/about/interface3.png" // Ajoutez l'URL de votre image ici
  },
  // Ajoutez d'autres objets avec imageSrc au besoin
];

export default SkillsData;
