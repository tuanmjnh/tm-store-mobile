import{aq as l,ar as n}from"./index-CCiqnY4g.js";const c={group:null,username:null,password:null,fullName:null,email:null,phone:null,personNumber:null,region:null,avatar:null,note:"",dateBirth:new Date,gender:null,address:null,roles:[],verified:!1,enable:!0,lastLogin:null,lastChangePass:null,created:{at:null,by:null,ip:null}},r="users",h=l("userStore",{persist:!1,state:()=>({items:[],item:JSON.parse(JSON.stringify(c))}),getters:{},actions:{async getAll(s){try{const t=await n.axiosInstance.get(`/${r}/all`,{params:s});return this.all=t.data,t}catch(t){throw t}},async getItems(s){try{const t=await n.axiosInstance.get(`/${r}`,{params:s});return this.items=t.data,this.rowsNumber=t.rowsNumber,t}catch(t){throw t}},async getItem(s){try{const t=await n.axiosInstance.get(`/${r}/${s.id}`,{params:s});return this.item=t.data,t}catch(t){throw t}},async create(s){try{return await n.axiosInstance.post(`/${r}`,s)}catch(t){throw t}},async update(s){try{return await n.axiosInstance.put(`/${r}`,s)}catch(t){throw t}},async updateFlag(s){try{return await n.axiosInstance.patch(`/${r}`,s)}catch(t){throw t}},async setItem(s){this.item=s?{...s}:JSON.parse(JSON.stringify(c))},async addItems(s,t){try{t?Array.isArray(s)?this.items.concat(s):this.items.push(s):Array.isArray(s)?this.items.concat(s):this.items.push(s)}catch(e){throw e}},async updateItems(s,t){try{if(Array.isArray(s))s.forEach(e=>{if(t){const i=t.findIndex(a=>a._id===e._id);i>-1&&t.splice(i,1,e)}else{const i=this.items.findIndex(a=>a._id===e._id);i>-1&&this.items.splice(i,1,e)}});else{const e=this.items.findIndex(i=>i._id===s._id);e>-1&&this.items.splice(e,1,s)}}catch(e){throw e}},async removeItems(s,t){try{if(Array.isArray(s))s.forEach(e=>{if(t){const i=t.findIndex(a=>a._id===e);i>-1&&t.splice(i,1)}else{const i=this.items.findIndex(a=>a._id===e);i>-1&&this.items.splice(i,1)}});else if(t){const e=t.findIndex(i=>i._id===s);e>-1&&t.splice(e,1)}else{const e=this.items.findIndex(i=>i._id===s);e>-1&&this.items.splice(e,1)}}catch(e){throw e}},clear(){this.$reset()}}});export{h as u};
