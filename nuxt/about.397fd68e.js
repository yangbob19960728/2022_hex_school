import{u as E,r as P,a as F,b as O,w as M,d as C,g as $,e as H,f as K,o as N,c as R,h as B,t as z}from"./entry.df3d7c6d.js";const S=()=>null;function T(...i){var h,m,_,g,w,D,v,b,l;const c=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(c);let[a,o,e={}]=i;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(h=e.server)!=null?h:!0,e.default=(m=e.default)!=null?m:S,e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(g=(_=e.lazy)!=null?_:e.defer)!=null?g:!1,e.initialCache=(w=e.initialCache)!=null?w:!0,e.immediate=(D=e.immediate)!=null?D:!0;const t=E(),f=()=>(t.isHydrating||e.initialCache)&&t.payload.data[a]!==void 0;t._asyncData[a]||(t._asyncData[a]={data:P(f()?t.payload.data[a]:(b=(v=e.default)==null?void 0:v.call(e))!=null?b:null),pending:P(!f()),error:P((l=t.payload._errors[a])!=null?l:null)});const n={...t._asyncData[a]};n.refresh=n.execute=(u={})=>{if(t._asyncDataPromises[a]){if(u.dedupe===!1)return t._asyncDataPromises[a];t._asyncDataPromises[a].cancelled=!0}if(u._initial&&f())return t.payload.data[a];n.pending.value=!0;const s=new Promise((r,d)=>{try{r(o(t))}catch(x){d(x)}}).then(r=>{if(s.cancelled)return t._asyncDataPromises[a];e.transform&&(r=e.transform(r)),e.pick&&(r=j(r,e.pick)),n.data.value=r,n.error.value=null}).catch(r=>{var d,x;if(s.cancelled)return t._asyncDataPromises[a];n.error.value=r,n.data.value=C((x=(d=e.default)==null?void 0:d.call(e))!=null?x:null)}).finally(()=>{s.cancelled||(n.pending.value=!1,t.payload.data[a]=n.data.value,n.error.value&&(t.payload._errors[a]=!0),delete t._asyncDataPromises[a])});return t._asyncDataPromises[a]=s,t._asyncDataPromises[a]};const y=()=>n.refresh({_initial:!0}),k=e.server!==!1&&t.payload.serverRendered;{const u=$();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const r=u._nuxtOnBeforeMountCbs;u&&(F(()=>{r.forEach(d=>{d()}),r.splice(0,r.length)}),O(()=>r.splice(0,r.length)))}k&&t.isHydrating&&a in t.payload.data?n.pending.value=!1:u&&(t.payload.serverRendered&&t.isHydrating||e.lazy)&&e.immediate?u._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&M(e.watch,()=>n.refresh());const s=t.hook("app:data:refresh",r=>{if(!r||r.includes(a))return n.refresh()});u&&O(s)}const p=Promise.resolve(t._asyncDataPromises[a]).then(()=>n);return Object.assign(p,n),p}function j(i,c){const a={};for(const o of c)a[o]=i[o];return a}function A(i,c,a){const[o={},e]=typeof c=="string"?[{},c]:[c,a],t=o.key||e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+t);if(!i)throw new Error("[nuxt] [useFetch] request is missing.");const f="$f"+t,n=H(()=>{let s=i;return typeof s=="function"&&(s=s()),C(s)}),{server:y,lazy:k,default:p,transform:h,pick:m,watch:_,initialCache:g,immediate:w,...D}=o,v={...D,cache:typeof o.cache=="boolean"?void 0:o.cache},b={server:y,lazy:k,default:p,transform:h,pick:m,initialCache:g,immediate:w,watch:[n,..._||[]]};let l;return T(f,()=>{var s;return(s=l==null?void 0:l.abort)==null||s.call(l),l=typeof AbortController<"u"?new AbortController:{},$fetch(n.value,{signal:l.signal,...v})},b)}const I={__name:"about",async setup(i){let c,a;const[{data:o},{data:e}]=([c,a]=K(()=>Promise.all([A("https://api.github.com/orgs/nuxt","$c6wy8KmN8o"),A("https://api.github.com/orgs/nuxt/repos","$q4a2swbhfn")])),c=await c,a(),c);return(t,f)=>(N(),R("section",null,[B("h1",null,z(C(o).login),1),B("p",null,z(C(o).description),1)]))}};export{I as default};