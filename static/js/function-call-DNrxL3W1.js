import{Q as f,d as m,r as x,bE as y,a8 as N,a6 as O,b as c,ag as b,S as B,bi as _,bC as k,Z as I,G as u,a0 as w,aM as $,bF as E,aN as T,aO as F,ad as G,bG as R}from"./index-CCiqnY4g.js";import{B as j}from"./index-KPzygAO1.js";const[v,d]=f("action-bar"),g=Symbol(v),z={placeholder:Boolean,safeAreaInsetBottom:O};var D=m({name:v,props:z,setup(t,{slots:o}){const s=x(),n=y(s,d),{linkChildren:r}=N(g);r();const i=()=>{var l;return c("div",{ref:s,class:[d(),{"van-safe-area-bottom":t.safeAreaInsetBottom}]},[(l=o.default)==null?void 0:l.call(o)])};return()=>t.placeholder?n(i):i()}});const W=b(D),[K,L]=f("action-bar-button"),M=B({},_,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Q=m({name:K,props:M,setup(t,{slots:o}){const s=k(),{parent:n,index:r}=I(g),i=u(()=>{if(n){const e=n.children[r.value-1];return!(e&&"isButton"in e)}}),l=u(()=>{if(n){const e=n.children[r.value+1];return!(e&&"isButton"in e)}});return w({isButton:!0}),()=>{const{type:e,icon:h,text:C,color:P,loading:A,disabled:S}=t;return c(j,{class:L([e,{last:l.value,first:i.value}]),size:"large",type:e,icon:h,color:P,loading:A,disabled:S,onClick:s},{default:()=>[o.default?o.default():C]})}}});const X=b(Q);let p,a;const U=t=>E(t)?t:{message:t};function V(){({instance:a}=T({setup(){const{state:t,toggle:o}=F();return()=>c(R,G(t,{"onUpdate:show":o}),null)}}))}const Y=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let Z=Y();const q=()=>{a&&a.toggle(!1)};function tt(t){if($)return a||V(),t=B({},Z,U(t)),a.open(t),clearTimeout(p),t.duration>0&&(p=setTimeout(q,t.duration)),a}export{X as A,W as a,g as b,tt as s};
