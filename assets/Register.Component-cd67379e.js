import{j as e,h as f,r as p,i as h,k as b,D as j,a as w,l as v,N,e as L,f as P,g as S}from"./index-62bd7fef.js";import{A as y,T as A}from"./AuthError.Component-65a868bd.js";import{L as k,A as C}from"./AuthSubmitButton.Ui.Component-8cc56da7.js";const F="/assets/showPass-b5df9896.png",E="/assets/hidePass-da346e1e.png";function _({form:o,name:s,label:d,disabled:t,placeholder:c,showPassword:r,setShowPassword:n,validationSchema:m,...i}){var x;const{register:l,formState:{errors:u}}=o;return e.jsxs("div",{className:"text-sm",children:[e.jsx("label",{htmlFor:s,className:"block mb-1 font-medium text-content-gray ",children:d}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:s,name:s,type:r?"text":"password",placeholder:c,disabled:t,className:`bg-input-gray border border-border-100 text-content-black rounded-lg focus:ring-accent-blue500 focus:border-accent-blue500 block w-full p-2.5 disabled:opacity-50 ${u[s]&&"border-red-500"}`,...l(s,{minLength:{value:8,message:"Password must be at least 8 characters long"},validate:{hasLowercase:a=>/^(?=.*[a-z])/.test(a)||"Password must contain at least one lowercase letter",hasUppercase:a=>/^(?=.*[A-Z])/.test(a)||"Password must contain at least one uppercase letter",hasNumeric:a=>/^(?=.*\d)/.test(a)||"Password must contain at least one number",hasSpecialChar:a=>/^(?=.*[@$!%*?&])/.test(a)||"Password must contain at least one special character"}}),...i}),e.jsx("button",{type:"button",tabIndex:"-1",className:"absolute p-1 transition-colors rounded-full top-[50%] -translate-y-[50%] right-3 hover:bg-background-slate300",onClick:()=>n(a=>!a),children:e.jsx("img",{className:"w-5 h-5",src:r?E:F,alt:r?"hide password image":"show password image"})})]}),e.jsx("p",{className:"text-red-500",children:(x=u[s])==null?void 0:x.message})]})}function R({name:o,isSubmitting:s,handleFormSubmit:d}){const t=f({mode:"onBlur"}),[c,r]=p.useState(!1),{control:n,handleSubmit:m,watch:i}=t,l=i("password"),[u,x]=p.useState(!1);return e.jsxs("form",{id:o,noValidate:!0,name:o,className:"flex flex-col gap-3",onSubmit:m(d),children:[e.jsx(h,{form:t,name:"first_name",placeholder:"First Name",disabled:s,validationSchema:{required:"First Name is required"}}),e.jsx(h,{form:t,name:"last_name",placeholder:"Last Name",disabled:s,validationSchema:{required:"Last Name is required"}}),e.jsx(h,{form:t,name:"email",type:"email",disabled:s,placeholder:"Email",onChange:()=>r(!1),validationSchema:{pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email format"},validate:{emailAvailable:async a=>{if(a&&!c){const g=await b(a);return g.data.is_user_exist===!1&&r(!0),g.data.is_user_exist===!1||"email already exists"}}}}}),e.jsx(_,{form:t,name:"password",placeholder:"Password",disabled:s,showPassword:u,setShowPassword:x}),l&&e.jsx(h,{form:t,type:u?"text":"password",name:"password_confirmation",placeholder:"Confirm Password",disabled:s,validationSchema:{validate:{isPasswordMatch:a=>a===l||"Passwords do not match"}}}),e.jsx(j,{control:n})]})}function z(){var n,m,i;const{token:o}=w(),{isLoading:s,isError:d,error:t,mutate:c}=v(),r=l=>{c(l)};return o?e.jsx(N,{to:L.jobListingPage}):e.jsx(p.Fragment,{children:e.jsxs("div",{className:"p-12 text-content-black",children:[e.jsx(k,{}),e.jsxs("div",{className:"flex flex-col items-center mt-6 sm:mt-12",children:[e.jsx("h1",{className:"text-2xl font-extrabold xl:text-3xl",children:"Sign up for Job Finder"}),e.jsx("div",{className:"flex-1 w-full mt-2 sm:mt-8",children:e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx(y,{error:d,errorMessage:(i=(m=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:m.error)==null?void 0:i.message}),e.jsx(R,{name:"registerForm",isSubmitting:s,handleFormSubmit:r}),e.jsx("div",{className:"mt-5",children:e.jsx(C,{form:"registerForm",isLoading:s,title:"Register"})}),e.jsxs("p",{className:"px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray",children:["Alrady have an account?"," ",e.jsx(P,{to:S.authLoginPage,className:"text-indigo-500 ",children:"Login"})]}),e.jsx(A,{})]})})]})]})})}export{z as default};
