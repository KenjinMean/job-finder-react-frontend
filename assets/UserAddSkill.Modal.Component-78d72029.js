import{x as b,j as e,r as i,L as m,w as h}from"./index-81aa8ea7.js";import{b as x,c as p,u as S}from"./useApiSkill-6d05ccfc.js";import{L as k}from"./LinkEdit.Ui.Component-989f41b6.js";import"./LogAxiosError-5a5a5899.js";function f({searchFn:r,className:t,keyword:a,setKeyword:l,placeholder:o,name:s,id:n}){const c=b(()=>{r()},300),d=u=>{const g=u.currentTarget.value;l(g),(g.length===0||g.length>1)&&c()};return e.jsx(i.Fragment,{children:e.jsx("input",{autoFocus:!0,type:"text",id:n,name:s,autoComplete:"off",placeholder:o,value:a,onChange:u=>d(u),className:t})})}function j({skills:r,keyword:t,addSkillFn:a,isFetchingSuggestions:l,disableSuggestions:o=!0}){const s=n=>{a(n)};return e.jsx(i.Fragment,{children:l?e.jsx(m,{}):e.jsxs(i.Fragment,{children:[t.length>0&&r.length===0&&e.jsx("div",{children:"No results"}),e.jsx("ul",{className:"flex flex-wrap gap-2 text-sm font-secondary",children:r&&r.map(n=>e.jsx("li",{children:e.jsx("button",{className:"px-3 py-1 transition-all border rounded-full bg-background-gray100 border-border-100 hover:bg-accent-100 hover:text-content-black disabled:bg-background-gray_stable",onClick:()=>s(n.id),disabled:o,children:n.name})},n.id))})]})})}function C(){const[r,t]=i.useState(""),{data:a,isFetching:l,refetch:o}=x(r),{isLoading:s,mutate:n}=p(),{data:c}=S();return e.jsxs("div",{className:"p-5 ",children:[e.jsx("div",{className:"flex items-center justify-center mb-5 rounded-md sm:rounded-none sm:mb-10",children:s?e.jsx(m,{}):e.jsx(f,{name:"search",id:"search",placeholder:"Search Skill",keyword:r,setKeyword:t,searchFn:o,className:"bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "})}),e.jsx("h2",{className:"mb-2 text-lg font-secondary",children:"Skill Suggestions"}),e.jsx("div",{className:"p-5 border rounded-md border-border-100 bg-background-gray300",children:e.jsx(j,{skills:a,keyword:r,addSkillFn:n,isFetchingSuggestions:l,disableSuggestions:s})}),e.jsx("h2",{className:"mt-5 mb-2 text-lg sm:mt-10 font-secondary",children:"My Skills"}),e.jsxs("div",{className:"relative flex flex-col p-5 border rounded-md bg-background-gray200 text-md border-border-100",children:[e.jsx(k,{className:"absolute top-5 right-5",to:h.userEditSkillPage}),c.map(d=>e.jsx("span",{children:d.name},d.id))]})]})}export{C as default};
