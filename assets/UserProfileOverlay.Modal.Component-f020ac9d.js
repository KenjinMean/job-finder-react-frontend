import{n as r,H as i,j as e,x as s,I as n}from"./index-dd773d74.js";import{M as d,L as m}from"./LinkClosePrimay.Ui.Component-5cffcfe9.js";import{B as c}from"./ButtonFileUpload.Ui.Component-a197cce6.js";import{B as f}from"./ButtonActionPrimary.Ui.Component-b06e9a1c.js";import"./index-01edcd7d.js";function U(){const{data:t}=r(),{mutate:a}=i(),l=()=>{const o=new FormData;o.append("_method","PATCH"),o.append("profile_image",""),a(o)};return e.jsx(d,{navigateOnClose:s,contentClassName:"w-full max-w-3xl",children:e.jsxs("div",{className:"flex flex-col bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-5",children:[e.jsx("h3",{className:"text-xl font-secondary",children:"Profile Photo"}),e.jsx(m,{to:s,preventScrollReset:!0})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx(n,{imageUrl:t==null?void 0:t.profile_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(c,{title:"Add Photo"}),e.jsx(f,{onClick:l,children:"Delete"})]})]})})}export{U as default};
