import{Q as G,d as x,a8 as E,y,a0 as _,al as B,b,V,a7 as R,X as w,am as S,S as z,W as A,a6 as O,r as F,G as v,I as K,an as C,Z as N,ac as U,ad as X,ag as j}from"./index-CCiqnY4g.js";const[D,q]=G("checkbox-group"),H={max:V,shape:R("round"),disabled:Boolean,iconSize:V,direction:String,modelValue:w(),checkedColor:String},I=Symbol(D);var J=x({name:D,props:H,emits:["change","update:modelValue"],setup(e,{emit:i,slots:u}){const{children:c,linkChildren:t}=E(I),l=n=>i("update:modelValue",n),h=(n={})=>{typeof n=="boolean"&&(n={checked:n});const{checked:d,skipDisabled:m}=n,o=c.filter(a=>a.props.bindGroup?a.props.disabled&&m?a.checked.value:d??!a.checked.value:!1).map(a=>a.name);l(o)};return y(()=>e.modelValue,n=>i("change",n)),_({toggleAll:h}),B(()=>e.modelValue),t({props:e,updateValue:l}),()=>{var n;return b("div",{class:q([e.direction])},[(n=u.default)==null?void 0:n.call(u)])}}});const $={name:S,disabled:Boolean,iconSize:V,modelValue:S,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var L=x({props:z({},$,{bem:A(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:O,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:i,slots:u}){const c=F(),t=a=>{if(e.parent&&e.bindGroup)return e.parent.props[a]},l=v(()=>{if(e.parent&&e.bindGroup){const a=t("disabled")||e.disabled;if(e.role==="checkbox"){const s=t("modelValue").length,r=t("max"),k=r&&s>=+r;return a||k&&!e.checked}return a}return e.disabled}),h=v(()=>t("direction")),n=v(()=>{const a=e.checkedColor||t("checkedColor");if(a&&e.checked&&!l.value)return{borderColor:a,backgroundColor:a}}),d=v(()=>e.shape||t("shape")||"round"),m=a=>{const{target:s}=a,r=c.value,k=r===s||(r==null?void 0:r.contains(s));!l.value&&(k||!e.labelDisabled)&&i("toggle"),i("click",a)},f=()=>{var a,s;const{bem:r,checked:k,indeterminate:P}=e,g=e.iconSize||t("iconSize");return b("div",{ref:c,class:r("icon",[d.value,{disabled:l.value,checked:k,indeterminate:P}]),style:d.value!=="dot"?{fontSize:C(g)}:{width:C(g),height:C(g),borderColor:(a=n.value)==null?void 0:a.borderColor}},[u.icon?u.icon({checked:k,disabled:l.value}):d.value!=="dot"?b(K,{name:P?"minus":"success",style:n.value},null):b("div",{class:r("icon--dot__icon"),style:{backgroundColor:(s=n.value)==null?void 0:s.backgroundColor}},null)])},o=()=>{const{checked:a}=e;if(u.default)return b("span",{class:e.bem("label",[e.labelPosition,{disabled:l.value}])},[u.default({checked:a,disabled:l.value})])};return()=>{const a=e.labelPosition==="left"?[o(),f()]:[f(),o()];return b("div",{role:e.role,class:e.bem([{disabled:l.value,"label-disabled":e.labelDisabled},h.value]),tabindex:l.value?void 0:0,"aria-checked":e.checked,onClick:m},[a])}}});const[Q,T]=G("checkbox"),W=z({},$,{shape:String,bindGroup:O,indeterminate:{type:Boolean,default:null}});var Y=x({name:Q,props:W,emits:["change","update:modelValue"],setup(e,{emit:i,slots:u}){const{parent:c}=N(I),t=n=>{const{name:d}=e,{max:m,modelValue:f}=c.props,o=f.slice();if(n)!(m&&o.length>=+m)&&!o.includes(d)&&(o.push(d),e.bindGroup&&c.updateValue(o));else{const a=o.indexOf(d);a!==-1&&(o.splice(a,1),e.bindGroup&&c.updateValue(o))}},l=v(()=>c&&e.bindGroup?c.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),h=(n=!l.value)=>{c&&e.bindGroup?t(n):i("update:modelValue",n),e.indeterminate!==null&&i("change",n)};return y(()=>e.modelValue,n=>{e.indeterminate===null&&i("change",n)}),_({toggle:h,props:e,checked:l}),B(()=>e.modelValue),()=>b(L,X({bem:T,role:"checkbox",parent:c,checked:l.value,onToggle:h},e),U(u,["default","icon"]))}});const M=j(Y);export{M as C,J as s};
