import{l,q as r,j as e}from"./index-526e0b1e.js";import{u as a}from"./UserInformationStore-95ef711a.js";function d(){const n=l(),{user:o}=a(),{isLoading:m,mutate:i}=r(),t=s=>{i(s)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>n(-1),children:"Go back"}),e.jsx("ul",{className:"flex flex-col",children:o.user_skills.map(s=>e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{className:"rounded-md",children:s.name})," ",e.jsx("button",{onClick:()=>t(s.id),children:"remove"})]},s.id))})]})}export{d as default};
