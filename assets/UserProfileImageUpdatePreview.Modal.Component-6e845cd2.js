import{i as f,F as x,r as p,H as g,j as e,M as h,n as t,t as j,G as P,B as v}from"./index-b2c26f54.js";function C(){const o=f(),{imageFile:i,setImageFile:n,imageDataURL:r,setImageDataURL:d}=x(),[a,w]=p.useState(new FormData),{mutate:m}=g(),c=()=>{a.append("_method","PATCH"),a.append("profile_image",i),m(a)},u=l=>{const s=new FileReader;s.onloadend=()=>{o(t.userProfileImagePreviewpage),d(s.result)},s.readAsDataURL(l),n(l)};return e.jsx(h,{navigateOnClose:t.userProfilePage,contentClassName:"w-full max-w-3xl",children:e.jsxs("div",{className:"flex flex-col bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-5",children:[e.jsx("h3",{className:"text-xl font-secondary",children:"Image Preview"}),e.jsx(j,{to:t.userProfilePage})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx("img",{src:r,alt:"user profile image",className:"object-cover w-full h-full"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(P,{title:"Add Photo",handleFileSelect:u}),e.jsx(v,{onClick:c,children:"Save"})]})]})})}export{C as default};
