import{j as e,b as h,p as x,I as p,q as f,s as o,t as d,v as g,w as j,r,O as b}from"./index-08fc4316.js";import{L as v}from"./LinkAdd.Ui.Component-70974020.js";function n({to:s,className:t,...l}){const{...a}=l;return e.jsx(h,{className:`p-2 transition-all rounded-full hover:bg-slate-300 ${t}`,to:s,...a,children:e.jsx("img",{className:"block w-5 h-5",src:x.path,alt:`Edit Icon. Attribution: ${x.attribution}`})})}function u({imagePathUrl:s,className:t,to:l="",alt:a=""}){return e.jsx(h,{to:l,className:t,children:e.jsx(p,{imageUrl:s,alt:a})})}function N(){const{data:s}=f(),{userCoverImageViewModal:t,userProfileImageViewModal:l,userInfoEditModal:a}=d;return e.jsxs("section",{className:"relative w-full overflow-hidden sm:rounded-lg bg-slate-200",children:[e.jsx(u,{imagePathUrl:s==null?void 0:s.cover_image,to:o(t),className:"block w-full h-36 sm:h-48 "}),e.jsx(u,{imagePathUrl:s==null?void 0:s.profile_image,to:o(l),className:"absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-slate-200"}),e.jsxs("div",{className:"relative p-5 border",children:[e.jsx("div",{className:"flex gap-1 mt-10 text-xl font-bold",children:e.jsx("p",{children:`${s==null?void 0:s.first_name} 
              ${s.additional_name?`(${s.additional_name})`:""}
              ${s==null?void 0:s.last_name}`})}),e.jsx("p",{className:"max-w-xl",children:s==null?void 0:s.headline}),e.jsx("span",{children:s==null?void 0:s.location}),e.jsx(n,{className:"absolute right-5 top-5",to:o(a),preventScrollReset:!0})]})]})}function w(){const{data:s}=g();return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Skills"}),e.jsx("ul",{className:"flex flex-col",children:s==null?void 0:s.map(t=>e.jsx("li",{className:"flex justify-between",children:e.jsx("span",{className:"rounded-md",children:t.name})},t.id))}),e.jsxs("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:[e.jsx(v,{to:o(d.userAddSkillModal),preventScrollReset:!0}),e.jsx(n,{to:j.userEditSkillPage})]})]})}function U(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Contact"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(n,{})})]})}const C=s=>{const[t,l]=r.useState(!1),[a,c]=r.useState(!1);return r.useLayoutEffect(()=>{const{offsetHeight:i,scrollHeight:m}=s.current||{};i&&m&&i<m?l(!0):l(!1)},[s]),{isTruncated:t,isShowingMore:a,toggleIsShowingMore:()=>c(i=>!i)}};function S(){const{data:s}=f(),t=r.useRef(null),{isTruncated:l,isShowingMore:a,toggleIsShowingMore:c}=C(t);return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"About"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(n,{to:o(d.userAboutEditModal),preventScrollReset:!0})}),e.jsx("p",{ref:t,className:`${!a&&"line-clamp-3"}`,children:s.about}),e.jsx("div",{className:"flex flex-row-reverse mt-2",children:l&&e.jsx("button",{onClick:c,className:"text-sm text-slate-600 hover:text-indigo-500",children:a?"...see less":"...see more"})})]})}function E(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Experience"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(n,{})})]})}function k(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Education"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(n,{})})]})}function $(){return e.jsxs(r.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2",children:[e.jsx(N,{}),e.jsx(S,{}),e.jsx(U,{}),e.jsx(E,{}),e.jsx(k,{}),e.jsx(w,{})]}),e.jsx(b,{})]})}export{$ as default};
