import{j as e,r as a,z as c,U as m,A as h,C as p}from"./index-aa5f6cbb.js";import{L as b}from"./LinkAdd.Ui.Component-d2650a29.js";import{f as d}from"./formatDateToMonthYear-3e034521.js";import{L as j}from"./LinkEdit.Ui.Component-7424141e.js";function u({skills:s}){return e.jsxs(a.Fragment,{children:[s.slice(0,2).map((l,t)=>e.jsxs(a.Fragment,{children:[e.jsx("span",{className:"text-sm text-indigo-500",children:l.name}),t!==1&&s.length>1&&e.jsx("span",{className:"text-foreground-100",children:" • "})]},t)),s.length>2&&e.jsx("span",{children:e.jsxs("span",{className:"text-indigo-500 ",children:[" ","+",s.length-2," more..."," "]})})]})}function g({experience:s,index:l}){const[t,n]=a.useState(!1);return e.jsxs("div",{className:"relative text-content-gray",children:[e.jsx(j,{to:c(m.userEditExperienceModal.name,{experience_id:s.id}),className:"absolute top-0 right-0"}),e.jsx("h2",{className:"text-lg font-bold text-content-black",children:s.job_title}),e.jsxs("div",{className:"pl-5",children:[e.jsxs("span",{className:"block text-content-black",children:[s.company_name," • ",s.position," •"," ",s.job_type]}),e.jsx("span",{className:"block",children:s.location}),e.jsxs("span",{children:[d(s.start_date)," -"," ",d(s.end_date),s.is_current?"Present":""]}),e.jsx("div",{children:t&&e.jsx(h,{skills:s.skills,handleModalClose:()=>n(!1)})}),e.jsx("button",{onClick:()=>n(o=>!o),children:e.jsx(u,{skills:s.skills})})]})]})}function v(){const{data:s}=p(),[l,t]=a.useState(!1),n=l?s:s.slice(0,2),o=()=>{t(r=>!r)},x=s.length<=2;return e.jsxs("section",{className:"relative w-full overflow-hidden border sm:rounded-lg bg-background-gray_50 border-border-100 text-content-black",children:[e.jsx("h2",{className:"p-5 text-2xl font-semibold",children:"Experience"}),e.jsx("div",{className:"flex flex-col gap-3 p-5",children:n.map((r,i)=>e.jsxs(a.Fragment,{children:[e.jsx(g,{experience:r,index:i}),i!==n.length-1&&e.jsx("div",{className:"border-b border-border-100"})]},i))}),!x&&e.jsx("button",{className:"w-full py-4 text-xl font-bold border-t border-border-100 hover:bg-background-gray300_hoover",onClick:o,children:l?"See less":"See more"}),e.jsx(b,{className:"absolute top-5 right-5",to:c(m.userAddExperienceModal.name)})]})}export{v as default};
