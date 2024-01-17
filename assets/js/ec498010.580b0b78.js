"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[4383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={},o="0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",s={unversionedId:"architecture/decisions/electricity-maps-free",id:"architecture/decisions/electricity-maps-free",title:"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources",description:"Status",source:"@site/docs/architecture/decisions/0012-electricity-maps-free.md",sourceDirName:"architecture/decisions",slug:"/architecture/decisions/electricity-maps-free",permalink:"/carbon-aware-sdk/docs/architecture/decisions/electricity-maps-free",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/architecture/decisions/0012-electricity-maps-free.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"0011. CD pipeline for release process",permalink:"/carbon-aware-sdk/docs/architecture/decisions/cd-pipeline"},next:{title:"0013. Remove Aggregator layer from the Carbon Aware Architechture",permalink:"/carbon-aware-sdk/docs/architecture/decisions/remove-aggregator-layer"}},c={},l=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Green Impact",id:"green-impact",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"0012-treat-electricity-maps-and-electricity-maps-free-as-different-unrelated-data-sources"},"0012. Treat Electricity Maps and Electricity Maps Free as different, unrelated data sources"),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Approved"),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"Electricity Maps offers two different services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the paid one, which has already been added to the dev branch of the Carbon Aware SDK,"),(0,n.kt)("li",{parentName:"ul"},'and the free one, which they also call "CO2 Signal" (',(0,n.kt)("a",{parentName:"li",href:"https://www.co2signal.com/"},"https://www.co2signal.com/"),"), which the Carbon Aware SDK already supports in a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/tree/feat/electricity-map"},"branch"),", though it is based on an older, now outdated version of the SDK.")),(0,n.kt)("p",null,"These two services, despite being provided by the same company, use different APIs. The free API isn't just a subset of the paid one: ",(0,n.kt)("strong",{parentName:"p"},"the endpoints are different, the tokens are different, and the responses are different"),". Here's an example of two equivalent calls to these services, getting the latest value for the Carbon Intensity in France:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ElectricityMaps free (CO2 Signal):"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.co2signal.com/"},"https://docs.co2signal.com/"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request:"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"curl -s 'https://api.co2signal.com/v1/latest?countryCode=FR' -H 'auth-token: myapitoken'"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "_disclaimer": "This data is the exclusive property of Electricity Maps and/or related parties. If you\'re in doubt about your rights to use this data, please contact api@co2signal.com",\n  "status": "ok",\n  "countryCode": "FR",\n  "data": {\n    "datetime": "2023-01-23T17:00:00.000Z",\n    "carbonIntensity": 103,\n    "fossilFuelPercentage": 13.639999999999999\n  },\n  "units": {\n    "carbonIntensity": "gCO2eq/kWh"\n  }\n}\n')))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ElectricityMaps paid:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Documentation: ",(0,n.kt)("a",{parentName:"p",href:"https://static.electricitymaps.com/api/docs/index.html"},"https://static.electricitymaps.com/api/docs/index.html"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Request:"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"curl -s 'https://api.electricitymap.org/v3/carbon-intensity/latest?zone=FR' -H 'auth-token: myapitoken'"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Response:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'{\n  "zone": "FR",\n  "carbonIntensity": 103,\n  "datetime": "2023-01-23T17:00:00.000Z",\n  "updatedAt": "2023-01-23T16:53:20.794Z",\n  "emissionFactorType": "lifecycle",\n  "isEstimated": true,\n  "estimationMethod": "TIME_SLICER_AVERAGE"\n}\n')))))),(0,n.kt)("p",null,"The goal is to support both services, to maximize the usage of the Carbon Aware SDK. The question is how to handle these differences.\nTreating them as the same data source would require to add some complexity, to distinguish whether an account is free or paid. This distinction would have to be either in the form of an extra parameter, or it would require the Carbon Aware SDK to test every time (at least once per session) which service is meant, using a fallback logic: try the paid service first, and if you get an error try the free one. This adds complexity, requires managing the error code, and in any case forces to make more calls, which has a negative impact on the emissions."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,'Since the endpoints, the tokens and the output format are all different, it is easier to treat them as different data sources, unrelated to each other, called "Electricty Maps" and "Electricty Maps Free". This approach requires the user to explicitly indicate what service they want to use, but then every other problem is solved automatically.'),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("p",null,"The new data source will have to be added following the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/Changelog/docs/architecture/data-sources.md#user-content-creating-a-new-data-source"},"instructions"),"."),(0,n.kt)("h2",{id:"green-impact"},"Green Impact"),(0,n.kt)("p",null,"Neutral. This is an implementation detail, under the hood. It has no impact for the users of the Carbon Aware SDK."))}d.isMDXComponent=!0}}]);