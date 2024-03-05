import{a3 as n,a as c,a6 as C,a7 as o,a8 as u,n as i,a4 as p,a5 as y,Q as a,y as l}from"./index-aa5f6cbb.js";const U=async()=>await n.get("/user-contact"),d=async s=>await n.post("/user-contact",s),h=async s=>await n.post("/user-contact",s),f=()=>{const{authenticatedUser:s}=c();return C({queryKey:["fetchUserContact",s.id],queryFn:async()=>{try{return await U()}catch(e){o(e,e.message,"useApiUserContactFetch")}},select:e=>e==null?void 0:e.data,suspense:!0,cacheTime:u(30,"mins"),staleTime:u(10,"mins"),useErrorBoundary:!0})},S=()=>{const s=i(),e=p(),{authenticatedUser:r}=c();return y(t=>d(t),{onSuccess:t=>{a.success("Contact Created Successfully."),e.refetchQueries(["fetchUserContact",r.id]),s(l.userProfilePage)},onError:t=>{a.error("Sorry, we encountered an issue processing your request. Please try again later."),o(t,t.message,"useApiUserContactStoreMutation")}})},m=()=>{const s=i(),e=p(),{authenticatedUser:r}=c();return y(t=>h(t),{onSuccess:t=>{a.success("Contact updated Successfully."),e.refetchQueries(["fetchUserContact",r.id]),s(l.userProfilePage)},onError:t=>{a.error("Sorry, we encountered an issue processing your request. Please try again later."),o(t,t.message,"useApiUserContactUpdateMutation")}})};export{S as a,m as b,f as u};
