import{r,u as t,j as e,E as i,U as l}from"./index-9e1473eb.js";import{L as c}from"./LinkActionPrimary.Ui.Component-1c4eb501.js";function p(){const[n,s]=r.useState(null),a=t();return r.useEffect(()=>{const o=new URLSearchParams(a.search).get("error");return o&&s(o),()=>{s(null)}},[a.search]),e.jsxs(r.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center p-5 border-b border-border-100",children:[e.jsxs("svg",{width:"150px",height:"150px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),e.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("g",{id:"SVGRepo_iconCarrier",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.91 3.23 3.23 7.913v-.01a.81.81 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.81.81 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.81.81 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23ZM12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z",fill:"#c34646"})})]}),e.jsx("span",{className:"text-lg font-secondary",children:"Error "}),e.jsx("p",{children:n})]}),e.jsx("div",{className:"flex items-center justify-end p-5",children:e.jsx(c,{to:i(l.userAddSkillModal.name),children:"Go Back"})})]})}export{p as default};
