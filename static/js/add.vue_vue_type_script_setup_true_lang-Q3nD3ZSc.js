import{d as C,k as A,u as D,B as F,G,r as v,y as N,g,w as p,$ as l,o as b,b as r,e,s as R,t as E,i as I,M,j}from"./index-CCiqnY4g.js";import{A as z}from"./index-C6BQ7keO.js";import{F as O}from"./index-df1euzin.js";import{E as T,_ as H}from"./MdEditor-BoJ16v4p.js";import{s as i,A as J,a as K}from"./function-call-DNrxL3W1.js";import{F as L}from"./index-BPe9Vb2s.js";import{D as Q}from"./index-DzwtQnUC.js";const oe=C({__name:"add",props:{isDialog:{type:Boolean}},emits:["onClose"],setup(y,{emit:h}){const _=h,w=y,c=A(),k=D(),d=F(),o=G(()=>d.item),m=v(!1),u=v(d.root);N(()=>o.value.parent,n=>{o.value.parent?u.value=d.all.find(a=>a._id==o.value.parent):u.value={...d.root}},{immediate:!0,deep:!0});const x=async n=>{try{m.value=!1,u.value=n}catch(a){a.data&&a.data.message?i({type:"danger",message:l(`error.${a.data.message}`)}):i({type:"danger",message:l(`http.${a.status}`)})}},P=()=>{w.isDialog?_("onClose",!0):M()},q=async()=>{try{o.value.parent=u.value._id,o.value.type=c.meta.module,o.value._id?(await d.update(o.value)).data&&i({type:"success",message:l("success.update")}):(await d.create(o.value)).data&&(i({type:"primary",message:l("success.create")}),d.setItem())}catch(n){n.data&&n.data.message?i({type:"danger",message:l(`error.${n.data.message}`)}):i({type:"danger",message:l(`http.${n.status}`)})}};return(n,a)=>{const s=O,U=j,B=Q,f=z,V=J,$=K,S=L;return b(),g(S,{required:"auto",onSubmit:q},{default:p(()=>[r(U,{inset:""},{default:p(()=>[r(s,{modelValue:e(u).title,"onUpdate:modelValue":a[0]||(a[0]=t=>e(u).title=t),name:"parent",label:e(l)("group.parent"),readonly:"","right-icon":"arrow",placeholder:e(l)("global.inputPlaceholder"),rules:[{required:!0,message:e(l)("error.required")}],onClick:a[1]||(a[1]=t=>m.value=!0)},{input:p(()=>[R(E(e(u)?e(u).title:"Root"),1)]),_:1},8,["modelValue","label","placeholder","rules"]),r(s,{modelValue:e(o).code,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).code=t),name:"code",label:e(l)("global.code"),placeholder:e(l)("global.inputPlaceholder"),rules:[{required:!0,message:e(l)("error.required")}]},null,8,["modelValue","label","placeholder","rules"]),r(s,{modelValue:e(o).title,"onUpdate:modelValue":a[3]||(a[3]=t=>e(o).title=t),name:"title",label:e(l)("global.name"),placeholder:e(l)("global.inputPlaceholder"),rules:[{required:!0,message:e(l)("error.required")}]},null,8,["modelValue","label","placeholder","rules"]),r(s,{modelValue:e(o).level,"onUpdate:modelValue":a[4]||(a[4]=t=>e(o).level=t),name:"level",label:e(l)("global.level"),type:"number",placeholder:e(l)("global.inputPlaceholder"),rules:[{required:!0,message:e(l)("error.required")}]},null,8,["modelValue","label","placeholder","rules"]),r(s,{modelValue:e(o).order,"onUpdate:modelValue":a[5]||(a[5]=t=>e(o).order=t),name:"order",label:e(l)("global.order"),type:"number",placeholder:e(l)("global.inputPlaceholder"),rules:[{required:!0,message:e(l)("error.required")}]},null,8,["modelValue","label","placeholder","rules"]),r(s,{modelValue:e(o).icon,"onUpdate:modelValue":a[6]||(a[6]=t=>e(o).icon=t),name:"icon",label:e(l)("global.icon"),placeholder:e(l)("global.inputPlaceholder")},null,8,["modelValue","label","placeholder"]),r(s,{modelValue:e(o).url,"onUpdate:modelValue":a[7]||(a[7]=t=>e(o).url=t),name:"url",label:e(l)("files.url"),placeholder:e(l)("global.inputPlaceholder")},null,8,["modelValue","label","placeholder"]),r(s,{modelValue:e(o).content,"onUpdate:modelValue":a[9]||(a[9]=t=>e(o).content=t),name:"content",label:e(l)("global.content"),placeholder:e(l)("global.inputPlaceholder")},{input:p(()=>[r(e(T),{modelValue:e(o).content,"onUpdate:modelValue":a[8]||(a[8]=t=>e(o).content=t),preview:!1,theme:e(k).darkMode?"dark":"light"},null,8,["modelValue","theme"])]),_:1},8,["modelValue","label","placeholder"]),r(s,{modelValue:e(o).desc,"onUpdate:modelValue":a[10]||(a[10]=t=>e(o).desc=t),type:"textarea",rows:"1",autosize:"",name:"desc",label:e(l)("global.desc"),placeholder:e(l)("global.inputPlaceholder")},null,8,["modelValue","label","placeholder"])]),_:1}),r(B,{show:e(m),"onUpdate:show":a[11]||(a[11]=t=>I(m)?m.value=t:null),title:e(c).meta.module=="product"?e(l)("group.titleproduct"):e(l)("group.titlenews"),"show-cancel-button":"","cancel-button-text":e(l)("global.back"),placeholder:e(l)("global.inputPlaceholder"),"show-confirm-button":!1},{default:p(()=>[r(H,{flag:1,text:"",type:e(c).meta.module,onOnSelect:x},null,8,["type"])]),_:1},8,["show","title","cancel-button-text","placeholder"]),r($,{placeholder:""},{default:p(()=>[r(f,{icon:"arrow-left",onClick:P}),r(f),e(o)._id?(b(),g(V,{key:0,type:"success","native-type":"submit",text:e(l)("global.update")},null,8,["text"])):(b(),g(V,{key:1,type:"primary","native-type":"submit",text:e(l)("global.add")},null,8,["text"]))]),_:1})]),_:1})}}});export{oe as _};
