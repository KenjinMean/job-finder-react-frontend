import{a as n,E as u,F as r,k as i,G as h,v as p,K as o}from"./index-be2a55c9.js";const y=()=>o.get("/user-contact/show"),l=t=>o.post("/user-contact/update",t),U=()=>{const{authenticatedUser:t}=n();return u({queryKey:["fetchUserContact",t.id],queryFn:async()=>await y(),select:e=>e==null?void 0:e.data,suspense:!0,cacheTime:r(30,"mins"),staleTime:r(10,"mins")})},f=()=>{const t=i(),e=h(),{authenticatedUser:c}=n();return async a=>{t(p.userProfilePage);try{(await l(a)).status===200&&e.refetchQueries(["fetchUserContact",c.id])}catch(s){throw console.error("Error updating user contact:",s),s}}};export{f as a,U as u};
