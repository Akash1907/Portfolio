/* eslint-disable */
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import { FaInternetExplorer,  FaChalkboardTeacher, FaCameraRetro, FaPinterest, FaVideo, FaTabletAlt, FaRegNewspaper } from "react-icons/fa";

 

export const servicesData = [
    {
        id: 1,
        title: 'Content Writing',
        icon: <BiPencil /> 
    },
    {
        id: 2,
        title: 'Internet Research',
        icon: <FaInternetExplorer />
    },
    {
        id: 3,
        title: 'Tutoring',
        icon: <FaChalkboardTeacher />
    },

    {
        id: 4,
        title: 'Web Design',
        icon: <BsCodeSlash />
    },
    {
        id: 5,
        title: 'Photography',
        icon: <FaCameraRetro />
    },
    {
        id: 6,
        title: 'Pinterest Virtual Assistant',
        icon: <FaPinterest />
    }, 
    {
        id: 7,
        title: 'Video Editing',
        icon: <FaVideo />
    },
    {
        id: 8,
        title: 'Data Entry', 
        icon: <BsClipboardData />
    },
    {
        id: 9,
        title: 'Ebook Writing',
        icon: <FaTabletAlt />
    },
    {
        id: 10,
        title: 'Audio Transcription',
        icon: <AiFillAudio />
    },
]