import{j as a,aP as c}from"./index-41237f89.js";function e(){const t={html:{"--s":"60px","--_g":"#0000 83%,#b09f79 85% 99%,#0000 101%",background:`
        radial-gradient(27% 29% at right ,var(--_g)) calc(var(--s)/ 2) var(--s),
        radial-gradient(27% 29% at left ,var(--_g)) calc(var(--s)/-2) var(--s),
        radial-gradient(29% 27% at top  ,var(--_g)) 0 calc(var(--s)/ 2),
        radial-gradient(29% 27% at bottom,var(--_g)) 0 calc(var(--s)/-2)
        #476074
      `,backgroundSize:"calc(2*var(--s)) calc(2*var(--s))",height:"100%",width:"100%"}};return a.jsx("div",{style:t.html})}function l({imageUrl:t,alt:s=""}){const r=t?t.startsWith("http://")||t.startsWith("https://")?t:`https://api.job-finder.cloud/${t}`:"";return a.jsx(a.Fragment,{children:r?a.jsx(c,{src:r,alt:s,height:"100%",width:"100%",className:"block object-cover w-full h-full"}):a.jsx(e,{})})}export{l as U};
