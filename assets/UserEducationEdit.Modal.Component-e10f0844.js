import{u as x,r as c,j as o,V as U,Q as d}from"./index-d0a86cdd.js";import{u as g,b,c as j}from"./useApiUserEducation-14c058ec.js";import{e as D}from"./extractUrlParams-8763e67c.js";import{U as y}from"./UserEducation.Form-60f0f42f.js";import"./LabeledTextInput.Ui.Component-144caf41.js";import"./LabeledDateInput.Ui.Component-8cefcb26.js";function k(){const r=x(),u=D(r),[t,s]=c.useState(null),{data:l}=g(),e=l[u.education_index]||{},p=b(),m=j(),E=a=>{s({...t,[a.target.name]:a.target.value})},f=a=>{a.preventDefault();const n=new FormData;n.append("_method","PATCH");for(const i in t)n.append(i,t[i]);d.promise(m(e.id,n),{pending:"Updating Education",success:"Education updated successfully",error:"Error updating education"})},h=()=>{d.promise(p(e.id),{pending:"Deleting Education",success:"Education deleted successfully",error:"Error deleting education"})};return c.useEffect(()=>{s({...e})},[e]),o.jsx(U,{modalTitle:"Edit Education",size:"small",children:o.jsxs("div",{className:"relative",children:[o.jsx(y,{payload:t,handleSubmit:f,handleInputChange:E}),o.jsx("button",{onClick:h,className:"absolute bottom-5 left-5",children:"delete"})]})})}export{k as default};
