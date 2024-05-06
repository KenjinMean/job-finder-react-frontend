import{j as e,f as m,I as x,m as h,p as u,o as g,H as r,U as o,O as j,g as f}from"./index-62bd7fef.js";import{o as U}from"./otpStore-cc517ad0.js";import{u as C}from"./useApiUserInfo-c2613db6.js";import{u as b}from"./useApiUserContact-519cf52c.js";import{L as w}from"./LinkEdit.Ui.Component-60a86e02.js";import{C as v}from"./CardHeading.Ui.Component-b7be34b8.js";function N({city:s,zipCode:t,country:i,province:a}){return e.jsxs("p",{className:"text-sm text-content-slate_500 empty:hidden",children:[s&&e.jsx("span",{children:s}),a&&e.jsxs(e.Fragment,{children:[s&&", ",e.jsx("span",{children:a})]}),t&&e.jsxs(e.Fragment,{children:[(s||a)&&", ",e.jsx("span",{children:t})]}),i&&e.jsxs(e.Fragment,{children:[(s||a||t)&&", ",e.jsx("span",{children:i})]})]})}function l({imagePathUrl:s,className:t,to:i="",alt:a=""}){return e.jsx(m,{to:i,className:t,children:e.jsx(x,{imageUrl:s,alt:a})})}function A(){const s=h(),{user:t}=u(),{setOtpState:i}=U(),{data:a}=C(),{data:n}=b(),{mutate:d,isLoading:c}=g({onSuccess:p=>{i({email:t.email,resendTimerSeconds:p.data.resend_timer_seconds,otpRequested:!0}),s(f.authVerifyOtp)}});return e.jsxs("section",{className:"relative w-full overflow-hidden border border-border-100 sm:rounded-lg bg-background-gray_50 text-content-black",children:[e.jsx(l,{imagePathUrl:a==null?void 0:a.cover_image,to:r(o.userCoverImageViewModal.name),className:"block w-full h-36 sm:h-48 "}),e.jsx(l,{imagePathUrl:a==null?void 0:a.profile_image,to:r(o.userProfileImageViewModal.name),className:"absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-border-100"}),e.jsxs("div",{className:"relative p-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center mt-10 sm:gap-5",children:[e.jsx(v,{title:`${a==null?void 0:a.first_name} 
          ${a.additional_name?`(${a.additional_name})`:""}
          ${a==null?void 0:a.last_name}`}),e.jsxs("div",{className:"flex flex-wrap items-center space-x-3",children:[e.jsx("span",{children:t.email}),!t.is_email_verified&&e.jsx(j,{text:"Verify Now",loadingText:"Sending OTP...",isSubmitting:c,onClick:()=>d(t.email)})]})]}),e.jsx("p",{className:"max-w-xl text-lg whitespace-pre-line",children:a==null?void 0:a.headline}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx(N,{city:n.city,province:n.province,zipCode:n.zip_code,country:n.country}),e.jsx(m,{to:r(o.userContactEditModal.name),className:"text-sm text-indigo-500 hover:underline",children:"Contact"})]}),e.jsx(w,{className:"absolute right-5 top-5",to:r(o.userInfoEditModal.name)})]})]})}export{A as default};
