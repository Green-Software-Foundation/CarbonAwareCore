"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[7515],{4281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=r(4848),o=r(5680);const s={},c="Launching the SDK in github Codespaces",a={id:"tutorial-extras/codespaces",title:"Launching the SDK in github Codespaces",description:"Note: These instructions do not include anything about",source:"@site/docs/tutorial-extras/codespaces.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/codespaces",permalink:"/docs/tutorial-extras/codespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-extras/codespaces.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Carbon Aware Library",permalink:"/docs/tutorial-extras/carbon-aware-library"},next:{title:"Configuration",permalink:"/docs/tutorial-extras/configuration"}},i={},d=[];function l(e){const t={blockquote:"blockquote",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"launching-the-sdk-in-github-codespaces",children:"Launching the SDK in github Codespaces"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: These instructions do not include anything about"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Browse to the folder"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"cd src/CarbonAware.WebApi/src/\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run the project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"dotnet run\n"})}),"\n",(0,n.jsx)(t.p,{children:"It should look like that"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"sceenshot of the terminal view starting the webapi in codespaces",src:r(2463).A+"",width:"684",height:"254"})}),"\n",(0,n.jsx)(t.p,{children:"You can then select the browser icon to open in the browser"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"codespaces port tab",src:r(6767).A+"",width:"1306",height:"180"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: the URL to browse needs to have that format: ",(0,n.jsx)(t.code,{children:"https://<codespace public URL>/swagger"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Make sure to browser to the swagger UI by appending ",(0,n.jsx)(t.code,{children:"/swagger"})," to the URL, and the following should open."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"sceenshot of the browser view starting the webapi and navigating to the Swagger UI",src:r(635).A+"",width:"1841",height:"1444"})})]})}function p(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5680:(e,t,r)=>{r.d(t,{RP:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(r),h=o,b=u["".concat(i,".").concat(h)]||u[h]||l[h]||s;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));p.displayName="MDXCreateElement"},635:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/codespaces-browser-1-e2e63f14cfdeaa6e26833cab54e4a08b.png"},6767:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/codespaces-ports-1-6af96108ed0ac2a9c83c9ca22c9ad981.png"},2463:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/codespaces-terminal-1-bdc50639bd4cfb5a3ec77b45abde6a54.png"}}]);