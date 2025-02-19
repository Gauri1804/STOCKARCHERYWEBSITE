import { FcApproval } from "react-icons/fc";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuNotebookText } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { FaPersonChalkboard } from "react-icons/fa6";
import styles from "../Franchise/Franchise.module.css";
export const CentreFranchiseData = [



    {
        icon: <FcApproval className={styles.icons} color="#007aff" />,
        title: "Apply Online",
        text: "Complete our simple 'Apply Now' form to submit your application. Share your basic details and express your interest in collaborating with us to bring stock market education to your city.",
    },
    {
        icon: <FaHandshakeSimple className={styles.icons} color="#007aff" />,
        title: "Introductory Call",
        text: "Reach out to our franchise development team to share your background, explore your region's potential, and gain insights into our business model.",
    },
    {
        icon: <LuNotebookText className={styles.icons} color="#007aff" />,
        title: "Business Plan Review & Evaluation",
        text: "Explore the financial aspects, operational requirements, and market potential with us. We'll help you develop a sustainable plan for success.",
    },
    {
        icon: <GrGroup className={styles.icons} color="#007aff" />,
        title: "Orientation Day",
        text: "Connect with our leadership, discover our hybrid learning model, and see firsthand how our innovative courses are transforming lives. This step will help you align with our mission.",
    },
    {
        icon: <FaPersonChalkboard className={styles.icons} color="#007aff" />,
        title: "Final Approval & Partnership Launch",
        text: "Finalize the documentation, ensure compliance, and gain access to all the resources needed to launch your Stock Market Learning Center in your region.",
    },
];