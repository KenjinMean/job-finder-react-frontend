import{j as t,B as d,r as o,Q as x}from"./index-d0a86cdd.js";import{u as j,a as p}from"./useApiUserInfo-020fe8bd.js";import{L as m}from"./LabeledTextInput.Ui.Component-144caf41.js";import{L as U}from"./LabeledTextAreaInput.Ui.Component-59c22f34.js";function h({payload:e,handleInputChange:n,handleSubmit:s}){return t.jsxs("form",{onSubmit:s,children:[t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(m,{name:"first_name",id:"firstName",label:"First Name *",required:!0,value:(e==null?void 0:e.first_name)||"",onChange:n,autoComplete:"off"}),t.jsx(m,{name:"last_name",id:"lastName",label:"Last Name *",required:!0,value:(e==null?void 0:e.last_name)||"",onChange:n,autoComplete:"off"}),t.jsx(m,{name:"additional_name",id:"additionalName",label:"Additional Name",value:(e==null?void 0:e.additional_name)||"",onChange:n,autoComplete:"off"}),t.jsx(U,{name:"headline",id:"headline",label:"Headline",cols:"30",rows:"5",value:(e==null?void 0:e.headline)||"",onChange:n})]}),t.jsx("div",{className:"flex flex-row-reverse mt-5",children:t.jsx(d,{type:"submit",children:"Save"})})]})}function g({setIsUserInfoChanged:e}){const[n,s]=o.useState(null),{data:i}=j(),u=p(),l=r=>{e(!0),s({...n,[r.target.name]:r.target.value})},c=r=>{r.preventDefault();const a=new FormData;a.append("_method","PATCH");for(const f in n)a.append(f,n[f]);x.promise(u(a),{pending:"Updating User info",success:"User info updated sucessfully",error:"Error Updating User info"})};return o.useEffect(()=>{i&&s(i)},[i]),t.jsx(o.Fragment,{children:t.jsxs("div",{className:"p-5",children:[t.jsxs("span",{className:"block mb-5 text-sm font-medium text-content-black",children:[" ","* indicates required"]}),t.jsx(h,{payload:n,handleSubmit:c,handleInputChange:l})]})})}export{g as default};
