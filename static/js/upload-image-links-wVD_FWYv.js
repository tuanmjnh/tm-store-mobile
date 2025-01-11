import{d as C,r as h,y,o as i,c as u,a as t,aH as b,bS as w,e as x,i as k,s as _,t as v}from"./index-CCiqnY4g.js";const V=s=>{try{if(!s)return null;const e=s.replace(/\.[^/.]+$/,"");return e||null}catch{return null}},E=s=>{const e=/[A-Za-z]+:\/\/[A-Za-z0-9-]+.[A-Za-z0-9-:%&;?#/.=_]+/g;return s.match(e)},Z={class:"px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800"},B=["placeholder"],N={class:"flex justify-center"},S={key:0,disabled:"",type:"button",class:"w-full items-center text-center content-center px-3 py-3 text-xs font-medium text-white bg-sky-500 dark:bg-sky-600"},M=t("svg",{"aria-hidden":"true",role:"status",class:"inline w-4 h-4 me-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})],-1),z={class:"mr-2"},D=C({__name:"upload-image-links",props:{modelValue:{default:null},txtPlaceholder:{default:"Input links"}},emits:["onSubmit","update:modelValue"],setup(s,{emit:e}){const c=s,d=e,r=h(!1),a=h("");y(()=>a.value,l=>{var n;if(l){const o=E(l);a.value=o.join(`
`);const m=[];for(const p of o){const f=(n=V(p))==null?void 0:n.split("/");m.pushIfNotExist({src:p,name:f[f.length-1]})}d("update:modelValue",m)}},{immediate:!0,deep:!0});const g=async()=>{c.modelValue&&c.modelValue.length&&(r.value=!0,a.value="",d("onSubmit",!0)),r.value=!1};return(l,n)=>(i(),u("form",null,[t("div",Z,[b(t("textarea",{rows:"15","onUpdate:modelValue":n[0]||(n[0]=o=>k(a)?a.value=o:null),class:"w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400",placeholder:l.txtPlaceholder,required:""},null,8,B),[[w,x(a)]])]),t("div",N,[x(r)?(i(),u("button",S,[M,_(" Loading... ")])):(i(),u("button",{key:1,type:"button",onClick:g,class:"w-full items-center text-center content-center px-3 py-3 text-xs font-medium text-white bg-sky-500 dark:bg-sky-600"},[t("span",z,v(l.$t("files.uploadData")),1)]))])]))}});export{D as default};
