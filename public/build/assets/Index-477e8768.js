import{A as f,x as h,o as i,f as n,a,u as p,w as d,F as c,Z as _,b as t,e as b,i as v,B as y,C as w,O as k,t as l,n as C}from"./app-160f28a5.js";import{_ as M}from"./AuthenticatedLayout-eec2a42f.js";import"./ApplicationLogo-6efbfde1.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=t("h2",{class:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"},"Todo list",-1),z={class:"py-12"},T={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},j={class:"flow-root mt-8"},A={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},D={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},S={class:"relative"},V={class:"p-5 bg-white rounded"},E=t("div",{class:"text-center"},[t("svg",{class:"w-12 h-12 mx-auto text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 48 48","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"})]),t("h2",{class:"mt-2 text-base font-semibold leading-6 text-gray-900"},"Todos")],-1),F=["onSubmit"],H=t("label",{for:"title",class:"sr-only"},"Title",-1),I={class:"grid grid-cols-1 sm:flex-auto"},N=t("div",{class:"col-start-1 col-end-3 row-start-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 peer-focus:ring-2 peer-focus:ring-indigo-600","aria-hidden":"true"},null,-1),O=t("div",{class:"flex items-center col-start-2 row-start-1"},[t("span",{class:"flex-none w-px h-4 bg-gray-200","aria-hidden":"true"}),t("label",{for:"role",class:"sr-only"},"Role"),t("select",{id:"role",name:"role",class:"rounded-md border-0 bg-transparent py-1.5 pl-4 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},[t("option",null,"Can edit"),t("option",null,"Can view")])],-1),R=t("div",{class:"mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0"},[t("button",{type:"submit",class:"block w-full px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Add todo")],-1),L={class:"mt-10"},P=t("h3",{class:"text-sm font-medium text-gray-500"},"Recommended team members",-1),U={role:"list",class:"grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3"},Z={type:"button",class:"flex items-center justify-between w-full p-2 space-x-3 text-left border border-gray-300 rounded shadow-sm group hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},$={class:"flex items-center flex-1 min-w-0 space-x-3"},q={class:"flex-1 block min-w-0"},G={contenteditable:"",class:"block text-sm font-medium text-gray-900 truncate"},J={class:"block p-1 my-2 text-sm font-medium text-gray-900 border rounded"},K=t("span",{class:"inline-flex items-center justify-center flex-shrink-0 w-10 h-10"},[t("svg",{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])],-1),tt={__name:"Index",props:["todos"],setup(m){const o=f({title:null,note:null});h(null);const u=s=>{if(s==="Canceled")return"bg-red-100 text-red-700";if(s==="Pending")return"bg-blue-100 text-blue-700";if(s==="Inprogress")return"bg-yellow-100 text-yellow-700";if(s==="Done")return"bg-green-100 text-green -700"},g=()=>{k.post("/todos",o),o.title=null};return(s,r)=>(i(),n(c,null,[a(p(_),{title:"Todo list"}),a(M,null,{header:d(()=>[B]),default:d(()=>[t("div",z,[t("div",T,[t("div",j,[t("div",A,[t("div",D,[t("div",S,[t("div",V,[t("div",null,[E,t("form",{class:"mt-6 sm:flex sm:items-center",onSubmit:b(g,["prevent"])},[H,t("div",I,[v(t("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>o.title=e),type:"text",name:"title",id:"title",class:"peer relative col-start-1 row-start-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"Enter todo title"},null,512),[[y,o.title]]),N,O]),R],40,F)]),t("div",L,[P,t("ul",U,[(i(!0),n(c,null,w(m.todos,(e,x)=>(i(),n("li",{key:x},[t("button",Z,[t("span",$,[t("span",q,[t("span",G,l(e.title),1),t("span",J,l(e.note),1),t("span",{class:C([u(e.status),"block px-3 text-sm font-medium truncate rounded"])},l(e.status),3)])]),K])]))),128))])])])])])])])])])]),_:1})],64))}};export{tt as default};