import React, { useEffect } from "react";

const CustomConsoleMessage = () => {
  useEffect(() => {
    console.log("%cCreated by:", "color: blue; font-size: 16px;");
    console.log(
      `%c
██╗  ██╗ ███████╗ ███╗   ██╗      ██╗ ██╗ ███╗   ██╗
██║ ██╔╝ ██╔════╝ ████╗  ██║      ██║ ██║ ████╗  ██║
█████╔╝  █████╗   ██╔██╗ ██║      ██║ ██║ ██╔██╗ ██║
██╔═██╗  ██╔══╝   ██║╚██╗██║ ██   ██║ ██║ ██║╚██╗██║
██║  ██╗ ███████╗ ██║ ╚████║ ╚█████╔╝ ██║ ██║ ╚████║
╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═══╝  ╚════╝  ╚═╝ ╚═╝  ╚═══╝
`,
      "color: blue; font-size: 12px; font-weight: bold;"
    );
    console.log(
      "%cYou can check out my portfolio at %chttps://kenjinmean.github.io/nextjs-portfolio/",
      "color: blue; font-size: 16px;",
      "color: green; font-size: 16px;text-decoration: underline;"
    );
  }, []);

  return null;
};

export default CustomConsoleMessage;
