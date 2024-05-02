import{r as u,j as e,m as L,p as w,q as O,o as b,N as C,e as E,L as N,Q as R,n as V}from"./index-5721c188.js";import{o as P}from"./otpStore-1d04abba.js";import{L as T,A as k}from"./AuthSubmitButton.Ui.Component-6fdba12b.js";const A=t=>{const[i,r]=u.useState(t),[l,a]=u.useState(!1);return u.useEffect(()=>{let c;return l&&i>0&&(c=setInterval(()=>{r(s=>s-1)},1e3)),()=>clearInterval(c)},[l,i]),{seconds:i,start:()=>{a(!0)},stop:()=>{a(!1)},reset:()=>{r(t),a(!1)}}};function U(t){if(!/^([^\s@]+@[^\s@]+\.[^\s@]+)$/.test(t))return t;const[r,l]=t.split("@"),a=Math.min(r.length,3);return`${r.slice(0,a)+"*".repeat(r.length-a)}@${l}`}const q=({length:t=6,setOtpValue:i,isLoading:r})=>{const[l,a]=u.useState(Array(t).fill("")),o=u.useRef([]),f=(c,s)=>{const n=[...l];n[c]=s,a(n),s&&o.current[c+1]&&o.current[c+1].focus(),i(n.join(""))},p=(c,s)=>{c.key==="Backspace"&&!l[s]&&o.current[s-1]&&o.current[s-1].focus()};return u.useEffect(()=>{o.current[0].focus()},[]),u.useEffect(()=>{r&&(a(Array(t).fill("")),o.current[0]&&o.current[0].focus())},[r]),e.jsx("div",{className:"flex justify-center",children:l.map((c,s)=>e.jsx("input",{type:"password",value:c,maxLength:1,onChange:n=>f(s,n.target.value),onKeyDown:n=>p(n,s),ref:n=>o.current[s]=n,className:"w-12 h-12 mx-1 text-center border border-gray-300 rounded-md text-content-black_inverted",autoComplete:"off"},s))})},I=q;function $({height:t,width:i,className:r}){return e.jsx("svg",{height:`${t}px`,width:`${i}px`,version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:r,children:e.jsx("g",{children:e.jsx("path",{fill:"currentColor",d:`M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z`})})})}function M({error:t}){return e.jsx("span",{className:"inline-block w-full text-center text-red-500",children:t})}function D(){const t=L(),[i,r]=u.useState(""),[l,a]=u.useState(!1),{setUser:o}=w(),{email:f,resendTimerSeconds:p,otpRequested:c,setOtpState:s}=P(),{seconds:n,start:m,reset:g}=A(p),{mutate:h,error:j,isError:v,isLoading:x}=O({onSuccess:d=>{a(!0),o(d.data.user),t("/job-finder-react-frontend/auth/verify-otp-success")},onError:d=>{d.response.status!==400&&(R.error("Sorry, we encountered an issue processing your request. Please try again later."),t(V.userProfilePage))}}),{mutate:y,isLoading:S}=b({onSuccess:d=>{s({email:f,resendTimerSeconds:d.data.resend_timer_seconds,otpRequested:!0}),g(),m()}});return u.useEffect(()=>(m(),()=>{l&&s({email:"",resendTimerSeconds:"",otpRequested:!1})}),[]),c?e.jsxs("div",{className:"flex flex-col items-center p-5 py-10 sm:py-20 gap-14 text-content-black",children:[e.jsx(T,{}),e.jsxs("div",{className:"flex flex-col items-center gap-5",children:[e.jsx($,{height:"100",width:"100",className:"text-indigo-500"}),e.jsx("h1",{className:"text-2xl font-extrabold xl:text-3xl",children:"OTP Verification"}),e.jsxs("p",{children:["enter the OTP sent to ",U(f)]}),v&&e.jsx(M,{error:j.response.data.error}),e.jsx("div",{className:"max-w-xs mx-auto",children:e.jsx(I,{length:4,setOtpValue:r,isLoading:x})}),e.jsx("button",{onClick:()=>y(f),className:"w-full text-center text-indigo-300 hover:underline disabled:no-underline",disabled:!!n,children:S?e.jsx(N,{size:"6"}):`Resend OTP ${n?`in ${n} seconds`:""}`})]}),e.jsx("div",{className:"w-full",children:e.jsx(k,{form:"registerForm",isLoading:x,title:"Verify",onClick:()=>h({email:f,otp:i})})})]}):e.jsx(C,{to:E.jobListingPage})}export{D as default};