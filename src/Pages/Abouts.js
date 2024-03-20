import { motion } from 'framer-motion'
import React from 'react'
import FormRegister from '../Forms/FormRegister'


function Abouts() {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <FormRegister />
    </motion.div>
  );
}

export default Abouts
