import { motion } from "framer-motion";
import React from "react";

function FramMotion() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };
  const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <div className=" flex flex-col gap-10 overflow-x-hidden">
      <motion.selection
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className=" grid grid-cols-3 gap-10  p-10"
      >
        <motion.div
          variants={gridSquareVariants}
          className=" bg-gray-500 aspect-square rounded justify-center items-center flex gap-10"
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className=" bg-blue-500 aspect-square rounded justify-center items-center flex gap-10"
        ></motion.div>{" "}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-blue-500 aspect-square rounded justify-center items-center flex gap-10"
        ></motion.div>{" "}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-blue-500 aspect-square rounded justify-center items-center flex gap-10"
        ></motion.div>{" "}
        <motion.div
          variants={gridSquareVariants}
          className=" bg-blue-500 aspect-square rounded justify-center items-center flex gap-10"
        ></motion.div>{" "}
      </motion.selection>
    </div>
  );
}

export default FramMotion;
