import{m as i,j as e,w as r,v as t,U as c,Q as d}from"./index-88e80b56.js";import{u as m,a as u}from"./useSkillApi-2c61403d.js";import{L as x}from"./LinkAdd.Ui.Component-91a5979d.js";function j(){const n=i(),{data:l}=m(),o=u(),a=s=>{d.promise(o(s),{pending:"Removing Skill",success:"Skill Removed Successfully",error:"Error Removing Skill"})};return e.jsxs("div",{className:"p-5 text-content-black",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("button",{onClick:()=>n(r.userProfilePage),children:"Go back"})," ",e.jsx(x,{to:t(c.userAddSkillModal.name)})]}),e.jsx("ul",{className:"flex flex-col",children:l==null?void 0:l.map(s=>e.jsxs("li",{className:"flex justify-between",children:[e.jsx("span",{className:"rounded-md",children:s.name})," ",e.jsx("button",{onClick:()=>a(s.id),children:"remove"})]},s.id))})]})}export{j as default};
