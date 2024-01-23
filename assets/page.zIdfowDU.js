import{_ as m}from"./nuxt-link.QgrsIV9K.js";import u from"./Icon.yXOQFF3k.js";import{k as p,y as b,K as h,o as _,c as r,a as t,b as e,w as s,d as c,_ as f,J as g}from"./entry.pl19-ve-.js";import"./index.P7jyS_57.js";const v={class:"flex items-center"},k=t("div",{class:"bg-accent-600 w-6 h-6 text-white rounded-lg text-center text-sm"},"/",-1),w=t("span",{class:"font-bold text-xl"},[c("huynam"),t("span",{class:"text-accent-600"},"boz")],-1),y={class:"max-md:hidden lg:flex mt-1 ml-5 gap-5"},$=t("span",null,"Projects",-1),z=t("span",null,"Blog",-1),j=t("span",null,"Contact",-1),L=t("div",null,null,-1),N={class:"flex items-center gap-4"},B={class:"ml-3 cursor-pointer hover:bg-slate-300/70 bg-slate-300/50 max-md:p-0 max-md:w-9 h-9 px-4 rounded-xl flex gap-2 text-sm font-bold text-slate-700 justify-center items-center"},P=t("span",{class:"max-md:hidden"},"Quick access",-1),I={__name:"Navbar",setup(i){const a=p(null);b(()=>{window.addEventListener("scroll",n)}),h(()=>{window.removeEventListener("scroll",n)});const n=()=>{const o=a.value.offsetHeight+20;if(!a.value)return;window.scrollY>o?a.value.classList.add("bg-white/70","border-b-[1px]","dark:bg-slate-900/80","backdrop-blur"):a.value.classList.remove("bg-white/70","border-b-[1px]","dark:bg-slate-900/80","backdrop-blur")};return(o,x)=>{const l=m,d=u;return _(),r("div",{ref_key:"navbar",ref:a,class:"fixed transition-all duration-300 top-0 z-[90] flex justify-between items-center w-full p-5 py-4"},[t("div",v,[e(l,{to:"/",class:"flex gap-2 items-center"},{default:s(()=>[k,w]),_:1}),t("div",y,[e(l,{to:"/projects",class:"flex items-center gap-2 text-sm font-bold text-accent-600"},{default:s(()=>[$]),_:1}),e(l,{to:"/blog",class:"flex items-center gap-2 text-sm font-bold text-accent-600"},{default:s(()=>[z]),_:1}),e(l,{to:"/contact",class:"flex items-center gap-2 text-sm font-bold text-accent-600"},{default:s(()=>[j]),_:1})]),L]),t("div",N,[e(l,{to:"https://github.com/huynamboz",target:"_blank"},{default:s(()=>[e(d,{name:"uil:github",size:"24",color:"black"})]),_:1}),e(l,{to:"https://github.com/huynamboz",target:"_blank"},{default:s(()=>[e(d,{name:"pajamas:linkedin",size:"22",color:"black"})]),_:1}),t("div",B,[e(d,{name:"gridicons:layout",size:"19",color:"black"}),P])])],512)}}},S=I,V={},C={class:"w-full background-grid--fade-top background-grid pb-12 mt-20 pt-20"},E={class:"flex w-full px-14 justify-between flex-wrap"},Y={class:"text-sm max-w-[300px]"},D=t("p",{class:"font-bold text-slate-600"},"About me",-1),M=t("p",{class:"text-slate-700 mt-3"},[c(" I'm huynamboz, a "),t("strong",null,"front-end developer"),c(" from Viet Nam. I have rich experience in web site design and building and customization. ")],-1),T={class:"flex mt-5 gap-5"},A={class:"flex gap-20"},F={class:"text-sm"},H=t("p",{class:"font-bold text-slate-500"},"Discovery",-1),J={class:"flex flex-col mt-4 gap-5"},K=t("span",null,"Projects",-1),O=t("span",null,"Blog",-1),Q=t("span",null,"Contact",-1),U={class:"text-sm"},W=t("p",{class:"font-bold text-slate-500"},"This site",-1),q={class:"flex flex-col mt-4 gap-5"},G=t("span",null,"Source code",-1),R=t("span",null,"My github",-1),X=t("span",null,"Design credit",-1),Z={class:"w-full flex justify-between px-14"},tt=t("div",{class:"text-xs font-bold text-slate-500 mt-10"},[t("span",null,"© 2021 huynamboz")],-1);function et(i,a){const n=u,o=m;return _(),r("div",C,[t("div",E,[t("div",Y,[D,M,t("div",T,[e(o,{to:"https://github.com/huynamboz",target:"_blank"},{default:s(()=>[e(n,{name:"uil:github",size:"24",color:"black"})]),_:1}),e(o,{to:"https://github.com/huynamboz",target:"_blank"},{default:s(()=>[e(n,{name:"pajamas:linkedin",size:"22",color:"black"})]),_:1})])]),t("div",A,[t("div",F,[H,t("div",J,[e(o,{to:"/projects",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[K]),_:1}),e(o,{to:"/blog",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[O]),_:1}),e(o,{to:"/contact",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[Q]),_:1})])]),t("div",U,[W,t("div",q,[e(o,{to:"/projects",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[G]),_:1}),e(o,{to:"/blog",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[R]),_:1}),e(o,{to:"/contact",class:"flex items-center gap-2 text-sm font-bold text-slate-600"},{default:s(()=>[X,e(n,{name:"material-symbols-light:open-in-new",size:"16",color:"black"})]),_:1})])])])]),t("div",Z,[tt,e(o,{to:"/contact",class:"flex items-center gap-2 text-xs font-light text-slate-600 mt-10"},{default:s(()=>[c("See recent update on github ")]),_:1})])])}const st=f(V,[["render",et]]),ot={};function nt(i,a){const n=S,o=st;return _(),r("div",null,[e(n),g(i.$slots,"default"),e(o)])}const dt=f(ot,[["render",nt]]);export{dt as default};