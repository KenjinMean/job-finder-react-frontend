import{K as d,D as m,q as a,H as c,r as u,j as e,N as f,M as x,v as g,F as p,B as h}from"./index-59cb0d5d.js";function v(){const{imageFile:t,imageDataURL:l,fromViewPage:i}=d(),{handleImageSelect:o}=m(a.userProfileImagePreviewPage),{mutate:r}=c(),[s,P]=u.useState(new FormData),n=()=>{s.append("_method","PATCH"),s.append("profile_image",t),r(s)};return i?e.jsx(x,{navigateOnClose:a.userProfilePage,contentClassName:"w-full max-w-3xl",children:e.jsxs("div",{className:"flex flex-col bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-5",children:[e.jsx("h3",{className:"text-xl font-secondary",children:"Image Preview"}),e.jsx(g,{to:a.userProfilePage})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx("img",{src:l,alt:"user profile image",className:"object-cover w-full h-full"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(p,{title:"Add Photo",accept:"image/*",handleFileSelect:o}),e.jsx(h,{onClick:n,children:"Save"})]})]})}):e.jsx(f,{to:a.userProfilePage})}export{v as default};
