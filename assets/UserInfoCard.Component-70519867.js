import{j as e,f as i,I as d,a as c,E as n,U as l}from"./index-4a35729d.js";import{u as m}from"./useApiUserInfo-6d0e913c.js";import{L as x}from"./LinkEdit.Ui.Component-123a96de.js";import{C as h}from"./CardHeading.Ui.Component-7542912f.js";import{u as p}from"./useApiUserContact-485a4f18.js";function u({city:a,zipCode:t,country:s,province:r}){return e.jsxs("p",{className:"text-sm text-content-slate_500 empty:hidden",children:[a&&e.jsx("span",{children:a}),r&&e.jsxs(e.Fragment,{children:[a&&", ",e.jsx("span",{children:r})]}),t&&e.jsxs(e.Fragment,{children:[(a||r)&&", ",e.jsx("span",{children:t})]}),s&&e.jsxs(e.Fragment,{children:[(a||r||t)&&", ",e.jsx("span",{children:s})]})]})}function o({imagePathUrl:a,className:t,to:s="",alt:r=""}){return e.jsx(i,{to:s,className:t,children:e.jsx(d,{imageUrl:a,alt:r})})}function v(){const{data:a}=m(),{data:t}=p(),{authenticatedUser:s}=c();return e.jsxs("section",{className:"relative w-full overflow-hidden border border-border-100 sm:rounded-lg bg-background-gray_50 text-content-black",children:[e.jsx(o,{imagePathUrl:a==null?void 0:a.cover_image,to:n(l.userCoverImageViewModal.name),className:"block w-full h-36 sm:h-48 "}),e.jsx(o,{imagePathUrl:a==null?void 0:a.profile_image,to:n(l.userProfileImageViewModal.name),className:"absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-border-100"}),e.jsxs("div",{className:"relative p-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center mt-10 sm:gap-5",children:[e.jsx(h,{title:`${a==null?void 0:a.first_name} 
          ${a.additional_name?`(${a.additional_name})`:""}
          ${a==null?void 0:a.last_name}`}),e.jsxs("div",{className:"flex-wrap items-center space-x-3",children:[e.jsx("span",{children:s.email}),!s.is_email_verified&&e.jsx(i,{className:"px-4 text-xl transition-all border rounded-full text-accent-blue500 hover:bg-accent-blue500 hover:text-content-black_inverted border-accent-blue500",children:"Verify Now"})]})]}),e.jsx("p",{className:"max-w-xl text-lg whitespace-pre-line",children:a==null?void 0:a.headline}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsx(u,{city:t.city,province:t.province,zipCode:t.zip_code,country:t.country}),e.jsx(i,{to:n(l.userContactEditModal.name),className:"text-sm text-indigo-500 hover:underline",children:"Contact"})]}),e.jsx(x,{className:"absolute right-5 top-5",to:n(l.userInfoEditModal.name)})]})]})}export{v as default};
