import{u as J,r,o as N,j as e,P,b as R,g as k,J as I}from"./index-be2a55c9.js";import{J as L}from"./JobContainer.Component-40c35fd9.js";import"./formatSalary-a9c72987.js";const S="/job-finder-react-frontend/assets/option-52e9d5ed.png";function w(n,t){const a=new URLSearchParams(n.search),s={};for(const[o,i]of a.entries())s[o]=i;return s}function U(){var d;const n=J(),t=r.useRef(null),a=w(n),{data:s,hasNextPage:o,refetch:i,fetchNextPage:b,isFetching:g,isFetchingNextPage:l}=N(a),f=()=>{t.current&&o&&!l&&b()};return r.useEffect(()=>{const c=new IntersectionObserver(u=>{u[0].isIntersecting&&f()});return t.current&&c.observe(t.current),()=>{t.current&&c.unobserve(t.current)}},[f]),r.useEffect(()=>{i()},[n]),e.jsxs(r.Fragment,{children:[e.jsx(P,{title:"Job Search Results"}),(d=s==null?void 0:s.pages)==null?void 0:d.map((c,u)=>{var h,x;return e.jsx(r.Fragment,{children:(x=(h=c.data)==null?void 0:h.data)==null?void 0:x.map((m,p,j)=>{const v=p===j.length-1;return e.jsxs("div",{className:"relative",ref:v?t:null,children:[e.jsx("button",{onClick:()=>console.log("clicked"),className:"absolute z-10 p-1 transition-all duration-300 border rounded-full right-5 top-5",children:e.jsx("img",{src:S,alt:"Menu icon",className:"w-5 h-5"})}),e.jsx(R,{to:`${k.jobDetailsPage}${m.slug}`,children:e.jsx(L,{job:m})})]},m.id)})},u)}),l&&e.jsx("div",{className:"pt-5 ",children:e.jsx(I,{})}),!o&&!g&&!l&&e.jsxs("div",{className:"w-full mt-5 text-lg font-semibold text-center text-content-black",children:["No more jobs available for the search: ",a.query]})]})}export{U as default};
