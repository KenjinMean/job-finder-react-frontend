import{r as c,a as f,j as e,b as u,k as j,B as m,l as h,I as b,m as g,n as N,o as k}from"./index-88e80b56.js";import{u as v}from"./useSkillApi-2c61403d.js";import{g as L,T as w,f as S}from"./TagList.Ui.Component-5ba45a3f.js";function C(s,l){const[t,d]=c.useState([]),[i,r]=c.useState([]);return c.useEffect(()=>{const x=l.map(n=>n.name),a=s.filter(n=>x.includes(n.name)).map(n=>({name:n.name})),o=s.filter(n=>!x.includes(n.name)).map(n=>({name:n.name}));d(a),r(o)},[s,l]),{matchedSkills:t,unmatchedSkills:i,matchedSkillsLength:t.length,unmatchedSkillsLength:i.length}}function M({jobSkills:s}){const{token:l}=f(),{refetch:t}=v(!1),[d,i]=c.useState([]),{matchedSkills:r,unmatchedSkills:x}=C(d,s);return c.useEffect(()=>{l?t().then(a=>{i(a.data)}):i([])},[l]),e.jsxs("div",{id:"job-skill",className:"border rounded-md border-border-100",children:[e.jsx("h2",{className:"p-5 text-lg font-bold border-b border-border-100",children:"Job Skills"}),e.jsxs("div",{className:"p-5",children:[l&&e.jsx("p",{className:"mb-2",children:`${r.length?r.length:"No"} ${r.length===1?"skill":"skills"} matched`}),e.jsx("p",{className:"flex flex-wrap gap-1 text-sm",children:s.map(a=>{const o=d.some(p=>p.name===a.name),n=o?"bg-accent-blue600 text-content-black_inverted font-bold":"";return e.jsxs("span",{className:`px-2 rounded-full flex ${n}`,children:[o&&e.jsx("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-content-black_inverted",children:e.jsx("path",{d:"M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),a.name]},a.name)})})]}),l&&e.jsx("div",{className:"border-t border-border-100",children:e.jsx(u,{className:"block w-full py-3 text-xl text-center text-accent-blue500 hover:text-content-black",children:"Manage Skills"})})]})}function _({jobDetails:s}){return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-md",children:"Job Description:"}),e.jsx("p",{className:"pl-5",children:s.description})]}),e.jsxs("div",{className:"",children:[e.jsx("span",{className:"font-bold text-md",children:"Responsibilities:"}),e.jsx("p",{className:"pl-5 whitespace-pre-line",children:s.responsibilities})]}),e.jsxs("div",{className:"",children:[e.jsx("span",{className:"font-bold text-md",children:"Qualifications:"}),e.jsx("p",{className:"pl-5 whitespace-pre-line",children:s.qualifications})]})]})}function U({onClick:s,...l}){return e.jsxs("button",{onClick:s,className:"p-1 border rounded-full hover:bg-background-gray100 border-border-100 w-fit",...l,children:[e.jsx("span",{className:"sr-only",children:"Back"}),e.jsx("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"text-content-black",children:e.jsx("path",{d:"M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z",fill:"currentColor"})})]})}function B({jobDetails:s}){const l=j();return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-content-black",children:s.title}),e.jsxs("p",{className:"text-content-black",children:[e.jsx("span",{className:"whitespace-nowrap",children:s.company.name})," • ",e.jsx("span",{className:"text-accent-blue500",children:s.location})," • ",e.jsx("span",{className:"whitespace-nowrap text-accent-blue500",children:L(s.created_at)})]}),e.jsxs("p",{className:"text-sm font-semibold",children:[e.jsx(w,{tags:s.job_types})," •"," ",s.experience_level," level"]}),e.jsxs("p",{className:"",children:[e.jsx("span",{className:"",children:"Salary: "}),e.jsxs("span",{className:"text-content-gray",children:["P",S(s.salary)]})]}),e.jsxs("p",{children:[e.jsx("span",{className:"",children:"Company Size:"})," ",s.company.company_size," employees • ",s.category]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(m,{onClick:()=>l(h.notImplementedDialog.name),children:"Apply"})," ",e.jsx(m,{onClick:()=>l(h.notImplementedDialog.name),children:"Save"})]})]})}function A({company:s}){return e.jsxs("div",{className:"flex flex-col gap-5 p-5 border rounded-md border-border-100",children:[e.jsx("h2",{className:"text-xl font-bold ",children:"Company Details"}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("div",{className:"w-20 h-20 mb-2 overflow-hidden rounded-md",children:e.jsx(b,{imageUrl:s==null?void 0:s.company_logo})}),e.jsxs("p",{className:"flex flex-col text-sm text-content-black",children:[e.jsx("span",{className:"text-lg",children:s==null?void 0:s.name}),e.jsx("span",{className:"text-content-slate_500",children:s==null?void 0:s.location}),e.jsxs("span",{className:"text-content-slate_500",children:[s==null?void 0:s.company_size," - employee's"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"company-description",className:"font-bold",children:"About"}),e.jsx("p",{className:"line-clamp-2",id:"company-description",children:s==null?void 0:s.description})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"company-website",children:"Visit Website: "}),e.jsx("a",{href:s==null?void 0:s.website,className:" text-accent-blue500",id:"company-website",target:"_blank",rel:"noopener noreferrer",children:s==null?void 0:s.website})]})]})]})}function I(){const s=g(),{jobSlug:l}=N(),{data:t}=k(l);return e.jsxs("div",{className:"relative grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 text-content-gray",children:[e.jsxs("div",{className:"flex flex-col max-w-md gap-5 md:max-w-none",children:[e.jsx(U,{onClick:()=>s(-1)}),e.jsx(B,{jobDetails:t}),e.jsx(_,{jobDetails:t})]}),e.jsxs("div",{className:"sticky flex flex-col gap-5 rounded-md md:mt-16 top-5 h-fit",children:[e.jsxs("div",{className:"rounded-md md:p-5 md:border border-border-100",children:[e.jsx("span",{className:"text-lg font-bold",children:"Benefits:"}),e.jsx("p",{className:"pl-5 whitespace-pre-line",children:t.benefits})]}),e.jsx(M,{jobSkills:t.skills}),(t==null?void 0:t.company)&&e.jsx(A,{company:t.company})]})]})}export{I as default};
