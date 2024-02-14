"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[7428],{708:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var a=n(7624),i=n(5788);const t={},o="Containerized WebApi",s={id:"tutorial-basics/containerization",title:"Containerized WebApi",description:"The goal of this readme is to show how to build a container WebApi image that",source:"@site/docs/tutorial-basics/containerization.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/containerization",permalink:"/docs/tutorial-basics/containerization",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-basics/containerization.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Carbon Aware WebApi",permalink:"/docs/tutorial-basics/carbon-aware-webapi"},next:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"}},c={},l=[{value:"Build and List Runtime Image",id:"build-and-list-runtime-image",level:2},{value:"Run WebApi Image",id:"run-webapi-image",level:2},{value:"Upload Image to a Container Registry",id:"upload-image-to-a-container-registry",level:2},{value:"Docker Hub",id:"docker-hub",level:3},{value:"Azure Container Registry",id:"azure-container-registry",level:3},{value:"Pipeline Integration (Github Action)",id:"pipeline-integration-github-action",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.MN)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"containerized-webapi",children:"Containerized WebApi"}),"\n",(0,a.jsx)(r.p,{children:"The goal of this readme is to show how to build a container WebApi image that\ncan be used to deploy the application into a container registry and that can be\nused later to run the service."}),"\n",(0,a.jsx)(r.h2,{id:"build-and-list-runtime-image",children:"Build and List Runtime Image"}),"\n",(0,a.jsxs)(r.p,{children:["Use ",(0,a.jsx)(r.code,{children:"docker"})," to build the WebApi images. (Note: Make sure the run ",(0,a.jsx)(r.code,{children:"docker"})," at\nthe root branch)"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"cd ./$(git rev-parse --show-cdup)/src\ndocker build -t carbon_aware:v1 -f CarbonAware.WebApi/src/Dockerfile .\n"})}),"\n",(0,a.jsxs)(r.p,{children:["List ",(0,a.jsx)(r.code,{children:"carbon_aware"})," image"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"docker image ls carbon_aware\nREPOSITORY     TAG       IMAGE ID       CREATED             SIZE\ncarbon_aware   v1        6293e2528bf2   About an hour ago   230MB\n"})}),"\n",(0,a.jsx)(r.h2,{id:"run-webapi-image",children:"Run WebApi Image"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Run the image using ",(0,a.jsx)(r.code,{children:"docker run"})," with host port 8000 mapped to the WebApi\nport 80 and configure environment variable settings for\n",(0,a.jsx)(r.a,{href:"https://www.watttime.org",children:"WattTime"})," provider."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'docker run --rm -p 8000:80 \\\n> -e DataSources__EmissionsDataSource="WattTime" \\\n> -e DataSources__ForecastDataSource="WattTime" \\\n> -e DataSources__Configurations__WattTime__Type="WattTime" \\\n> -e DataSources__Configurations__WattTime__password="username" \\\n> carbon_aware:v1\n'})}),"\n",(0,a.jsxs)(r.p,{children:["or the ",(0,a.jsx)(r.a,{href:"https://www.electricitymaps.com",children:"ElectricityMaps"})," provider"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'docker run --rm -p 8000:80 \\\n> -e DataSources__EmissionsDataSource="ElectricityMaps" \\\n> -e DataSources__ForecastDataSource="ElectricityMaps" \\\n> -e DataSources__Configurations__ElectricityMaps__Type="ElectricityMaps" \\\n> -e DataSources__Configurations__ElectricityMaps__APITokenHeader="auth-token" \\\n> -e DataSources__Configurations__ElectricityMaps__APIToken="<YOUR_ELECTRICITYMAPS_TOKEN>" \\\n> carbon_aware:v1\n'})}),"\n",(0,a.jsxs)(r.p,{children:["or the ",(0,a.jsx)(r.a,{href:"https://www.co2signal.com/",children:"ElectricityMapsFree"})," provider"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'docker run --rm -p 8000:80 \\\n> -e DataSources__EmissionsDataSource="ElectricityMapsFree" \\\n> -e DataSources__Configurations__ElectricityMapsFree__Type="ElectricityMapsFree" \\\n> -e DataSources__Configurations__ElectricityMapsFree__token="<YOUR_CO2SIGNAL_TOKEN>" \\\n> carbon_aware:v1\n'})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Verify that the WebApi is responding to requests using an HTTP client tool\n(e.g. ",(0,a.jsx)(r.code,{children:"postman"}),", ",(0,a.jsx)(r.code,{children:"curl"}),")"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'curl -v -s -X \'POST\' http://localhost:8000/emissions/forecasts/batch  -H \'accept: */*\' -H \'Content-Type: application/json\' -d \'[\n    {\n        "requestedAt": "2021-11-01T00:00:00Z",\n        "dataStartAt": "2021-11-01T00:05:00Z",\n        "dataEndAt": "2021-11-01T23:55:00Z",\n        "windowSize": 5,\n        "location": "eastus"\n    }\n]\'\n...\n> POST /emissions/forecasts/batch HTTP/1.1\n> Host: localhost:8000\n...\n< HTTP/1.1 200 OK\n< Content-Type: application/json; charset=utf-8\n...\n<\n[{"generatedAt":"2021-11-01T00:00:00+00:00","optimalDataPoint":{\n    ...\n}}]\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"upload-image-to-a-container-registry",children:"Upload Image to a Container Registry"}),"\n",(0,a.jsxs)(r.p,{children:["For easy image consumption, upload it to a well-known container registry,\nself-hosted or managed. The following are examples of using\n",(0,a.jsx)(r.a,{href:"https://hub.docker.com",children:"docker hub"})," or\n",(0,a.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-quickstart-task-cli",children:"Azure Container Registry"})]}),"\n",(0,a.jsx)(r.h3,{id:"docker-hub",children:"Docker Hub"}),"\n",(0,a.jsxs)(r.p,{children:["Sign in to ",(0,a.jsx)(r.a,{href:"https://hub.docker.com",children:"Docker Hub"})," and create a private (or public)\nrepository (e.g #your-username#/my-private-repo)"]}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Build and Push"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"docker login --username=your-username\ncd ./$(git rev-parse --show-cdup)/src\ndocker build -t #your-username#/my-private-repo/carbon_aware:v1 -f CarbonAware.WebApi/src/Dockerfile .\ndocker push #your-username#/my-private-repo/carbon_aware:v1\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Pull"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"docker login --username=your-username\ndocker pull #your-username#/my-private-repo/carbon_aware:v1\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"azure-container-registry",children:"Azure Container Registry"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Build and Push image Assuming the container registry is already created, use\nthe user's credentials push the image using ",(0,a.jsx)(r.code,{children:"docker"})," (it can be done also\nusing\n",(0,a.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-quick-task",children:"Azure CLI"}),")"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"docker login <myacrname>.azurecr.io -u username -p <CopiedKeyFromAzurePortal>\ncd ./$(git rev-parse --show-cdup)/src\ndocker build -t <myacrname>.azurecr.io/carbon_aware:v1 -f arbonAware.WebApi/src/Dockerfile .\ndocker push <myacrname>.azurecr.io/carbon_aware:v1\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Pull image"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"docker login <myacrname>.azurecr.io -u username -p <CopiedKeyFromAzurePortal>\ndocker pull <myacrname>.azurecr.io/carbon_aware:v1\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"pipeline-integration-github-action",children:"Pipeline Integration (Github Action)"}),"\n",(0,a.jsxs)(r.p,{children:["To automate an image deployment from a GitHub CI/CD pipeline, the following link\nprovides detailed information on how to build a ",(0,a.jsx)(r.code,{children:"workflow"})," with all the\nnecesarily tools in order to push an image to a container registry of user's\npreference (i.e. Docker Hub)."]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"https://docs.github.com/en/actions/publishing-packages/publishing-docker-images#publishing-images-to-docker-hub",children:"Github Workflows"})})]})}function u(e={}){const{wrapper:r}={...(0,i.MN)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5788:(e,r,n)=>{n.d(r,{MN:()=>l});var a=n(1504);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,i=function(e,r){if(null==e)return{};var n,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var n=e.components,i=e.mdxType,t=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||t;return n?a.createElement(m,o(o({ref:r},u),{},{components:n})):a.createElement(m,o({ref:r},u))}));u.displayName="MDXCreateElement"}}]);