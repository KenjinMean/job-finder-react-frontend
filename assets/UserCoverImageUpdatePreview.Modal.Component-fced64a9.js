import{z as d,U as p,j as e,N as g,y as t,r as c,G as u}from"./index-65174fac.js";import{u as f,B as v}from"./ButtonFileUpload.Ui.Component-7830e8e0.js";import{b as x}from"./useApiUserInfo-30dd5133.js";function C(){const{handleImageSelect:s,imageFile:o,imageDataURL:i,fromViewPage:r}=f(d(p.userCoverImageUpdatePreviewModal.name)),{isLoading:n,mutate:l}=x(),m=async()=>{const a=new FormData;a.append("_method","PATCH"),a.append("cover_image",o),l(a)};return r?e.jsxs(c.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-full p-5 overflow-hidden h-80",children:e.jsx("img",{src:i,alt:"user profile image",className:"object-cover w-full h-full"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(v,{title:"Change Image",accept:"image/*",handleFileSelect:s,imagePreviewPage:t.userCoverImageUpdatePreviewPage}),e.jsx(u,{text:"Update",loadingText:"Updating",onClick:m,isSubmitting:n})]})]}):e.jsx(g,{to:t.userProfilePage})}export{C as default};
