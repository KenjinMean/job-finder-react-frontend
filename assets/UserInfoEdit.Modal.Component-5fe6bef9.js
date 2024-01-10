import{j as t,B as h,o as j,v as U,r as o,M as v,Q as g}from"./index-84fc5be8.js";function d({label:e,value:r,...n}){const a=r||"";return t.jsxs("div",{className:"flex flex-col mt-5",children:[e&&t.jsx("label",{htmlFor:n.name||n.id,children:e}),t.jsx("input",{className:"p-1 mt-1 border rounded-sm border-slate-300 outline-offset-1",value:a,...n})]})}function b({payload:e,handleInputChange:r,handleSubmit:n}){return t.jsxs("form",{onSubmit:n,children:[t.jsx(d,{required:!0,label:"First name*",type:"text",name:"first_name",value:e==null?void 0:e.first_name,onChange:r}),t.jsx(d,{required:!0,label:"Last name*",type:"text",name:"last_name",value:e==null?void 0:e.last_name,onChange:r}),t.jsx(d,{label:"Additional name",type:"text",name:"additional_name",value:e==null?void 0:e.additional_name,onChange:r}),t.jsxs("div",{className:"flex flex-col mt-5",children:[t.jsx("label",{htmlFor:"headline",children:"Headline"}),t.jsx("textarea",{name:"headline",id:"headline",cols:"30",rows:"5",value:e==null?void 0:e.headline,onChange:r,className:"border rounded-sm resize-none outline-offset-1"})]}),t.jsx("div",{className:"flex flex-row-reverse mt-5",children:t.jsx(h,{type:"submit",children:"Save"})})]})}function E(){const{data:e}=j(),r=U(),[n,a]=o.useState(null),[l,C]=o.useState(new FormData),[u,m]=o.useState(!1),c=s=>{m(!0),a({...n,[s.target.name]:s.target.value})},f=s=>{s.preventDefault(),l.append("_method","PATCH");for(const i in n)l.append(i,n[i]);g.promise(r(l),{pending:"Updating User info",success:"User info updated sucessfully",error:"Error Updating User info"})},x=s=>{const i=s.target.value;setSelectedGender(i),a({...n,gender:i}),m(!0)};return o.useEffect(()=>{const s={};Object.assign(s,e),a(s)},[e]),t.jsx(v,{modalTitle:"Edit User Info",isInputChanged:u,children:t.jsxs("div",{className:"p-5 overflow-y-auto",children:[t.jsx("span",{className:"text-sm",children:" * indicates required"}),t.jsx(b,{payload:n,handleSubmit:f,handleInputChange:c,handleGenderChange:x})]})})}export{E as default};
