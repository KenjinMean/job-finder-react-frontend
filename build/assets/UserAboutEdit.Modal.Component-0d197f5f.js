import{h as d,j as t,av as p,as as c,D as b}from"./index-41237f89.js";import{u as f,a as x}from"./useApiUserInfo-471e400e.js";import{L as h}from"./LabeledTextAreaInput.Ui.Component-c8d39dbd.js";function S(){const{data:e}=f(),{isLoading:s,mutate:a}=x(),o=d({defaultValues:{about:e.about}}),{control:n,handleSubmit:i,formState:{isDirty:r}}=o,u=m=>{const l={...m,_method:"PATCH"};a(l)};return t.jsxs(p,{modalTitle:"Edit User About",isInputChanged:r,children:[t.jsxs("form",{className:"p-5",onSubmit:i(u),children:[t.jsx(h,{form:o,name:"about",label:"About",placeholder:"About yourself"}),t.jsx("div",{className:"flex flex-row-reverse mt-5",children:t.jsx(c,{text:"Submit",loadingText:"Submitting",isSubmitting:s})})]}),t.jsx(b,{control:n})]})}export{S as default};
