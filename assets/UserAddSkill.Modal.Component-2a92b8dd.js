import{C as m,i as p,D as g,E as x,a as k,F as c,G as h,t as u,H as y,j as r,r as a,M as f}from"./index-4b4a307e.js";import{L as S}from"./LoadingSpinnder.Util-edbcc722.js";const j=e=>c.get(`/search-skills?keyword=${e}`),b=e=>c.post(`/add-skill?skill_id=${e}`),v=()=>c.get("/get-user-skills"),w=(e,t)=>m({queryKey:["searchskill"],queryFn:async()=>await j(e),select:s=>{var n;return(n=s==null?void 0:s.data)==null?void 0:n.skills}}),C=()=>{const e=p(),t=g();return x(b,{onSuccess:async()=>{t.invalidateQueries("searchskill"),e(u.userAddSkillSuccessPage)},onError:s=>{const n=s.response.data.error||"An error occurred";e(`${u.userAddSkillErrorPage}?error=${encodeURIComponent(n)}`)}})},_=()=>{const{authenticatedUser:e}=k(),t=g();return async s=>{try{(await c.delete(`/remove-skill?skill_id=${s}`)).status===200&&t.refetchQueries(["fetchUserSkills",e.id])}catch(n){throw console.error("Error removing skill:",n),n}}},q=e=>{const{authenticatedUser:t}=k();return m({queryKey:["fetchUserSkills",t.id],queryFn:async()=>await v(),select:s=>{var n;return(n=s==null?void 0:s.data)==null?void 0:n.skills},suspense:!0,cacheTime:h(30,"mins"),staleTime:h(10,"mins")})};function U({searchFn:e,className:t,keyword:s,setKeyword:n}){const o=y(()=>{e()},300),l=i=>{const d=i.currentTarget.value;n(d),(d.length===0||d.length>1)&&o()};return r.jsx(a.Fragment,{children:r.jsx("input",{autoFocus:!0,type:"text",placeholder:"Skill",value:s,onChange:i=>l(i),className:t})})}function F({skills:e,keyword:t,addSkillFn:s,isFetchingSuggestions:n}){const o=l=>{s(l)};return r.jsx(a.Fragment,{children:n?r.jsx(S,{}):r.jsxs(a.Fragment,{children:[t.length>0&&e.length===0&&r.jsx("div",{children:"No results"}),r.jsx("ul",{className:"flex flex-wrap gap-2 text-sm font-secondary",children:e&&e.map(l=>r.jsx("li",{children:r.jsx("button",{className:"px-3 py-1 transition-all border border-gray-500 rounded-full hover:bg-indigo-500 hover:text-white",onClick:()=>o(l.id),children:l.name})},l.id))})]})})}function N(){const[e,t]=a.useState(""),{data:s,isFetching:n,refetch:o}=w(e),{isLoading:l,mutate:i}=C();return r.jsx(f,{navigateToUrlOnClose:u.userProfilePage,modalTitle:"Add Skill",children:r.jsxs("div",{className:"p-5",children:[r.jsx("div",{className:"relative w-full mx-auto mb-5 rounded-sm sm:mb-10",children:r.jsx("div",{className:"flex items-center bg-white rounded-md sm:rounded-none",children:r.jsx("div",{className:"flex-grow",children:l?r.jsx(S,{}):r.jsx(U,{keyword:e,setKeyword:t,searchFn:o,className:"w-full p-3 text-center border rounded-md font-secondary sm:text-left"})})})}),r.jsx("p",{className:"mb-5 text-lg font-secondary",children:"Skill Suggestions"}),r.jsx("div",{className:"p-5 border rounded-md bg-background-100",children:r.jsx(F,{skills:s,keyword:e,addSkillFn:i,isFetchingSuggestions:n})})]})})}const E=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{N as U,_ as a,E as b,q as u};
