import{z as m,x as h,a as p,y as x,A as l,j as s,r as c,w as b,U as f}from"./index-b3b68563.js";import{f as i}from"./formatDateToMonthYear-ad529aa3.js";import{L as g}from"./LinkEdit.Ui.Component-78ebe81b.js";import{L as E}from"./LinkAdd.Ui.Component-aaead94e.js";function j(e,t,o=null){throw m(`Handling fetch error${o?` at ${o}`:""}:`,e.message),{code:e.response?e.response.status:null,message:t,location:o,error:e}}const N=async()=>await h.get("/user-educations/show"),v=()=>{const{authenticatedUser:e}=p();return x({queryKey:["fetchUserEducations",e.id],queryFn:async()=>{try{return await N()}catch(t){j(t,"Failed to fetch user educations","useApiUserEducationsFetch")}},select:t=>t==null?void 0:t.data,suspense:!0,cacheTime:l(30,"mins"),staleTime:l(10,"mins")})};function y({education:e}){return s.jsxs("div",{className:"relative",children:[s.jsx("h2",{className:"text-lg font-bold",children:e.institution_name}),s.jsxs("div",{className:"pl-5",children:[s.jsxs("span",{className:"block",children:[e.degree," ",e.major]}),s.jsxs("span",{className:"block text-content-slate_500",children:[i(e.start_date)," -"," ",i(e.end_date)]})]}),s.jsx(g,{className:"absolute top-0 right-0"})]})}function C(){const{data:e}=v(),[t,o]=c.useState(!1),r=t?e:e.slice(0,2),d=()=>{o(a=>!a)},u=e.length<=2;return s.jsxs("section",{className:"relative w-full overflow-hidden transition-all border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black",children:[s.jsx("h2",{className:"p-5 text-2xl font-semibold",children:"Education"}),s.jsx("div",{className:"flex flex-col gap-3 p-5",children:r.map((a,n)=>s.jsxs(c.Fragment,{children:[s.jsx(y,{education:a}),n!==r.length-1&&s.jsx("div",{className:"border-b border-border-100"})]},n))}),!u&&s.jsx("button",{className:"w-full py-4 text-xl font-bold border-t border-border-100 hover:bg-background-gray300_hoover",onClick:d,children:t?"See less":"See more"}),s.jsx(E,{className:"absolute top-5 right-5",to:b(f.userAboutEditModal.name)})]})}export{C as default};
