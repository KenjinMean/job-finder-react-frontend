import{A as h,af as f,F as l,r as p,j as c,G as b}from"./index-65174fac.js";import{U as y}from"./UserContactEdit.Form-73539a2c.js";function d(n,e){const t=/^\+(\d+)-(\d+)-(\d+)-(\d+)$/,[,s,...r]=e.match(t),i=r.join("-");if(n==="countryCode")return`+${s}`;if(n==="phoneNumber")return i;throw new Error('Invalid parameter. Please specify "countryCode" or "phoneNumber".')}function U({setInputChanged:n}){const{data:e}=h(),{isLoading:t,mutate:s}=f(),r=l({defaultValues:{city:(e==null?void 0:e.city)||"",phone:(e==null?void 0:e.phone)||"",country:(e==null?void 0:e.country)||"",province:(e==null?void 0:e.province)||"",zip_code:(e==null?void 0:e.zip_code)||"",birth_date:(e==null?void 0:e.birth_date)||"",country_code:e&&e.phone?d("countryCode",e.phone):void 0,phone_number:e&&e.phone?d("phoneNumber",e.phone):void 0},mode:"onTouched"}),{formState:{isDirty:i}}=r,m=o=>{const a=`${o.country_code}-${o.phone_number}`;o.phone=a,delete o.country_code,delete o.phone_number;const u={...o,_method:"PATCH"};s(u)};return p.useEffect(()=>{n(i)},[i]),c.jsxs(p.Fragment,{children:[c.jsx(y,{name:"contactForm",form:r,isSubmitting:t,handleContactSubmit:m}),c.jsx("div",{className:"flex justify-end p-5",children:c.jsx(b,{form:"contactForm",text:"Update",loadingText:"Updating",isSubmitting:t})})]})}export{U as default};
