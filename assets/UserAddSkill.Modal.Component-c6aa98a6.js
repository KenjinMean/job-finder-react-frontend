import{q as u,j as e,r as o,M as m,p as h}from"./index-f5de0b2b.js";import{a as g,b as x}from"./useSkillRequestHandler-347b2cce.js";import{L as c}from"./LoadingSpinnder.Util-8740a89d.js";function p({searchFn:n,className:t,keyword:l,setKeyword:r}){const a=u(()=>{n()},300),s=d=>{const i=d.currentTarget.value;r(i),(i.length===0||i.length>1)&&a()};return e.jsx(o.Fragment,{children:e.jsx("input",{autoFocus:!0,type:"text",placeholder:"Skill",value:l,onChange:d=>s(d),className:t})})}function S({skills:n,keyword:t,addSkillFn:l,isFetchingSuggestions:r}){const a=s=>{l(s)};return e.jsx(o.Fragment,{children:r?e.jsx(c,{}):e.jsxs(o.Fragment,{children:[t.length>0&&n.length===0&&e.jsx("div",{children:"No results"}),e.jsx("ul",{className:"flex flex-wrap gap-2 text-sm font-secondary",children:n&&n.map(s=>e.jsx("li",{children:e.jsx("button",{className:"px-3 py-1 transition-all border border-gray-500 rounded-full hover:bg-indigo-500 hover:text-white",onClick:()=>a(s.id),children:s.name})},s.id))})]})})}function k(){const[n,t]=o.useState(""),{data:l,isFetching:r,refetch:a}=g(n),{isLoading:s,mutate:d}=x();return e.jsx(m,{navigateToUrlOnClose:h.userProfilePage,modalTitle:"Add Skill",children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"relative w-full mx-auto mb-5 rounded-sm sm:mb-10",children:e.jsx("div",{className:"flex items-center bg-white rounded-md sm:rounded-none",children:e.jsx("div",{className:"flex-grow",children:s?e.jsx(c,{}):e.jsx(p,{keyword:n,setKeyword:t,searchFn:a,className:"w-full p-3 text-center border rounded-md font-secondary sm:text-left"})})})}),e.jsx("p",{className:"mb-5 text-lg font-secondary",children:"Skill Suggestions"}),e.jsx("div",{className:"p-5 border rounded-md bg-background-100",children:e.jsx(S,{skills:l,keyword:n,addSkillFn:d,isFetchingSuggestions:r})})]})})}export{k as default};