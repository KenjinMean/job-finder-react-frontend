import{t as i,i as a,v as c,w as k,a as u,x as n,y as o,p as l}from"./index-f5de0b2b.js";const d=s=>n.get(`/search-skills?keyword=${s}`),y=s=>n.post(`/add-skill?skill_id=${s}`),h=()=>n.get("/get-user-skills"),p=(s,t)=>i({queryKey:["searchskill"],queryFn:async()=>await d(s),select:e=>{var r;return(r=e==null?void 0:e.data)==null?void 0:r.skills}}),m=()=>{const s=a(),t=c();return k(y,{onSuccess:async()=>{t.invalidateQueries("searchskill"),s(l.userAddSkillSuccessPage)},onError:e=>{const r=e.response.data.error||"An error occurred";s(`${l.userAddSkillErrorPage}?error=${encodeURIComponent(r)}`)}})},U=()=>{const{authenticatedUser:s}=u(),t=c();return async e=>{try{(await n.delete(`/remove-skill?skill_id=${e}`)).status===200&&t.refetchQueries(["fetchUserSkills",s.id])}catch(r){throw console.error("Error removing skill:",r),r}}},g=s=>{const{authenticatedUser:t}=u();return i({queryKey:["fetchUserSkills",t.id],queryFn:async()=>await h(),select:e=>{var r;return(r=e==null?void 0:e.data)==null?void 0:r.skills},suspense:!0,cacheTime:o(30,"mins"),staleTime:o(10,"mins")})};export{p as a,m as b,U as c,g as u};