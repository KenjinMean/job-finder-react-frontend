import{H as m,U as d,j as e,N as p,n as u,r as c,O as f}from"./index-3b64eb71.js";import{u as g,B as x}from"./ButtonFileUpload.Ui.Component-89e66c46.js";import{c as j}from"./useApiUserInfo-be2196e2.js";function v(){const{handleImageSelect:t,imageFile:s,imageDataURL:i,fromViewPage:o}=g(m(d.userProfileImageUpdatePreviewModal.name)),{isLoading:r,mutate:l}=j(),n=()=>{const a=new FormData;a.append("_method","PATCH"),a.append("profile_image",s),l(a)};return o?e.jsxs(c.Fragment,{children:[e.jsx("div",{className:"flex justify-center py-5",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx("img",{src:i,alt:"user profile image",className:"object-cover w-full h-full"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(x,{title:"Change Image",accept:"image/*",handleFileSelect:t}),e.jsx(f,{text:"save",loadingText:"saving",onClick:n,isSubmitting:r})]})]}):e.jsx(p,{to:u.userProfilePage})}export{v as default};
