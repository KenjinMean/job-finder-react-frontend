import{w as n,U as i,j as e,r as l,I as m,B as d,Q as c}from"./index-9d449b7d.js";import{u as p,B as g}from"./ButtonFileUpload.Ui.Component-4d3d044e.js";import{u,b as U}from"./useApiUserInfo-ffd82f2a.js";function x(){const{handleImageSelect:r}=p(n(i.userCoverImageUpdatePreviewModal.name)),{data:a}=u(),o=U(),t=()=>{const s=new FormData;s.append("_method","PATCH"),s.append("cover_image",""),c.promise(o(s),{pending:"Deleting User Cover Image",success:"User Cover image Deleted sucessfully",error:"Error Deleting User Cover image"})};return e.jsxs(l.Fragment,{children:[e.jsx("div",{className:"flex justify-center p-5",children:e.jsx("div",{className:"w-full h-64 overflow-hidden ",children:e.jsx(m,{imageUrl:a==null?void 0:a.cover_image,alt:"user profile image"})})}),e.jsxs("div",{className:"flex justify-between p-5",children:[e.jsx(g,{title:"Add Photo",accept:"image/*",handleFileSelect:r}),e.jsx(d,{onClick:t,children:"Delete"})]})]})}export{x as default};
