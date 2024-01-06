import{j as e,L as y,r as d,b as j,c as v,a as C,i as L,N as S,g as h,P as A,h as F}from"./index-08fc4316.js";import{T as P,A as $}from"./AuthError.Component-d3da954a.js";function R({loading:t,title:a,children:r}){return e.jsx("button",{type:"submit",disabled:t,className:"flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg disabled:bg-slate-300 hover:bg-indigo-700 focus:shadow-outline focus:outline-none",children:t?e.jsx(y,{size:6}):e.jsxs(d.Fragment,{children:[r,e.jsx("span",{className:"ml-3",children:a})]})})}function E({value:t,onChange:a,onBlur:r,focused:n}){return e.jsxs("div",{children:[e.jsx("input",{className:"w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white",type:"email",name:"email",id:"email",required:!0,autoFocus:!0,placeholder:"Email",value:t,onChange:a,focused:n,onBlur:r,autoComplete:"username"}),e.jsx("div",{className:"relative text-center top-2 input-error",children:e.jsx("span",{className:"text-sm text-red-500",children:"Must be a valid email address"})})]})}const _="/job-finder-react-frontend/assets/showPass-b5df9896.png",k="/job-finder-react-frontend/assets/hidePass-da346e1e.png",x=(t,a)=>{switch(a){case"letter":return/[a-zA-Z]/.test(t);case"number":return/\d/.test(t);case"character":return/[$@#&!%*?]/.test(t);case"length":return t.length>=8;case"validate":return/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(t);default:throw new Error("Invalid check type")}},c="/job-finder-react-frontend/assets/yes-cad43ec2.png",m="/job-finder-react-frontend/assets/remove-df93a6f3.png";function z({payload:t,checkPassword:a}){const{password:r}=t;return e.jsxs("ul",{className:"mt-5",children:["Password must contain:",e.jsxs("li",{className:`flex items-center gap-1 ${a(r,"letter")?"text-green-600":"text-red-500"}`,children:[e.jsx("img",{className:"w-3 h-3",src:a(r,"letter")?c:m,alt:"passed"}),"one letter"]}),e.jsxs("li",{className:`flex items-center gap-1 ${a(r,"number")?"text-green-600":"text-red-500"}`,children:[e.jsx("img",{className:"w-3 h-3",src:a(r,"number")?c:m,alt:"passed"}),"one number"]}),e.jsxs("li",{className:`flex items-center gap-1 ${a(r,"character")?"text-green-600":"text-red-500"}`,children:[e.jsx("img",{className:"w-3 h-3",src:a(r,"character")?c:m,alt:"passed"}),"one special character"]}),e.jsxs("li",{className:`flex items-center gap-1 ${a(r,"length")?"text-green-600":"text-red-500"}`,children:[e.jsx("img",{className:"w-3 h-3",src:a(r,"length")?c:m,alt:"passed"}),"minimum of eight charachter"]})]})}function I({payload:t,onChange:a,onFocus:r,focused:n,showPassword:i,setShowpassword:o}){return e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white",type:i?"text":"password",name:"password",placeholder:"Password",required:!0,pattern:"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",value:t.password,focused:n,onChange:a,onFocus:r,autoComplete:"current-password",id:"password"}),e.jsx("button",{type:"button",tabIndex:"-1",className:"absolute right-5 top-[33px] p-1 rounded-full hover:bg-slate-300 transition-colors",onClick:()=>o(l=>!l),children:e.jsx("img",{className:"w-5 h-5",src:i?k:_,alt:i?"hide password image":"show password image"})}),!x(t.password,"validate")&&e.jsx("div",{className:"text-sm font-medium text-slate-500 input-error",children:e.jsx("span",{children:e.jsx(z,{payload:t,checkPassword:x})})})]})}function M({value:t,onChange:a,onFocus:r,focused:n,pattern:i,showPassword:o}){return e.jsxs("div",{children:[e.jsx("input",{className:"w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white",type:o?"text":"password",name:"password_confirmation",placeholder:"Confirm Password",value:t,focused:n,onChange:a,onFocus:r,required:!0,pattern:i}),e.jsx("div",{className:"mt-2 text-center input-error",children:e.jsx("span",{className:"text-sm text-red-500",children:"Password doesn't match"})})]})}const f={email:"false",password:"false",password_confirmation:"false"},U={email:"",password:"",password_confirmation:""};function Z({registerMutation:t,registerLoading:a,isError:r}){const[n,i]=d.useState(f),[o,l]=d.useState(U),[p,w]=d.useState(!1),b=s=>{s.preventDefault(),t(o)},g=s=>{s.target.name,i({...n,[s.target.name]:"true"})},N=s=>{i({...n,[s.target.name]:"true"})},u=s=>{l({...o,[s.target.name]:s.target.value})};return d.useEffect(()=>{r&&(l(s=>({...s,password:"",password_confirmation:""})),i(f))},[r]),e.jsxs("form",{onSubmit:b,children:[e.jsx(E,{value:o.email,onChange:s=>u(s),focused:n.email,onBlur:s=>N(s)}),e.jsx(I,{focused:n.password,payload:o,onChange:s=>u(s),onFocus:s=>g(s),showPassword:p,setShowpassword:w}),x(o.password,"validate")&&e.jsx(M,{value:o.password_confirmation,onChange:s=>u(s),onFocus:s=>g(s),focused:n.password_confirmation,pattern:o.password,showPassword:p}),e.jsx(R,{loading:a,title:"Sign Up",children:e.jsxs("svg",{className:"w-6 h-6 -ml-2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),e.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),e.jsx("path",{d:"M20 8v6M23 11h-6"})]})}),e.jsxs("p",{className:"px-2 mt-5 font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white ",children:["Alrady have an account?"," ",e.jsx(j,{to:v.authLoginPage,className:"font-bold text-indigo-500",children:"Login"})]}),e.jsx(P,{})]})}function D(){var o,l;const{token:t}=C(),{isLoading:a,isError:r,error:n,mutate:i}=L();return t?e.jsx(S,{to:h.jobListingPage}):e.jsxs(d.Fragment,{children:[e.jsx(A,{title:"Register | JobFinder"}),e.jsxs("div",{className:"p-6 sm:p-12",children:[e.jsx(j,{to:h.jobListingPage,children:e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:F,alt:""})})}),e.jsxs("div",{className:"flex flex-col items-center mt-12",children:[e.jsx("h1",{className:"text-2xl font-extrabold xl:text-3xl",children:"Sign up for Job Finder"}),e.jsx("div",{className:"flex-1 w-full mt-8",children:e.jsxs("div",{className:"max-w-xs mx-auto",children:[e.jsx($,{error:r,errorMessage:(l=(o=n==null?void 0:n.response)==null?void 0:o.data)==null?void 0:l.message}),e.jsx(Z,{registerLoading:a,registerMutation:i,isError:r})]})})]})]})]})}export{D as default};
