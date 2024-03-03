import{j as e,a3 as l,H as p,F as x,r as m,G as h}from"./index-65174fac.js";import{u as b,a as j}from"./useApiUserInfo-30dd5133.js";import{L as N}from"./LabeledTextAreaInput.Ui.Component-148969da.js";function U({name:n,form:a,isSubmitting:t,handleFormSubmit:s}){const{control:i,handleSubmit:o}=a;return e.jsxs("form",{id:n,noValidate:!0,name:n,className:"flex flex-col gap-3",onSubmit:o(s),children:[e.jsx(l,{name:"first_name",label:"First Name",placeholder:"First Name",disabled:t,form:a,validationSchema:{required:"First Name field is required"}}),e.jsx(l,{name:"last_name",label:"Last Name",placeholder:"Last Name",disabled:t,form:a,validationSchema:{required:"Last Name field is required"}}),e.jsx(l,{name:"additional_name",label:"Additional Name",placeholder:"Additional Name",disabled:t,form:a}),e.jsx(N,{name:"headline",label:"Headline",placeholder:"Headline",disabled:t,form:a,validationSchema:{required:"Headline field is required"}}),e.jsx(p,{control:i})]})}function q({setIsUserInfoChanged:n}){const{data:a}=b(),{mutate:t,isLoading:s}=j(),i=x({defaultValues:{first_name:a.first_name,last_name:a.last_name,additional_name:a.additional_name,headline:a.headline}}),{watch:o,formState:{isDirty:d}}=i,c=o(),u=r=>{console.log(r);const f={...r,_method:"PATCH"};d&&t(f)};return m.useEffect(()=>{n(d)},[c]),e.jsx(m.Fragment,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("span",{className:"block mb-5 text-sm font-medium text-content-black",children:"* indicates required"}),e.jsx(U,{name:"userInfoForm",form:i,handleFormSubmit:u,isSubmitting:s}),e.jsx("div",{className:"flex flex-row-reverse mt-5",children:e.jsx(h,{form:"userInfoForm",isSubmitting:s})})]})})}export{q as default};