import{p as h,j as e,r,P as J,J as b}from"./index-8f5fec83.js";import{u as j,J as F,E as L}from"./EndOfListIndicator.Ui.Component-571d671e.js";import"./TagList.Ui.Component-05727f4c.js";function E(){var a;const{data:t,isFetching:l,hasNextPage:c,fetchNextPage:m,isFetchingNextPage:s}=h(),p=j(()=>m());return e.jsxs(r.Fragment,{children:[e.jsx(J,{title:"Job Listings"}),e.jsxs("section",{className:"flex flex-col gap-5 sm:gap-3",children:[(a=t==null?void 0:t.pages)==null?void 0:a.map((x,g)=>{var n,i;return e.jsx(r.Fragment,{children:(i=(n=x.data)==null?void 0:n.data)==null?void 0:i.map((o,f,d)=>{const u=f===d.length-1;return e.jsx(F,{job:o,ref:u?p:null},o.id)})},g)}),s&&e.jsx(b,{}),!c&&!l&&!s&&e.jsx(L,{message:"No more jobs available"})]})]})}export{E as default};
