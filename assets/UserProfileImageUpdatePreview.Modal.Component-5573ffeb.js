import{v as n,U as m,j as e,N as d,w as c,r as p,B as f,Q as u}from"./index-0243f51f.js";import{u as g,B as U}from"./ButtonFileUpload.Ui.Component-97e24e3e.js";import{c as x}from"./useApiUserInfo-c7fc5fb8.js";function v(){const{handleImageSelect:s,imageFile:r,imageDataURL:i,fromViewPage:o}=g(n(m.userProfileImageUpdatePreviewModal.name)),t=x(),l=()=>{const a=new FormData;a.append("_method","PATCH"),a.append("profile_image",r),u.promise(t(a),{pending:"Updating User Profile Image",success:"User Profile image updated sucessfully",error:"Error Updating User profile image"})};return o?e.jsxs(p.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx("img",{src:i,alt:"user profile image",className:"object-cover w-full h-full"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(U,{title:"Add Photo",accept:"image/*",handleFileSelect:s}),e.jsx(f,{onClick:l,children:"Save"})]})]}):e.jsx(d,{to:c.userProfilePage})}export{v as default};
