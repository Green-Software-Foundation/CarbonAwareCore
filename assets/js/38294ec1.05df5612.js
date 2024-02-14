"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[588],{4892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7624),i=t(5788);const s={},a="9. SDK as a C# Client Library",o={id:"architecture/decisions/sdk-as-a-csharp-client-library",title:"9. SDK as a C# Client Library",description:"Client Library",source:"@site/docs/architecture/decisions/0009-sdk-as-a-csharp-client-library.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/sdk-as-a-csharp-client-library",permalink:"/docs/architecture/decisions/sdk-as-a-csharp-client-library",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0009-sdk-as-a-csharp-client-library.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"8. Data Source Configuration",permalink:"/docs/architecture/decisions/data-source-configuration"},next:{title:"0010. Create packages for CarbonAware SDK",permalink:"/docs/architecture/decisions/sdk-packaging"}},l={},c=[{value:"Status",id:"status",level:2},{value:"Date",id:"date",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Green Impact",id:"green-impact",level:2}];function d(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"9-sdk-as-a-c-client-library",children:"9. SDK as a C# Client Library"}),"\n",(0,r.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.p,{children:"Accepted"}),"\n",(0,r.jsx)(n.h2,{id:"date",children:"Date"}),"\n",(0,r.jsx)(n.p,{children:"2022-11-1"}),"\n",(0,r.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,r.jsx)(n.p,{children:"Currently the SDK can only be used as a runtime (CLI/Web API) and we are\nexploring what it would take to turn it into a C# client library. This involves\ndetermining what would be exposed as part of the library and how to call it. We\nalso include any changes we believe should be made to the current state of the\nSDK to better support a library."}),"\n",(0,r.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,r.jsx)(n.p,{children:"In order to best support a library, we propose adding a new dotnet project that\nlives above the Aggregator to handle access to the core business logic and\nconfiguration management. Along with this, we have noted other issues that we\nbelieve should also be addressed."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"[Must Address]"})," Creation of a shim that lives on top of the Aggregator and is\nexposed in library"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Benefits","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Continues the consumer tier model (Web API/CLI) wherein the user doesn't\nhave access to the aggregator directly but rather via an intermediary layer."}),"\n",(0,r.jsx)(n.li,{children:"Keeps complex logic internal and only exposes top-level requests"}),"\n",(0,r.jsx)(n.li,{children:"Enables more tailored, specific documentation about how to use it from a\nconsumer perspective, rather than trying to squeeze both general and\ntechnical documentation onto the aggregator directly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Effort - Medium","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Add a new dotnet project"}),"\n",(0,r.jsx)(n.li,{children:"Add robust documentation"}),"\n",(0,r.jsx)(n.li,{children:"Add full testing suite"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"[Must Address]"})," Creation of a parameters builder class to shield library\nusers from directly instantiating the CarbonAwareParameters."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Benefits","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Keeps internal DTOs private and does not require user to understand expected\ninternal types + parsing."}),"\n",(0,r.jsx)(n.li,{children:"Builder has greater usability; easy to understand and use intermediary to\ninstantiate an immutable CarbonAwareParameters."}),"\n",(0,r.jsx)(n.li,{children:"Can design for passing of extra parameters (that a specific data source may\nneed) and the internally handle converting to CarbonAwareParameters"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Effort - Low","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Write a small builder on top of existing class with no new functionality."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"[Should Address]"}),": Clear access boundaries throughout SDK ala\npublic/internal/private classes/records"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Benefits","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Users don't need to onboard onto all complexity of the SDK in order to use,\nthey only have to understand the exposed classes."}),"\n",(0,r.jsx)(n.li,{children:"Users aren't calling SDK classes that aren't fully documented and/or don't\nhave the guarantee of stability or consistency that the upper level consumer\ntier classes do"}),"\n",(0,r.jsx)(n.li,{children:"Users can\u2019t fall into edge cases by calling classes \u201cdown the stack\u201d that\nhad implicit checks/requirements that were validated higher up"}),"\n",(0,r.jsx)(n.li,{children:"Users can't modify objects that are implicitly expected to be immutable by\nthe SDK because of the call stack order"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Effort - Medium/Large","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Would need to do a large scale refactor that may break internal access"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"[Future Scope]"}),": Managed subsystems for Carbon Aware access, configuration,\ndata source credentials etc."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Benefits","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improves security because Env isn\u2019t the most secure way to handle\ncredentials. Could build a robust credential manager."}),"\n",(0,r.jsx)(n.li,{children:"Improves maintainability of the SDK because each sub-system can be worked\non/improved in isolation without being tied to all the other sub-systems."}),"\n",(0,r.jsx)(n.li,{children:"Flexible/dynamic configurations allow users to make changes live"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Effort - Large"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,r.jsx)(n.p,{children:"The SDK will be in a state where it can be packaged into binaries for users to\nintegrate with directly. With the changes, the amount of onboarding needed to\nuse the SDK library, and the amount of code that needs to be written to call it\nshould be minimal."}),"\n",(0,r.jsx)(n.h2,{id:"green-impact",children:"Green Impact"}),"\n",(0,r.jsx)(n.p,{children:"Neutral"})]})}function h(e={}){const{wrapper:n}={...(0,i.MN)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5788:(e,n,t)=>{t.d(n,{MN:()=>c});var r=t(1504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,b=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return t?r.createElement(b,a(a({ref:n},h),{},{components:t})):r.createElement(b,a({ref:n},h))}));h.displayName="MDXCreateElement"}}]);