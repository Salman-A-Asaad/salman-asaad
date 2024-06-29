import { MdWeb } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import img1 from "../img/multimart.jpeg";
import img2 from "../img/blog.jpeg";
import img3 from "../img/mtshow.jpeg";
import img4 from "../img/snapgram.jpeg";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CgDebug } from "react-icons/cg";
import { MdSyncProblem } from "react-icons/md";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiAppwrite } from "react-icons/si";
const skills = [
  [
    ["HTML", <FaHtml5 />],
    ["CSS", <FaCss3Alt />],
    ["JavaScript", <DiJavascript />],
    ["TypeScript", <SiTypescript />],
  ],
  [
    ["Bootstrap", <FaBootstrap />],
    ["TailwindCSS", <BiLogoTailwindCss />],
    ["React.js", <FaReact />],
    ["Redux", <TbBrandRedux />],
  ],
  [
    ["Responsive Web", <FaMobileScreenButton />],
    ["Debugging", <CgDebug />],
    ["Problem Solving", <MdSyncProblem />],
    ["SQL", <AiOutlineConsoleSql />],
  ],
  [
    ["Firebase", <IoLogoFirebase />],
    ["Supabase", <RiSupabaseFill />],
    ["Appwrite", <SiAppwrite />],
    ["Git", <FaGitSquare />],
  ],
];
const services = [
  {
    icon: <MdWeb />,
    title: "web developer",
    sub: "Custom web page development involves the creation of unique and tailored web pages using the latest technologies and libraries prevalent in the field. ",
  },
  {
    icon: <FaCloud />,
    title: "cloud backend",
    sub: "Development of a custom cloud backend involves leveraging contemporary technologies and libraries prevalent in the industry.  ",
  },
  {
    icon: <GiTeacher />,
    title: "web training",
    sub: "Encompass the development of custom web pages utilizing cutting-edge technologies and libraries prevalent in today's labor market.",
  },
];
const projects = [
  {
    title: "Snapgram",
    demo: "https://snapgram-topaz-rho.vercel.app/",
    git: "https://github.com/Salman-A-Asaad/Snapgram",
    img: img4,
  },
  {
    title: "Mutimart",
    demo: "https://malt1mart.web.app/",
    git: "https://github.com/Salman-A-Asaad/Maltimart",
    img: img1,
  },
  {
    title: "Blog",
    demo: "https://salman-asaad-blog.vercel.app/",
    git: "https://github.com/Salman-A-Asaad/Salman_Blog",
    img: img2,
  },
  {
    title: "MTshow",
    demo: "https://salman-a-asaad.github.io/MTshow/",
    git: "https://github.com/Salman-A-Asaad/MTshow",
    img: img3,
  },
];
const links = [
  { pageName: "home", link: "home" },
  { pageName: "about", link: "about" },
  { pageName: "services", link: "services" },
  { pageName: "projects", link: "projects" },
  { pageName: "contact", link: "contact" },
];
export { skills, services, projects, links };
