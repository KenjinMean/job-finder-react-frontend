import { cva } from "class-variance-authority";

export const ModalVariants = cva(
  "fixed top-16 left-0 right-0 z-50 flex items-center justify-center mx-auto w-full sm:rounded-md overflow-hidden",
  {
    variants: {
      size: {
        default: "max-w-3xl",
        small: "max-w-lg",
        large: "max-w-6xl",
      },
      position: {
        center: "top-[50%] transform translate-y-[-50%]",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);
