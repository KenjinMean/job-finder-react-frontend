import React from "react";

export default function CardContainerUitl({ children }) {
  return (
    <section className="relative w-full p-5 overflow-hidden border sm:rounded-lg text-content-black border-border-100 bg-background-gray_50">
      {children}
    </section>
  );
}
