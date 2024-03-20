import { motion } from 'framer-motion'
import React from 'react'
import AutoChangeBG from '../animationAutomaticlyChangeImg/AutoChangeBG'
function Home() {
  return (
    <motion.div
      className=""
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <AutoChangeBG />
    </motion.div>
  );
}

export default Home
