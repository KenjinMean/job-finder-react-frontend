import{r as e,u as t,j as r,z as c,U as l}from"./index-65174fac.js";import{L as i}from"./LinkActionPrimary.Ui.Component-c5ac9b8b.js";const d="/job-finder-react-frontend/assets/error-42e182b2.png";function f(){const[n,s]=e.useState(null),a=t();return e.useEffect(()=>{const o=new URLSearchParams(a.search).get("error");return o&&s(o),()=>{s(null)}},[a.search]),r.jsxs(e.Fragment,{children:[r.jsxs("div",{className:"flex flex-col items-center p-5 border-b border-border-100",children:[r.jsx("img",{className:"block w-20 h-20 mb-5",src:d,alt:"red x error"}),r.jsx("span",{className:"text-lg font-secondary",children:"Error "}),r.jsx("p",{children:n})]}),r.jsx("div",{className:"flex items-center justify-end p-5",children:r.jsx(i,{to:c(l.userAddSkillModal.name),children:"Go Back"})})]})}export{f as default};