import{k as x,l as d,m as f,j as s,L as t,r as a,I as h,a as j,P as u,O as p}from"./index-d6649195.js";import{u as v}from"./UserInformationStore-f8bbb768.js";const g=e=>d.delete("/remove-skills",e),k=e=>x(g,{onSuccess:async({data:l})=>{e(l)}}),N=()=>d.get("/user-infos/show"),U=(e,l)=>f({queryKey:["userinfo",e],queryFn:async()=>{const i=await N();return i.status===200&&l(i.data),i},suspense:!0});function b({userData:e,handleEdit:l}){return s.jsxs("div",{className:"relative p-5",children:[s.jsxs("div",{className:"flex gap-1 mt-10 text-xl font-bold",children:[s.jsx("p",{children:e==null?void 0:e.firstName}),s.jsx("p",{children:e==null?void 0:e.lastName})]}),s.jsx("p",{children:e==null?void 0:e.headline}),s.jsx("span",{children:e==null?void 0:e.location}),s.jsx("p",{children:e==null?void 0:e.about}),s.jsx(t,{className:"absolute right-5 top-5",to:"/profile/setup",children:"edit"})]})}function w({userData:e}){const[l,i]=a.useState(!1);return k(),s.jsxs("section",{className:"relative w-full p-5 mt-5 overflow-hidden rounded-lg bg-slate-200",children:[s.jsx("h2",{className:"text-2xl font-semibold",children:"Skills"}),s.jsx("ul",{className:"flex flex-col",children:e.user_skills.map(n=>s.jsxs("li",{className:"flex justify-between",children:[s.jsx("span",{className:"rounded-md",children:n.name}),l&&s.jsx("button",{onClick:()=>console.log("will remove skill",n.name),children:"remove"})]},n.id))}),s.jsxs("div",{className:"absolute flex gap-5 right-5 top-5",children:[s.jsx(t,{to:"edit-skills",children:"edit"}),s.jsx(t,{to:"add-skill",preventScrollReset:!0,children:"Add"})]})]})}function c({imagePathUrl:e,className:l,to:i="",alt:n=""}){return s.jsx(t,{to:i,className:l,children:s.jsx(h,{imageUrl:e,alt:n})})}function C(){var o,r;const{user:e,setUser:l}=v(),{authenticatedUser:i}=j();U(i.id,l);const n=()=>{setEditActive(m=>!m)};return s.jsxs(a.Fragment,{children:[s.jsx(u,{title:"Profile"}),s.jsxs("div",{children:[s.jsxs("section",{className:"relative w-full overflow-hidden rounded-lg bg-slate-200",children:[s.jsx(c,{imagePathUrl:(o=e==null?void 0:e.user_info)==null?void 0:o.cover_image,to:"/edit-cover",className:"block w-full h-48"}),s.jsx(c,{imagePathUrl:(r=e==null?void 0:e.user_info)==null?void 0:r.profile_image,to:"/edit-profile",className:"absolute w-40 h-40 overflow-hidden border-4 rounded-full top-20 left-5 border-slate-200"}),s.jsxs("div",{className:"",children:[s.jsx(b,{userData:e.user_info,handleEdit:n}),s.jsx("div",{})]})]}),s.jsx(w,{userData:e}),s.jsx(p,{})]})]})}export{C as default};
