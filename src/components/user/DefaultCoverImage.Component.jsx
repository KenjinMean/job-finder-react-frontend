import React from "react";

export default function DefaultCoverImageComponent() {
  const styles = {
    html: {
      "--s": "60px", // Adjust size as needed
      "--_g": "#0000 83%,#b09f79 85% 99%,#0000 101%",
      background: `
        radial-gradient(27% 29% at right ,var(--_g)) calc(var(--s)/ 2) var(--s),
        radial-gradient(27% 29% at left ,var(--_g)) calc(var(--s)/-2) var(--s),
        radial-gradient(29% 27% at top  ,var(--_g)) 0 calc(var(--s)/ 2),
        radial-gradient(29% 27% at bottom,var(--_g)) 0 calc(var(--s)/-2)
        #476074
      `,
      backgroundSize: "calc(2*var(--s)) calc(2*var(--s))",
      height: "100%",
      width: "100%",
    },
  };
  return <div style={styles.html} />;
}
