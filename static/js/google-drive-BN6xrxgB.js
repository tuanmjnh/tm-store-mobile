import{d as P,r as i,o as p,c as h,a as l,e as t,b as s,aH as y,aI as b,F as w,f as U,v as k,w as x,i as j,I as z,C as $}from"./index-Bphj8G7B.js";import{A as R}from"./index-8P-keRm9.js";import{_ as Z}from"./image-BoVPK3so.js";import{G as Y}from"./drive-gapi-JynX-JZN.js";import{l as F}from"./tmViewBox.vue_vue_type_script_setup_true_lang-7OvNqxrr.js";import{d as q}from"./index-DbHcLYuo.js";import{_ as H}from"./index.vue_vue_type_style_index_0_lang-e0dQWe1M.js";import"./index-COofbABC.js";import"./index-CCkMhh6d.js";import"./function-call-CNR6nuk-.js";const K={class:"fixed right-0 left-0 top-0"},O={class:"flex flex-none p-2"},W=l("span",null,"Drive",-1),J=l("div",{class:"flex h-6 grow"},null,-1),Q={class:"flex flex-none h-6 w-12 items-center justify-center"},X=l("hr",{class:"border-gray-300 dark:border-gray-100"},null,-1),ee={class:"overscroll-none overflow-auto mt-5 min-h-60",style:{height:"calc(100vh - 46px)"}},le={id:"drive-gallery",class:"m-1 flex flex-wrap md:-m-2 mb-10"},te={class:"relative w-full h-48 p-1 md:p-2"},oe=l("div",{class:"absolute inset-0 bg-neutral-200 animate-pulse w-full h-full min-h-24"},null,-1),se=["data-src","onClick"],ae={key:0,class:"absolute items-center block p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800/80 dark:border-gray-800 dark:hover:bg-gray-700 top-0 left-0 h-full w-full z-10"},ne=l("div",{role:"status",class:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"},[l("svg",{"aria-hidden":"true",class:"w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[l("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]),l("span",{class:"sr-only"},"Loading...")],-1),ie=[ne],re=l("div",{class:"p-2 mb-3"},[l("input",{type:"text",id:"first_name",class:"bg-gray-50 border border-gray-300 text-surface-600 dark:text-white/70 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"New folder"})],-1),be=P({__name:"google-drive",props:{modelValue:{default:null},selected:{default:void 0},parent:{default:"1DFDqKNAf2pCR_PFu3iS1gtMyGRWgf8jV"},imageError:{default:"/src/assets/svg/image.svg"},height:{default:"h-28"},rounded:{default:"rounded-lg"},border:{default:"border-2 border-solid"},multiple:{type:Boolean,default:!1},isDelete:{type:Boolean,default:!0},isTooltip:{type:Boolean,default:!1},thumbnailView:{type:Boolean,default:!1},thumbnailSize:{default:"w128"},isTrashed:{type:Boolean,default:!1},isPreview:{type:Boolean,default:!0},titleDelete:{default:"Are you sure you want to delete this record?"},lblAdd:{default:"Add"},lblUpdate:{default:"Update"},lblDelete:{default:"Delete"},lblCancel:{default:"Cancel"}},emits:["onSelect","onPreview","onDelete","onDeleted","onClose","update:selected","update:modelValue"],setup(D,{emit:I}){const B=D,C=I;i("folders");const r=i({item:null,index:-1}),d=i([]),c=i(),u=i(!1),f=i(!1),m=i(!1),a=new Y({root:B.parent}),E=async()=>{C("onClose")};(async()=>{u.value=!0,d.value=await a.GetFolders(),c.value=await a.GetFiles({folderId:d.value&&d.value.length?d.value[0].id:null,mimeType:a.MIME_TYPE.image}),F(),u.value=!1})();const G=async e=>{u.value=!0,f.value=!1,e.children||(e.children=await a.GetFolders({folderId:e.id})),await q(300),c.value=await a.GetFiles({folderId:e.id,mimeType:a.MIME_TYPE.image}),F(),u.value=!1},A=async e=>{r.value.item=e,m.value=!0},M=async e=>{m.value=!1,r.value.item=null},S=async e=>{console.log(e)},V=async e=>{const o=await a.CreateFolder({name:"test3"});o&&(e.children?e.children.push(o):e.children=[o])},L=async e=>{console.log(e)},T=async e=>{C("onSelect",e)};return(e,o)=>{const v=z,g=$,N=R;return p(),h(w,null,[l("div",K,[l("div",O,[l("div",{class:"h-6 w-24 items-center justify-center pl-5",onClick:o[0]||(o[0]=n=>f.value=!t(f))},[s(v,{name:"apps-o",class:"pr-1"}),W]),J,l("div",Q,[s(v,{name:"cross",onClick:E})])]),X]),l("div",ee,[y(l("div",le,[t(c)&&t(c).files?(p(!0),h(w,{key:0},U(t(c).files,(n,_)=>(p(),h("div",{key:_,class:"flex w-1/2 min-h-48 flex-wrap"},[l("div",te,[oe,l("img",{class:"lazy-image h-full w-full object-cover transition-opacity duration-300 opacity-0 rounded-lg","data-src":n.thumbnailLink,src:Z,onerror:"this.src='/src/assets/svg/image.svg'",onClick:ce=>T(n)},null,8,se)])]))),128)):k("",!0)],512),[[b,!t(f)]]),y(s(H,{color:"blue",items:t(d),dense:"","open-all":"",onOnClick:G,class:"overscroll-none overflow-auto"},{append:x(n=>[s(v,{id:"edit-folder",name:"records-o",onClick:_=>A(n.item)},null,8,["onClick"])]),_:1},8,["items"]),[[b,t(f)]])]),t(u)?(p(),h("div",ae,ie)):k("",!0),s(N,{show:t(m),"onUpdate:show":o[1]||(o[1]=n=>j(m)?m.value=n:null),title:t(r)&&t(r).item?t(r).item.name:"","cancel-text":e.lblCancel,"close-on-click-action":"",onClose:M},{default:x(()=>[re,s(g,{title:e.lblUpdate,"is-link":"",onClick:S},null,8,["title"]),s(g,{title:e.lblAdd,"is-link":"",onClick:V},null,8,["title"]),s(g,{title:e.lblDelete,"is-link":"",onClick:L},null,8,["title"])]),_:1},8,["show","title","cancel-text"])],64)}}});export{be as default};