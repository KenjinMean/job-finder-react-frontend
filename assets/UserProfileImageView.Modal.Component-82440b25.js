import{$ as m,z as d,U as c,j as e,r as p,I as u,a0 as f}from"./index-aa5f6cbb.js";import{u as g,B as h}from"./ButtonFileUpload.Ui.Component-316612b6.js";import{u as x,c as U}from"./useApiUserInfo-ca3191b3.js";function C(){const{data:a}=x(),{requestConfirmation:r}=m(),{isLoading:i,mutate:s}=U(),{handleImageSelect:n}=g(d(c.userProfileImageUpdatePreviewModal.name)),l=async()=>{try{if(await r("Are you sure you want to delete profile Image?")){const t=new FormData;t.append("_method","PATCH"),t.append("profile_image",""),s(t)}}catch(o){console.error("An error occurred while deleting the profile:",o)}};return e.jsxs(p.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 mt-5 overflow-hidden rounded-full",children:e.jsx(u,{imageUrl:a==null?void 0:a.profile_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(f,{text:"Delete",loadingText:"Deleting",onClick:l,isSubmitting:i}),e.jsx(h,{title:"Change Image",accept:"image/*",handleFileSelect:n})]})]})}export{C as default};
