import{at as g,au as m,m as u,r as f,j as c}from"./index-41237f89.js";const p=g(m(a=>({imageFile:null,imageDataURL:null,fromViewPage:!1,setImageFile:e=>a(t=>({imageFile:e})),setImageDataURL:e=>a(t=>({imageDataURL:e})),setFromViewPage:e=>a(t=>({fromViewPage:e}))}))),F=a=>{const e=u(),{setFromViewPage:t,setImageFile:s,setImageDataURL:r,imageFile:i,imageDataURL:n,fromViewPage:o}=p();return{handleImageSelect:d=>{t(!0),s(d);const l=new FileReader;l.onloadend=()=>{r(l.result)},l.readAsDataURL(d),e(a)},imageFile:i,imageDataURL:n,fromViewPage:o}},U=F;function b({title:a,accept:e="./*",handleFileSelect:t}){const s=f.useRef(),r=()=>{var n;(n=s.current)==null||n.click()},i=n=>{const o=n.target.files[0];o&&t(o)};return c.jsxs("button",{onClick:r,className:"flex items-center gap-2 px-4 py-1 transition-colors border rounded-md border-border-100 font-secondary text-content-gray hover:text-content-black hover:bg-accent-purple_inverted focus:ring-4 focus:outline-none focus:ring-accent-blue500 disabled:bg-slate-500",children:[c.jsx("span",{children:a}),c.jsx("input",{ref:s,type:"file",accept:e,className:"hidden",onChange:i})]})}export{b as B,U as u};
