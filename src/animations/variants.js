export const KayCapDropIn = {
  initial: { opacity: 0, y: -100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const SlideRight = {
  initial: {
    opacity: 0,
    x: -100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};

export const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};
