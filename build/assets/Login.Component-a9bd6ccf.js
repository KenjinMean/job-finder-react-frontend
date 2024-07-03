import{u as v,a as b,r as l,j as e,L as m,b as y,c as L,d as N,N as A,e as k,f as h,g as x}from"./index-41237f89.js";import{A as f,T as R}from"./AuthError.Component-a08f5b9f.js";import{L as C,A as S}from"./AuthSubmitButton.Ui.Component-4ee7cbab.js";const E=()=>{const n=v(),{setSocialServiceLoginError:a}=b(),i=()=>{const s=`${window.location.origin}${window.location.pathname}`;window.history.replaceState({},document.title,s)};l.useEffect(()=>{const t=new URLSearchParams(n.search).get("error");if(t){let o=decodeURIComponent(t);t==="This email already exists"?o=t:t==="Email already associated with GitHub"?o="Login using Google failed, Email already associated with another Auth service provider":t==="Email already associated with Google"&&(o="Login using Github failed, Email already associated with another Auth Service Provider"),a(o),i()}},[n,a])},_=E;function G({name:n,handleSubmit:a,isLoading:i}){const s=l.useRef(),t=l.useRef(),o=r=>{r.preventDefault();const c={email:s.current.value,password:t.current.value};a(c)};return e.jsxs("form",{onSubmit:o,className:"max-w-xs mx-auto mt-5",id:n,name:n,children:[e.jsx("input",{className:"w-full px-8 py-4 text-sm font-medium border rounded-lg placeholder-content-gray text-content-black border-border-100 bg-input-gray focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:opacity-50",type:"email",ref:s,placeholder:"Email",id:"email",name:"email",autoComplete:"username",required:!0,disabled:i}),e.jsx("input",{className:"w-full px-8 py-4 mt-5 text-sm font-medium border rounded-lg placeholder-content-gray text-content-black border-border-100 bg-input-gray focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:opacity-50",type:"password",ref:t,placeholder:"Password",name:"password",autoComplete:"current-password",id:"password",required:!0,disabled:i})]})}function P({githubLoading:n,googleLoading:a,getGithubAuthURL:i,getGoogleAuthURL:s,isLoginButtonDisabled:t}){const o=r=>{r==="github"?i():r==="google"&&s()};return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{onClick:()=>{o("google")},className:"relative flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold transition-all duration-300 ease-in-out border rounded-lg shadow-sm bg-accent-light_indigo hover:bg-accent-light_indigo_hover border-border-100 text-content-black_stable h-14 hover:text-content-black_stable_hover focus:outline-none focus:ring-4 focus:ring-accent-blue500 disabled:bg-background-slate300",disabled:t,children:a?e.jsx(m,{size:6}):e.jsxs(l.Fragment,{children:[e.jsx("div",{className:"p-2 bg-white rounded-full",children:e.jsxs("svg",{className:"w-4",viewBox:"0 0 533.5 544.3",children:[e.jsx("path",{d:"M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z",fill:"#4285f4"}),e.jsx("path",{d:"M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z",fill:"#34a853"}),e.jsx("path",{d:"M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z",fill:"#fbbc04"}),e.jsx("path",{d:"M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z",fill:"#ea4335"})]})}),e.jsx("span",{className:"ml-3",children:"Continue with Google"})]})}),e.jsx("button",{onClick:()=>{o("github")},className:"relative flex items-center justify-center w-full max-w-xs py-3 mt-5 font-bold transition-all duration-300 ease-in-out border rounded-lg shadow-sm bg-accent-light_indigo hover:bg-accent-light_indigo_hover border-border-100 text-content-black_stable h-14 hover:text-content-black_stable_hover focus:outline-none focus:ring-4 focus:ring-accent-blue500 disabled:bg-background-slate300",disabled:t,children:n?e.jsx(m,{size:6}):e.jsxs(l.Fragment,{children:[e.jsx("div",{className:"p-1 bg-white rounded-full",children:e.jsx("svg",{className:"w-6",viewBox:"0 0 32 32",children:e.jsx("path",{fillRule:"evenodd",d:"M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"})})}),e.jsx("span",{className:"ml-3",children:"Continue with GitHub"})]})})]})}function F(){var d,u,g;const{token:n,socialServiceLoginError:a,isLoginButtonDisabled:i}=b(),{error:s,isError:t,isLoading:o,mutate:r}=y(),{isFetching:c,refetch:p}=L(),{isFetching:j,refetch:w}=N();return _(),n?e.jsx(A,{to:k.jobListingPage}):e.jsxs("div",{className:"p-12",children:[e.jsx(C,{}),e.jsxs("div",{className:"flex flex-col items-center max-w-xs mx-auto mt-6 sm:mt-12",children:[e.jsx(f,{error:a,errorMessage:a}),e.jsxs("div",{className:"flex-1 w-full",children:[e.jsx(P,{isLoginButtonDisabled:i,githubLoading:c,googleLoading:j,getGithubAuthURL:p,getGoogleAuthURL:w}),e.jsx("div",{className:"my-6 text-center border-b sm:my-12",children:e.jsx("div",{className:"inline-block px-2 text-sm font-medium leading-none tracking-wide transform translate-y-1/2 text-content-gray bg-background-gray300",children:"Or sign up with e-mail"})}),e.jsx(f,{error:t,errorMessage:(g=(u=(d=s==null?void 0:s.response)==null?void 0:d.data)==null?void 0:u.error)==null?void 0:g.message}),e.jsx(G,{name:"loginForm",handleSubmit:r,isLoading:o}),e.jsx("div",{className:"mt-5",children:e.jsx(S,{form:"loginForm",title:"Login",isLoading:o})}),e.jsxs("p",{className:"px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray",children:["Don't have an account yet?"," ",e.jsx(h,{to:x.authRegisterPage,className:"text-indigo-500",children:"Register"})]}),e.jsx("p",{className:"px-2 mt-5 text-sm font-medium leading-none tracking-wide text-center transform translate-y-1/2 text-content-gray",children:e.jsx(h,{to:x.authRegisterPage,className:"text-indigo-500",children:"forgot password?"})}),e.jsx(R,{})]})]})]})}export{F as default};
