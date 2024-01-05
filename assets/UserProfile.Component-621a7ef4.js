import{j as e,L as f,I as g,o as v,p as n,q as a,s as i,t as b,A as j,r as c,U as w,O as N}from"./index-5e69d25d.js";import{p as h}from"./index-43c0e1d5.js";import U from"./UserCoverImageView.Modal.Component-7894df2e.js";import C from"./UserProfileImageView.Modal.Component-a023612b.js";import O from"./UserInfoEdit.Modal.Component-8925ae4c.js";import{u as y,U as E}from"./UserAddSkill.Modal.Component-5e7987c6.js";import{L as P}from"./LinkAdd.Ui.Component-9b4ccdb8.js";import"./LoadingSpinnder.Util-868392ae.js";function o({to:s,className:l,...t}){const{...r}=t;return e.jsx(f,{className:`p-2 transition-all rounded-full hover:bg-slate-300 ${l}`,to:s,...r,children:e.jsx("img",{className:"block w-5 h-5",src:h.path,alt:`Edit Icon. Attribution: ${h.attribution}`})})}function p({imagePathUrl:s,className:l,to:t="",alt:r=""}){return e.jsx(f,{to:t,className:l,children:e.jsx(g,{imageUrl:s,alt:r})})}function S(){const{data:s}=v(),l=n(a.userProfileImagePreviewOverlay),t=n(a.userCoverImagePreviewOverlay),r=n(a.userInfoEditOverlay);return e.jsxs("section",{className:"relative w-full overflow-hidden sm:rounded-lg bg-slate-200",children:[e.jsx(p,{imagePathUrl:s==null?void 0:s.cover_image,to:i(a.userCoverImagePreviewOverlay),className:"block w-full h-36 sm:h-48 "}),e.jsx(p,{imagePathUrl:s==null?void 0:s.profile_image,to:i(a.userProfileImagePreviewOverlay),className:"absolute z-10 w-32 h-32 overflow-hidden border-4 rounded-full sm:w-40 sm:h-40 top-20 left-5 border-slate-200"}),e.jsxs("div",{className:"relative p-5 border",children:[e.jsx("div",{className:"flex gap-1 mt-10 text-xl font-bold",children:e.jsx("p",{children:`${s==null?void 0:s.first_name} 
              ${s.additional_name?`(${s.additional_name})`:""}
              ${s==null?void 0:s.last_name}`})}),e.jsx("p",{className:"max-w-xl",children:s==null?void 0:s.headline}),e.jsx("span",{children:s==null?void 0:s.location}),e.jsx(o,{className:"absolute right-5 top-5",to:i(a.userInfoEditOverlay),preventScrollReset:!0})]}),l&&e.jsx(C,{}),t&&e.jsx(U,{}),r&&e.jsx(O,{})]})}function A(){const{data:s}=y(),l=n(a.userSkillAddOverlay);return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Skills"}),e.jsx("ul",{className:"flex flex-col",children:s==null?void 0:s.map(t=>e.jsx("li",{className:"flex justify-between",children:e.jsx("span",{className:"rounded-md",children:t.name})},t.id))}),e.jsxs("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:[e.jsx(P,{to:i(a.userSkillAddOverlay),preventScrollReset:!0}),e.jsx(o,{to:b.userEditSkillPage})]}),e.jsx(j,{initial:!1,mode:"wait",children:l&&e.jsx(E,{})})]})}function k(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Contact"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(o,{})})]})}const I=s=>{const[l,t]=c.useState(!1),[r,m]=c.useState(!1);return c.useLayoutEffect(()=>{const{offsetHeight:d,scrollHeight:u}=s.current||{};d&&u&&d<u?t(!0):t(!1)},[s]),{isTruncated:l,isShowingMore:r,toggleIsShowingMore:()=>m(d=>!d)}};function M(){const{data:s}=v(),l=c.useRef(null),{isTruncated:t,isShowingMore:r,toggleIsShowingMore:m}=I(l),x=n(a.userAboutEditOverlay);return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"About"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(o,{to:i(a.userAboutEditOverlay),preventScrollReset:!0})}),e.jsx("p",{ref:l,className:`${!r&&"line-clamp-3"}`,children:s.about}),e.jsx("div",{className:"flex flex-row-reverse mt-2",children:t&&e.jsx("button",{onClick:m,className:"text-sm text-slate-600 hover:text-indigo-500",children:r?"...see less":"...see more"})}),e.jsx(j,{mode:"wait",children:x&&e.jsx(w,{})})]})}function L(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Experience"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(o,{})})]})}function $(){return e.jsxs("section",{className:"relative w-full p-5 overflow-hidden rounded-lg bg-slate-200",children:[e.jsx("h2",{className:"text-2xl font-semibold",children:"Education"}),e.jsx("div",{className:"absolute flex items-center gap-1 right-5 top-5",children:e.jsx(o,{})})]})}function D(){return e.jsxs(c.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-1 sm:gap-2",children:[e.jsx(S,{}),e.jsx(M,{}),e.jsx(k,{}),e.jsx(L,{}),e.jsx($,{}),e.jsx(A,{})]}),e.jsx(N,{})]})}export{D as default};
