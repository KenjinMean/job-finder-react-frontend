import{h as m,i as h,k as j,j as s,r as N}from"./index-b82a86c5.js";import{f as p}from"./formatSalary-a9c72987.js";function u(){const t=m(),{jobSlug:i}=h(),{data:n}=j(i),{title:r,salary:c,location:d,skills:a,description:o,requirements:x,company:e}=n??{};return s.jsx(N.Fragment,{children:s.jsxs("div",{className:"mx-auto",children:[s.jsx("button",{onClick:()=>t(-1),children:"Go back"}),s.jsxs("div",{className:"py-5 ",children:[s.jsx("h1",{className:"text-2xl font-bold",children:r}),s.jsxs("div",{className:"mt-3",children:[s.jsx("span",{className:"text-lg font-bold",children:"Salary:"}),s.jsxs("p",{children:["P",p(c)]})]}),s.jsxs("div",{className:"mt-3",children:[s.jsx("span",{className:"text-lg font-bold",children:"Location:"}),s.jsx("p",{children:d})]}),s.jsxs("div",{className:"gap-3 mt-3 ",children:[s.jsx("span",{className:"text-lg font-bold",children:"Skills:"}),s.jsx("div",{className:"flex flex-wrap gap-3 mt-3",children:a&&(a==null?void 0:a.map(l=>s.jsx("span",{className:"p-1 border rounded-lg bg-background-400",children:l.name},l.id),[]))})]}),s.jsxs("div",{className:"mt-3",children:[s.jsx("span",{className:"text-lg font-bold",children:"Description:"}),s.jsx("p",{children:o})]}),s.jsxs("div",{className:"mt-3",children:[s.jsx("span",{className:"text-lg font-bold",children:"Requirements:"}),s.jsx("p",{children:x})]})]}),e&&s.jsxs("div",{className:"",children:[s.jsx("h2",{className:"font-bold",children:"Company Details"}),s.jsx("p",{className:"font-semibold text-zinc-700",children:e==null?void 0:e.name}),s.jsx("p",{className:"mt-3",children:e==null?void 0:e.description}),s.jsx("p",{className:"mt-3",children:e==null?void 0:e.location}),s.jsx("p",{className:"mt-3",children:e==null?void 0:e.industry}),s.jsx("p",{className:"mt-3",children:e==null?void 0:e.website})]})]})})}export{u as default};
