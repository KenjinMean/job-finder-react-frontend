import{E as m,U as c,a0 as d,j as e,r as p,I as u,a1 as g}from"./index-9e1473eb.js";import{u as f,B as h}from"./ButtonFileUpload.Ui.Component-5d5497c6.js";import{u as x,b as C}from"./useApiUserInfo-7b60b66c.js";function w(){const{handleImageSelect:r}=f(m(c.userCoverImageUpdatePreviewModal.name)),{data:a}=x(),{requestConfirmation:s}=d(),{isLoading:n,mutate:i}=C(),l=async()=>{try{if(await s("Are you sure you want to delete Cover Image?")){const t=new FormData;t.append("_method","PATCH"),t.append("cover_image",""),i(t)}}catch(o){console.error("An error occurred while deleting the profile:",o)}};return e.jsxs(p.Fragment,{children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsx("div",{className:"w-full h-64 overflow-hidden ",children:e.jsx(u,{imageUrl:a==null?void 0:a.cover_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(g,{text:"Delete",loadingText:"Deleting",onClick:l,isSubmitting:n}),e.jsx(h,{title:"Change Image",accept:"image/*",handleFileSelect:r})]})]})}export{w as default};
