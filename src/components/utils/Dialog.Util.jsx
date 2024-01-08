import React, { Fragment } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

import { dropIn } from "../../constants/animationVariants.Constants";
import { DialogVariants } from "../../constants/classVariants.Constants";

export default function DialogUtil({
  size,
  children,
  position,
  className,
  ...props
}) {
  const mountElement = document.getElementById("dialog");

  return createPortal(
    <Fragment>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn(DialogVariants({ size, position, className }))}
        {...props}
      >
        {children}
      </motion.div>
      <div className="fixed inset-0 z-30 bg-black opacity-25"></div>
    </Fragment>,
    mountElement
  );
}
