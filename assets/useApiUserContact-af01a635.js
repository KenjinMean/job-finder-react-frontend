import{a9 as n,p as o,ac as U,ad as c,ae as i,m as p,aa as y,ab as l,Q as r,n as C}from"./index-5721c188.js";const u="/users/user-contact",d=async()=>await n.get(`${u}`),g=async t=>await n.post(`${u}`,t),h=async t=>await n.post(`${u}`,t),m=()=>{const{user:t}=o();return U({queryKey:["fetchUserContact",t.id],queryFn:async()=>{try{return await d()}catch(e){c(e,e.message,"useApiUserContactFetch")}},select:e=>e==null?void 0:e.data,suspense:!0,cacheTime:i(30,"mins"),staleTime:i(10,"mins"),useErrorBoundary:!0})},S=()=>{const t=p(),e=y(),{user:a}=o();return l(s=>g(s),{onSuccess:s=>{r.success("Contact Created Successfully."),e.refetchQueries(["fetchUserContact",a.id]),t(C.userProfilePage)},onError:s=>{r.error("Sorry, we encountered an issue processing your request. Please try again later."),c(s,s.message,"useApiUserContactStoreMutation")}})},q=()=>{const t=p(),e=y(),{user:a}=o();return l(s=>h(s),{onSuccess:s=>{r.success("Contact updated Successfully."),e.refetchQueries(["fetchUserContact",a.id]),t(C.userProfilePage)},onError:s=>{r.error("Sorry, we encountered an issue processing your request. Please try again later."),c(s,s.message,"useApiUserContactUpdateMutation")}})};export{S as a,q as b,m as u};