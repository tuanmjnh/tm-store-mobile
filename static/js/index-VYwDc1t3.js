import{d as b,o,g as m,c as u,as as R,u as B,at as T,G as D,r as v,$ as k,b as s,w as c,e as l,i as F,F as w,j as L,f as N,h as V,s as j,t as z,au as E,ab as O,I as U,C as q,T as H}from"./index-CdWp1Bke.js";import{A as J}from"./index-CN4o6Y_W.js";import{_ as K}from"./tabBarView.vue_vue_type_script_setup_true_lang-gdjfs5wv.js";import{_ as M}from"./image-BoVPK3so.js";const P=["width","height"],Q=b({__name:"svgImage",props:{src:{default:""},width:{default:"50"},height:{default:"50"},fit:{default:""}},setup(h){const t=h;return(i,p)=>{const a=R;return t.src&&t.src.length?(o(),m(a,{key:0,width:t.width,height:t.height,fit:t.fit,src:t.src},null,8,["width","height","fit","src"])):(o(),u("img",{key:1,width:t.width,height:t.height,src:M},null,8,P))}}}),ee=b({__name:"index",setup(h){const t=B(),i=T(),p=D(()=>i.$state),a=v(!1),r=v([{name:k("global.removeConnect"),color:"#f56c6c"}]);i.googleGetAuth();const y=n=>{n.key=="google"&&(n.access_token?(r.value[0]={...n,...r.value[0]},r.value[0].subname=n.name,a.value=!0):E())},C=n=>{n.key=="google"&&i.googleRemoveAuth()};return(n,f)=>{const S=O,x=U,$=q,A=L,g=H,I=J;return o(),u(w,null,[s(A,null,{default:c(()=>[(o(!0),u(w,null,N(l(p),(e,G)=>{var d;return o(),m($,{key:G,title:e.name,label:(d=e.profile)==null?void 0:d.name,"is-link":"",onClick:_=>y(e)},V({_:2},[e.access_token?{name:"right-icon",fn:c(()=>[s(Q,{width:"50",height:"50",fit:"cover",src:e.profile.picture},null,8,["src"])]),key:"1"}:{name:"right-icon",fn:c(()=>[l(t).loading.post?(o(),m(S,{key:0,size:"20",color:"#1989fa"})):(o(),m(x,{key:1,name:"arrow",class:"van-cell__right-icon search-icon"}))]),key:"0"},e.name?{name:"title",fn:c(()=>{var _;return[j(z((_=e.profile)!=null&&_.email?`${e.name} - ${e.profile.email}`:e.name),1)]}),key:"2"}:void 0]),1032,["title","label","onClick"])}),128))]),_:1}),s(K,null,{item:c(()=>[s(g),s(g)]),_:1}),s(I,{show:l(a),"onUpdate:show":f[0]||(f[0]=e=>F(a)?a.value=e:null),"cancel-text":l(k)("global.cancel"),"close-on-click-action":"",actions:l(r),onSelect:C},null,8,["show","cancel-text","actions"])],64)}}});export{ee as default};