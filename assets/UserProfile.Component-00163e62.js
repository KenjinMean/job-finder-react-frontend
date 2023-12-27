import{j as e,L as i,p as o,I as m,o as x,q as n,s as c,r as h,O as u}from"./index-59cb0d5d.js";import{u as p}from"./useSkillRequestHandler-b4ee8f93.js";function r({to:s,className:l,...t}){const{...a}=t;return e.jsx(i,{className:`p-2 transition-all rounded-full hover:bg-slate-300 ${l}`,to:s,...a,children:e.jsx("img",{className:"block w-5 h-5",src:o.path,alt:`Edit Icon. Attribution: ${o.attribution}`})})}function d({imagePathUrl:s,className:l,to:t="",alt:a=""}){return e.jsx(i,{to:t,className:l,children:e.jsx(m,{imageUrl:s,alt:a})})}function j(){const{data:s}=x();return e.jsxs("section",{className:"relative w-full overflow-hidden sm:rounded-lg bg-slate-200",children:[e.jsx(d,{imagePathUrl:s==null?void 0:s.cover_image,to:n.userCoverImageViewPage,className:"block w-full h-36 sm:h-48 "}),e.jsx(d,{imagePathUrl:s==null?void 0:s.profile_image,to:n.userProfileViewPage,className:"absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-slate-200"}),e.jsxs("div",{className:"relative p-5 border",children:[e.jsx("div",{className:"flex gap-1 mt-10 text-xl font-bold",children:e.jsx("p",{children:`${s==null?void 0:s.first_name} 
              ${s.additional_name?`(${s.additional_name})`:""}
              ${s==null?void 0:s.last_name}`})}),e.jsx("p",{className:"max-w-xl",children:s==null?void 0:s.headline}),e.jsx("span",{children:s==null?void 0:s.location}),e.jsx(r,{className:"absolute right-5 top-5",to:n.userEditUserInfoPage,preventScrollReset:!0})]})]})}function g({to:s,className:l,...t}){const{...a}=t;return e.jsx(i,{className:`p-2 transition-all rounded-full hover:bg-slate-300 ${l}`,to:s,...a,children:e.jsx("img",{className:"block w-5 h-5",src:c.path,alt:`Add Icon. Attribution: ${c.attribution}`})})}function f(){const{data:s}=p();return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Skills"}),e.jsx("ul",{className:"flex flex-col",children:s==null?void 0:s.map(l=>e.jsx("li",{className:"flex justify-between",children:e.jsx("span",{className:"rounded-md",children:l.name})},l.id))}),e.jsxs("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:[e.jsx(g,{to:n.userAddSkillPage,preventScrollReset:!0}),e.jsx(r,{to:n.userEditSkillPage})]})]})}function b(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Contact"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(r,{})})]})}function w(){return e.jsxs(h.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-2 sm:gap-5",children:[e.jsx(j,{}),e.jsx(b,{}),e.jsx(f,{})]}),e.jsx(u,{})]})}export{w as default};
