import "./sidebar.scss"
import { Links } from "./links/Links"
import React, { useState } from 'react'
import { ToggleButton } from "./toggleButton/ToggleButton"
import {motion} from "framer-motion"

export const Sidebar = () => {
    const [open,setOpen] = useState(false)


    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px )",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };
  return (
    <motion.div className="sidebar" >
        <motion.div className="bg" variants= {variants} animate={open ? "open": "closed"}>
            <Links/>
        </motion.div>
            <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
