// import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
// import images from "../NurseryImages"
import '../Styles/Slider.css'

const Slider = ({img}) => {

    // const [width, setWidth] = useState(0);
    // const carousel = useRef();

    // useEffect(() => {
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, [])


  return (
    <div className='slider'>
        <motion.div 
            className='carousel' 
            whileTap={{cursor:"grabbing"}}
        >
            <motion.div 
                drag='x' 
                dragConstraints={{right:0,left:0}} 
                className='inner-carousel'
            >
                {
                    img.map((image) => {
                        return(
                            <motion.div 
                                className='item'
                                animate={{
                                    scale: [1, 1.05, 1.05, 1, 1],
                                    rotate: [0, 0, 0, 0, 0],
                                    borderRadius: ["0%", "10%", "10%", "10%", "0%"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >
                                <img src={image} alt='slider-img'/>
                            </motion.div>
                        );
                    })
                }
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Slider