import{r as a,j as n,B as h,Q as b}from"./index-ce79feb0.js";import{u as x,a as g}from"./useProfileRequesthandler-d3cdae6d.js";import{L as l}from"./LabeledTextAreaInput.Ui.Component-fd3098a2.js";function U({handleSubmit:c,payload:t,handleInputChange:s}){const[r,o]=a.useState(t!=null&&t.about?t.about.length:0),u=2600,m=e=>{o(e.length)};return a.useEffect(()=>{o(t!=null&&t.about?t.about.length:0)},[t]),n.jsxs("form",{onSubmit:c,className:"p-5",children:[n.jsx(l,{name:"about",id:"about",label:"About",cols:"30",rows:"10",autoFocus:!0,maxLength:u,value:t==null?void 0:t.about,onChange:e=>{s(e),m(e.target.value)}}),n.jsxs("div",{className:"flex flex-row-reverse mt-2 text-content-gray",children:[r,"/",u," characters"]}),n.jsx("div",{className:"flex flex-row-reverse mt-5",children:n.jsx(h,{children:"Save"})})]})}function p({setIsInputChanged:c}){const{data:t}=x(),[s,r]=a.useState(),o=g(),u=e=>{c(!0),r({...s,[e.target.name]:e.target.value})},m=e=>{e.preventDefault();const i=new FormData;i.append("_method","PATCH");for(const f in s)i.append(f,s[f]);b.promise(o(i),{pending:"Updating User About",success:"User About updated sucessfully",error:"Error Updating About info"})};return a.useEffect(()=>{r({...t})},[t]),n.jsx(U,{handleSubmit:m,payload:s,handleInputChange:u})}export{p as default};
