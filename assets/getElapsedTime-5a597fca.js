function s(a){return a?parseFloat(a).toLocaleString():""}const c=a=>{const o=new Date,n=new Date(a),e=Math.floor((o-n)/1e3);let r,t;switch(!0){case e<60:r="second",t=e;break;case e<3600:r="minute",t=Math.floor(e/60);break;case e<86400:r="hour",t=Math.floor(e/3600);break;case e<31536e3:r="day",t=Math.floor(e/86400);break;default:r="year",t=Math.floor(e/31536e3);break}return`${t} ${r}${t!==1?"s":""} ago`};export{s as f,c as g};