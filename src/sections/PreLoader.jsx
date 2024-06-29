import React from "react";
import { motion } from "framer-motion";
import { firstColor, bodyColor } from "../Style";
const PreLoader = () => {
  return (
    <motion.div
      className="d-flex align-items-center justify-content-center fs-1"
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: bodyColor,
        color: "white",
        overflow: "hidden",
      }}
    >
      <motion.span
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ x: -100, opacity: 0 }}
        className="fw-bold"
        style={{ color: firstColor, marginRight: "5px" }}
      >
        {"<"}
      </motion.span>{" "}
      <motion.span>
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ y: -100, opacity: 0 }}
          style={{ display: "inline-block" }}
        >
          Salman
        </motion.span>{" "}
        <motion.span
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ y: -150, opacity: 0 }}
          style={{
            color: firstColor,
            marginLeft: "5px",
            display: "inline-block",
          }}
        >
          Asaad
        </motion.span>
      </motion.span>
      <motion.span
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ x: 100, opacity: 0 }}
        style={{ marginLeft: "5px" }}
        className="fw-bold"
      >
        {" />"}
      </motion.span>
    </motion.div>
  );
};

export default PreLoader;
