import{r as o,t as h,j as e,P as p,L as j,v,J}from"./index-dd773d74.js";import{m as N,J as L}from"./JobContainer.Component-efe1e64e.js";import"./formatSalary-a9c72987.js";function P(s){const t=o.useRef(null);return o.useCallback(n=>{t.current&&t.current.disconnect(),t.current=new IntersectionObserver(r=>{r[0].isIntersecting&&(s(),t.current.disconnect())},{root:null,rootMargin:"0px",threshold:1}),n&&t.current.observe(n)},[s])}function I(){var l;const{data:s,hasNextPage:t,fetchNextPage:a,isFetching:n,isFetchingNextPage:r}=h(),g=P(()=>a());return e.jsxs(o.Fragment,{children:[e.jsx(p,{title:"Job Listings"}),(l=s==null?void 0:s.pages)==null?void 0:l.map((m,d)=>{var c,u;return e.jsx(o.Fragment,{children:(u=(c=m.data)==null?void 0:c.data)==null?void 0:u.map((i,x,f)=>{const b=x===f.length-1;return e.jsxs("div",{className:"relative",ref:b?g:null,children:[e.jsx("button",{onClick:()=>console.log("clicked"),className:"absolute z-10 p-1 transition-all duration-300 bg-white border rounded-full right-5 top-5 hover:bg-background-200 ",children:e.jsx("img",{src:N,alt:"Menu icon",className:"w-5 h-5"})}),e.jsx(j,{to:`${v}${i.slug}`,children:e.jsx(L,{job:i})})]},i.id)})},d)}),r&&e.jsx(J,{}),!t&&!n&&!r&&e.jsx("div",{className:"w-full mt-5 text-lg font-semibold text-center text-foreground-300",children:"No more jobs available"})]})}export{I as default};
