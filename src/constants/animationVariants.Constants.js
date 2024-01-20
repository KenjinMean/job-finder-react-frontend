export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const slide = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
  },
};

export const grow = {
  hidden: {
    scale: 0,
    opacity: 0,
    originX: 1, // Set origin to the right
    originY: 0, // Set origin to the top
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
    originX: 0.5, // Reset origin to the center horizontally
    originY: 0.5, // Reset origin to the center vertically
  },
  exit: {
    scale: 0,
    opacity: 0,
    originX: 1, // Set exit origin to the right
    originY: 0, // Set exit origin to the top
  },
};
