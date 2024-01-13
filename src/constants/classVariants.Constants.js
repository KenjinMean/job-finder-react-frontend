import { cva } from "class-variance-authority";

export const ModalVariants = cva(
  "w-full shadow-lg overflow-y-auto modal-backdrop bg-white sm:rounded-md h-screen sm:h-auto",
  {
    variants: {
      size: {
        default: "sm:max-w-3xl",
        small: "sm:max-w-lg",
        large: "sm:max-w-6xl",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

export const DialogVariants = cva(
  "fixed inset-0 z-40 flex items-center justify-center mx-auto w-full sm:rounded-md overflow-hidden",
  {
    variants: {
      size: {
        default: "max-w-md",
        small: "max-w-sm,",
        large: "max-w-lg",
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
