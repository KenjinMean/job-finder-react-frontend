import{W as m,k as u,n as f,Z as x,j as e,M as p,A as l,B as h,I as g,X as j,C as U,$ as P}from"./index-ca387606.js";function w(){const{setImageDataURL:o,setImageFile:n}=m(),i=u(),{data:t}=f(),{mutate:r}=x(),d=a=>{const s=new FileReader;s.onloadend=()=>{i(P),o(s.result)},s.readAsDataURL(a),n(a)},c=()=>{const a=new FormData;a.append("_method","PATCH"),a.append("profile_image",""),r(a)};return e.jsx(p,{navigateOnClose:l,contentClassName:"w-full max-w-3xl",children:e.jsxs("div",{className:"flex flex-col bg-white rounded-lg shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between p-5",children:[e.jsx("h3",{className:"text-xl font-secondary",children:"Profile Photo"}),e.jsx(h,{to:l,preventScrollReset:!0})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-64 h-64 overflow-hidden rounded-full",children:e.jsx(g,{imageUrl:t==null?void 0:t.profile_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(j,{title:"Add Photo",handleFileSelect:d}),e.jsx(U,{onClick:c,children:"Delete"})]})]})})}export{w as default};
