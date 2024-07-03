import{j as e,m as l,r as d,o as c,g as u,Q as m}from"./index-41237f89.js";import{o as x}from"./otpStore-ba1c5597.js";import{L as p,A as h}from"./AuthSubmitButton.Ui.Component-4ee7cbab.js";function g({height:r,width:s,className:t}){return e.jsxs("svg",{height:`${r}px`,width:`${s}px`,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:[e.jsx("path",{d:"M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M6 10V8C6 4.68629 8.68629 2 12 2C14.7958 2 17.1449 3.91216 17.811 6.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M12 14V18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function j(){const r=l(),{setOtpState:s}=x(),[t,a]=d.useState(""),{mutate:n,isLoading:i}=c({onSuccess:o=>{s({email:t,resendTimerSeconds:o.data.resend_timer_seconds,otpRequested:!0}),r(u.authVerifyOtp)},onError:()=>{m.error("Sorry, we encountered an issue processing your request. Please try again later.")}});return e.jsxs("div",{className:"flex flex-col items-center p-10 sm:py-20 gap-14 text-content-black",children:[e.jsx(p,{}),e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx(g,{height:"100",width:"100",className:"text-indigo-500"}),e.jsx("h1",{className:"text-2xl font-extrabold xl:text-3xl",children:"OTP Verification"}),e.jsx("p",{children:"We will send you a one-time password to this email"}),e.jsx("span",{className:"text-content-slate_500",children:"enter email"}),e.jsxs("div",{className:"w-full mx-auto",children:[e.jsx("input",{type:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:t,onChange:o=>a(o.target.value),placeholder:"Email",required:!0,autoComplete:"email"}),e.jsx("div",{className:"w-full mt-5",children:e.jsx(h,{isLoading:i,title:"Get OTP",onClick:()=>n(t)})})]})]})]})}export{j as default};
