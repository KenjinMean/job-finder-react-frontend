import{u as v,a as h,r as i,R as e,L as m,b as E,c as x,d as y,e as L,f as N,N as R,j as g,P as S,g as k}from"./index-69428934.js";import{T as A,A as f}from"./AuthError.Component-5d7aff89.js";const C=()=>{const o=v(),{setSocialServiceLoginError:r}=h(),l=()=>{const a=`${window.location.origin}${window.location.pathname}`;window.history.replaceState({},document.title,a)};i.useEffect(()=>{const t=new URLSearchParams(o.search).get("error");if(t){let n=decodeURIComponent(t);t==="This email already exists"?n=t:t==="Email already associated with GitHub"?n="Login using Google failed, Email already associated with another Auth service provider":t==="Email already associated with Google"&&(n="Login using Github failed, Email already associated with another Auth Service Provider"),r(n),l()}},[o,r])},M=C;function P({loginMutation:o,isLoginButtonDisabled:r,loginLoading:l}){const a=i.useRef(),t=i.useRef(),n=s=>{s.preventDefault();const c={email:a.current.value,password:t.current.value};o(c)};return e.createElement("form",{onSubmit:n},e.createElement("div",{className:"max-w-xs mx-auto mt-5"},e.createElement("input",{className:"w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white",type:"email",ref:a,placeholder:"Email",required:!0}),e.createElement("input",{className:"w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white",type:"password",ref:t,placeholder:"Password",required:!0}),e.createElement("button",{disabled:r,className:"flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none disabled:bg-slate-300"},l?e.createElement(m,{size:6}):e.createElement(e.Fragment,null,e.createElement("svg",{className:"w-6 h-6 -ml-2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),e.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),e.createElement("path",{d:"M20 8v6M23 11h-6"})),e.createElement("span",{className:"ml-3"},"Login"))),e.createElement("p",{className:"px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center text-gray-600 transform translate-y-1/2 bg-white "},"Dont have an account yet?"," ",e.createElement(E,{to:x,className:"text-indigo-500"},"Register")),e.createElement(A,null)))}function G({githubLoading:o,googleLoading:r,getGithubAuthURL:l,getGoogleAuthURL:a,isLoginButtonDisabled:t}){const n=s=>{s==="github"?l():s==="google"&&a()};return e.createElement("div",{className:"flex flex-col items-center"},e.createElement("button",{onClick:()=>{n("google")},className:"relative flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 border rounded-lg shadow-sm h-14 focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline disabled:bg-slate-300",disabled:t},r?e.createElement(m,{size:6}):e.createElement(i.Fragment,null,e.createElement("div",{className:"p-2 bg-white rounded-full"},e.createElement("svg",{className:"w-4",viewBox:"0 0 533.5 544.3"},e.createElement("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),e.createElement("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),e.createElement("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),e.createElement("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"}))),e.createElement("span",{className:"ml-3"},"Continue with Google"))),e.createElement("button",{onClick:()=>{n("github")},className:"relative flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold text-gray-800 transition-all duration-300 ease-in-out bg-indigo-100 border rounded-lg shadow-sm h-14 focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline disabled:bg-slate-300",disabled:t},o?e.createElement(m,{size:6}):e.createElement(i.Fragment,null,e.createElement("div",{className:"p-1 bg-white rounded-full"},e.createElement("svg",{className:"w-6",viewBox:"0 0 32 32"},e.createElement("path",{fillRule:"evenodd",d:"M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"}))),e.createElement("span",{className:"ml-3"},"Continue with GitHub"))))}function U(){var d,u;const{token:o,socialServiceLoginError:r,isLoginButtonDisabled:l}=h(),{error:a,isError:t,isLoading:n,mutate:s}=y(),{isFetching:c,refetch:p}=L(),{isFetching:b,refetch:w}=N();return M(),o?e.createElement(R,{to:g}):e.createElement(i.Fragment,null,e.createElement(S,{title:"Login"}),e.createElement("div",{className:"p-6 sm:p-12 "},e.createElement(E,{to:g},e.createElement("div",{className:"flex justify-center"},e.createElement("img",{src:k,alt:""}))),e.createElement("div",{className:"flex flex-col items-center mt-12"},e.createElement(f,{error:r,errorMessage:r}),e.createElement("div",{className:"flex-1 w-full"},e.createElement(G,{isLoginButtonDisabled:l,githubLoading:c,googleLoading:b,getGithubAuthURL:p,getGoogleAuthURL:w}),e.createElement("div",{className:"my-12 text-center border-b"},e.createElement("div",{className:"inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white"},"Or sign up with e-mail")),e.createElement(f,{error:t,errorMessage:(u=(d=a==null?void 0:a.response)==null?void 0:d.data)==null?void 0:u.message}),e.createElement(P,{loginLoading:n,loginMutation:s,isLoginButtonDisabled:l})))))}export{U as default};
