import{j as e,k as t,a2 as n,D as i}from"./index-9e1473eb.js";function x({name:d,form:a,isSubmitting:l,handleFormSubmit:o}){const{control:s,handleSubmit:r}=a;return e.jsxs("form",{id:d,noValidate:!0,name:d,className:"flex flex-col gap-3 p-5",onSubmit:r(o),children:[e.jsx(t,{form:a,name:"institution_name",label:"Institution Name",disabled:l,placeholder:"Ex: Harvard University",validationSchema:{required:"Institution Name field is required"}}),e.jsx(t,{form:a,name:"degree",label:"Degree",disabled:l,placeholder:"Ex: Bachelor of Science"}),e.jsx(t,{form:a,name:"major",label:"Major",disabled:l,placeholder:"Ex: Computer Science"}),e.jsx(n,{form:a,name:"start_date",label:"Start Date",disabled:l}),e.jsx(n,{form:a,name:"end_date",label:"End Date",disabled:l}),e.jsx(i,{control:s})]})}export{x as U};
