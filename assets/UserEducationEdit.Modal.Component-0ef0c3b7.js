import{u as f,A as x,aI as U,h as g,j as t,av as h,aJ as j,as as A}from"./index-41237f89.js";import{u as C,b,c as y}from"./useApiUserEducation-60cfb732.js";import{U as D}from"./UserEducation.Form-2935ed38.js";function L(){const n=f(),e=x(n),{requestConfirmation:s}=U(),{data:u}=C(),a=u.find(o=>o.id==e.education_id),d=g({defaultValues:a}),{isLoading:c,mutate:r}=b(),{isLoading:i,mutate:m}=y(),l=o=>{const E={...o,_method:"PATCH"};r([a.id,E])},p=async()=>{await s("Are you sure you want to delete this Education?")&&m(a.id)};return t.jsxs(h,{modalTitle:"Edit Education",size:"small",children:[t.jsx(D,{name:"educationForm",form:d,isSubmitting:i,handleFormSubmit:l}),t.jsxs("div",{className:"flex justify-end gap-3 p-5",children:[t.jsx(j,{isSubmitting:i,text:"Delete",loadingText:"Deleting",onClick:p}),t.jsx(A,{isSubmitting:c,form:"educationForm"})]})]})}export{L as default};
