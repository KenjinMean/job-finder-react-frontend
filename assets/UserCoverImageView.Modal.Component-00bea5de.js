import{z as n,U as l,A as i,M as d,j as e,r as m,I as c,B as p,Q as g}from"./index-4d5d73de.js";import{u,B as U}from"./ButtonFileUpload.Ui.Component-3dbfe40d.js";function h(){const{handleImageSelect:r}=u(n(l.userCoverImageUpdatePreviewModal.name)),{data:a}=i(),o=d(),t=()=>{const s=new FormData;s.append("_method","PATCH"),s.append("cover_image",""),g.promise(o(s),{pending:"Deleting User Cover Image",success:"User Cover image Deleted sucessfully",error:"Error Deleting User Cover image"})};return e.jsxs(m.Fragment,{children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsx("div",{className:"w-full h-64 overflow-hidden ",children:e.jsx(c,{imageUrl:a==null?void 0:a.cover_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(U,{title:"Add Photo",accept:"image/*",handleFileSelect:r}),e.jsx(p,{onClick:t,children:"Delete"})]})]})}export{h as default};
