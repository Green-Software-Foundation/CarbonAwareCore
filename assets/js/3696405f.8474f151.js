"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[8880],{1916:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(7624),a=i(5788);const s={},r="Configuration",o={id:"tutorial-extras/configuration",title:"Configuration",description:"- Configuration",source:"@site/docs/tutorial-extras/configuration.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/configuration",permalink:"/docs/tutorial-extras/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/tutorial-extras/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Launching the SDK in github Codespaces",permalink:"/docs/tutorial-extras/codespaces"},next:{title:"Containerized WebApi",permalink:"/docs/tutorial-extras/containerization"}},c={},l=[{value:"Logging",id:"logging",level:2},{value:"DataSources",id:"datasources",level:2},{value:"WattTime Configuration",id:"watttime-configuration",level:3},{value:"username",id:"username",level:4},{value:"password",id:"password",level:4},{value:"baseUrl (WT)",id:"baseurl-wt",level:4},{value:"Proxy",id:"proxy",level:4},{value:"WattTime Caching BalancingAuthority",id:"watttime-caching-balancingauthority",level:4},{value:"Json Configuration",id:"json-configuration",level:3},{value:"ElectricityMaps Configuration",id:"electricitymaps-configuration",level:3},{value:"API Token Header",id:"api-token-header",level:4},{value:"API Token",id:"api-token",level:4},{value:"BaseUrl",id:"baseurl",level:4},{value:"Emission Factor Type",id:"emission-factor-type",level:4},{value:"Disable Estimations",id:"disable-estimations",level:4},{value:"ElectricityMapsFree Configuration",id:"electricitymapsfree-configuration",level:3},{value:"API Token",id:"api-token-1",level:4},{value:"BaseUrl",id:"baseurl-1",level:4},{value:"CarbonAwareVars",id:"carbonawarevars",level:2},{value:"Tracing and Monitoring Configuration",id:"tracing-and-monitoring-configuration",level:3},{value:"Configuring with Application Insights",id:"configuring-with-application-insights",level:4},{value:"Verbosity",id:"verbosity",level:3},{value:"Web API Prefix",id:"web-api-prefix",level:3},{value:"LocationDataSourcesConfiguration",id:"locationdatasourcesconfiguration",level:2},{value:"Sample Configurations",id:"sample-configurations",level:2},{value:"Configuration for Emissions data Using WattTime",id:"configuration-for-emissions-data-using-watttime",level:3},{value:"Configuration for Forecast data Using ElectricityMaps",id:"configuration-for-forecast-data-using-electricitymaps",level:2},{value:"Configuration for Emissions data using ElectricityMaps and Forecast data using WattTime",id:"configuration-for-emissions-data-using-electricitymaps-and-forecast-data-using-watttime",level:2},{value:"Configuration for Emissions data using ElectricityMapsFree and Forecast data using WattTime",id:"configuration-for-emissions-data-using-electricitymapsfree-and-forecast-data-using-watttime",level:2},{value:"Configuration For Emissions data Using JSON",id:"configuration-for-emissions-data-using-json",level:3},{value:"Configuration Using WattTime and Defined Location Source Files",id:"configuration-using-watttime-and-defined-location-source-files",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#logging",children:"Logging"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#datasources",children:"DataSources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#watttime-configuration",children:"WattTime Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#username",children:"username"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#password",children:"password"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#baseurl",children:"baseUrl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#proxy",children:"Proxy"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#watttime-caching-balancingauthority",children:"WattTime Caching BalancingAuthority"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#json-configuration",children:"Json Configuration"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#electricitymaps-configuration",children:"ElectricityMaps Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api-token-header",children:"API Token Header"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api-token",children:"API Token"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#baseurl",children:"BaseUrl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#emission-factor-type",children:"Emission Factor Type"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#disable-estimations",children:"Disable Estimations"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#electricitymapsfree-configuration",children:"ElectricityMapsFree Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#api-token",children:"API Token"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#baseurl",children:"BaseUrl"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#carbonawarevars",children:"CarbonAwareVars"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tracing-and-monitoring-configuration",children:"Tracing and Monitoring Configuration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#verbosity",children:"Verbosity"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#web-api-prefix",children:"Web API Prefix"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#locationdatasourcesconfiguration",children:"LocationDataSourcesConfiguration"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#sample-configurations",children:"Sample Configurations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-for-emissions-data-using-watttime",children:"Configuration for Emissions data Using WattTime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-for-forecast-data-using-electricitymaps",children:"Configuration for Forecast data Using ElectricityMaps"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-for-emissions-data-using-electricitymaps-and-forecast-data-using-watttime",children:"Configuration for Emissions data using ElectricityMaps and Forecast data using WattTime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-for-emissions-data-using-electricitymapsfree-and-forecast-data-using-watttime",children:"Configuration for Emissions data using ElectricityMapsFree and Forecast data using WattTime"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-for-emissions-data-using-json",children:"Configuration For Emissions data Using JSON"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuration-using-watttime-and-defined-location-source-files",children:"Configuration Using WattTime and Defined Location Source Files"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"logging",children:"Logging"}),"\n",(0,t.jsxs)(n.p,{children:["The default LogLevel settings for the application are found in the corresponding\n",(0,t.jsx)(n.code,{children:"appsettings.json"}),", which may contain the following section -- see here for\nadditional details on\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/extensions/logging",children:"Logging in .NET"}),"\nand on\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/core/extensions/logging-providers",children:"Logging Providers in .NET"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft.AspNetCore": "Warning"\n    }\n  }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To permanently change the LogLevel, just update the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," for the\napp. To override a LogLevel at runtime, an environment variable can set the\nLogLevel value. For example to set the Logging:LogLevel",":Default"," LogLevel to\nDebug: ",(0,t.jsx)(n.code,{children:'export Logging__LogLevel__Default="Debug"'})]}),"\n",(0,t.jsx)(n.p,{children:"Example using the CLI:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'cd src/CarbonAware.CLI\nexport Logging__LogLevel__Default="Debug"\ndotnet run -l westus\n'})}),"\n",(0,t.jsx)(n.p,{children:"Example using the WebApp:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'cd src/CarbonAware.WebApi\nexport Logging__LogLevel__Default="Debug"\ndotnet run\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or, to change the LogLevel for just one run of the app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'cd src/CarbonAware.WebApi\nLogging__LogLevel__Default="Debug" dotnet run\n'})}),"\n",(0,t.jsx)(n.h2,{id:"datasources",children:"DataSources"}),"\n",(0,t.jsxs)(n.p,{children:["The SDK supports multiple data sources for getting carbon data. At this time,\nonly a JSON file, ",(0,t.jsx)(n.a,{href:"https://www.watttime.org/",children:"WattTime"})," and\n",(0,t.jsx)(n.a,{href:"https://www.electricitymaps.com/",children:"ElectricityMaps"})," are supported."]}),"\n",(0,t.jsx)(n.p,{children:"Each data source interface is configured with a specific data source\nimplementation."}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.code,{children:"WattTime"})," or ",(0,t.jsx)(n.code,{children:"ElectricityMaps"}),", the configuration specific to that\ndata provider must also be supplied."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"JSON"})," will result in the data being loaded from the file specified in the\n",(0,t.jsx)(n.code,{children:"DataFileLocation"})," property"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "DataSources": {\n    "EmissionsDataSource": "Json",\n    "ForecastDataSource": "WattTime",\n    "Configurations": {\n      "WattTime": {\n        "Type": "WattTime",\n        "Username": "username",\n        "Password": "password",\n        "BaseURL": "https://api2.watttime.org/v2/",\n        "Proxy": {\n          "useProxy": true,\n          "url": "http://10.10.10.1",\n          "username": "proxyUsername",\n          "password": "proxyPassword"\n        }\n      },\n      "ElectricityMaps": {\n        "Type": "ElectricityMaps",\n        "APITokenHeader": "auth-token",\n        "APIToken": "myAwesomeToken",\n        "BaseURL": "https://api.electricitymap.org/v3/"\n      },\n      "Json": {\n        "Type": "Json",\n        "DataFileLocation": "test-data-azure-emissions.json"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"watttime-configuration",children:"WattTime Configuration"}),"\n",(0,t.jsx)(n.p,{children:"If using the WattTime data source, WattTime configuration is required."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "username": "",\n  "password": "",\n  "baseUrl": "https://api2.watttime.org/v2/"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sign up for a test account:"})," To create an account, follow these steps\n",(0,t.jsx)(n.a,{href:"https://www.watttime.org/api-documentation/#best-practices-for-api-usage",children:"from the WattTime documentation"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"username",children:"username"}),"\n",(0,t.jsx)(n.p,{children:"The username you receive from WattTime. This value is required when using a\nWattTime data source."}),"\n",(0,t.jsx)(n.h4,{id:"password",children:"password"}),"\n",(0,t.jsx)(n.p,{children:"The WattTime password for the username supplied. This value is required when\nusing a WattTime data source."}),"\n",(0,t.jsx)(n.h4,{id:"baseurl-wt",children:"baseUrl (WT)"}),"\n",(0,t.jsxs)(n.p,{children:["The url to use when connecting to WattTime. Defaults to\n",(0,t.jsx)(n.a,{href:"https://api2.watttime.org/v2/",children:"https://api2.watttime.org/v2/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In normal use, you shouldn't need to set this value, but this value can be used\nto enable integration testing scenarios or if the WattTime url should change in\nthe future."}),"\n",(0,t.jsx)(n.h4,{id:"proxy",children:"Proxy"}),"\n",(0,t.jsxs)(n.p,{children:["This value is used to set proxy information in situations where internet egress\nrequires a proxy. For proxy values to be used ",(0,t.jsx)(n.code,{children:"useProxy"})," must be set to ",(0,t.jsx)(n.code,{children:"true"}),".\nOther values should be set as needed for your environment."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  DataSources__Configurations__WattTime__UseProxy\n"})}),"\n",(0,t.jsx)(n.h4,{id:"watttime-caching-balancingauthority",children:"WattTime Caching BalancingAuthority"}),"\n",(0,t.jsxs)(n.p,{children:["To improve performance communicating with the WattTime API service, the client\ncaches the data mapping location coordinates to balancing authorities. By\ndefault, this data is stored in an in-memory cache for ",(0,t.jsx)(n.code,{children:"86400"})," seconds, but\nexpiration can be configured using the setting ",(0,t.jsx)(n.code,{children:"BalancingAuthorityCacheTTL"}),' (Set\nto "0" to disable the caching feature). The regional boundaries of a balancing\nauthority tend to be stable, but as they can change, the\n',(0,t.jsx)(n.a,{href:"https://www.watttime.org/api-documentation/#determine-grid-region",children:"WattTime documentation"}),"\nrecommends not caching for longer than 1 month."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'DataSources__Configurations__WattTime__BalancingAuthorityCacheTTL="90"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"json-configuration",children:"Json Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["By setting\n",(0,t.jsx)(n.code,{children:"DataSources__Configurations__Json__DataFileLocation=mycustomfile.json"})," property\nwhen Data source is set to ",(0,t.jsx)(n.code,{children:"Json"}),", the user can specify a file that can contains\ncustom ",(0,t.jsx)(n.code,{children:"EmissionsData"})," sets. The file should be located under the\n",(0,t.jsx)(n.code,{children:"<user's repo>/src/data/data-sources/"})," directory that is part of the repository.\nAt build time, all the JSON files under ",(0,t.jsx)(n.code,{children:"<user's repo>/src/data/data-sources/"}),"\nare copied over the destination directory\n",(0,t.jsx)(n.code,{children:"<user's repo>/src/CarbonAware.WebApi/src/bin/[Debug|Publish]/net6.0/data-sources/json"}),"\nthat is part of the ",(0,t.jsx)(n.code,{children:"CarbonAware.WebApi"})," assembly. Also the file can be placed\nwhere the assembly ",(0,t.jsx)(n.code,{children:"CarbonAware.WebApi.dll"})," is located under ",(0,t.jsx)(n.code,{children:"data-sources/json"}),"\ndirectory. For instance, if the application is installed under ",(0,t.jsx)(n.code,{children:"/app"}),", copy the\nfile to ",(0,t.jsx)(n.code,{children:"/app/data-sources/json"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cp <mydir>/mycustomfile.json /app/data-sources/json\nexport DataSources__Configurations=Json\nexport DataSources__Configurations__JSON__Type=JSON\nexport DataSources__Configurations__Json__DataFileLocation=mycustomfile.json\ndotnet /app/CarbonAware.WebApi.dll\n"})}),"\n",(0,t.jsx)(n.p,{children:"As soon a first request is performed, a log entry shows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"info: CarbonAware.DataSources.Json.JsonDataSource[0]\n    Reading Json data from /app/data-sources/json/mycustomfile.json\n"})}),"\n",(0,t.jsx)(n.h3,{id:"electricitymaps-configuration",children:"ElectricityMaps Configuration"}),"\n",(0,t.jsx)(n.p,{children:"If using the ElectricityMaps data source, ElectricityMaps configuration is\nrequired."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"With an account token:"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"})," The ElectricityMaps API does not currently support access to\nhistorical forecasts. This means that functionality such as the CLI\n",(0,t.jsx)(n.code,{children:"emissions-forecasts"})," ",(0,t.jsx)(n.code,{children:"--requested-at"})," flag and the API ",(0,t.jsx)(n.code,{children:"/forecasts/batch"})," >\n",(0,t.jsx)(n.code,{children:"requestedAt"})," input will respond with a ",(0,t.jsx)(n.code,{children:"NotImplemented"})," error."]}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the goal, the historical measured ",(0,t.jsx)(n.code,{children:"emissions"}),' commands may be a\nreasonable workaround. This would treat the measured emissions as a "perfect\nhistorical forecast" effectively. Otherwise, use a data source that has\nsupport for historical forecasts, such as ',(0,t.jsx)(n.a,{href:"#watttime-configuration",children:"WattTime"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "APITokenHeader": "auth-token",\n  "APIToken": "<api-token>",\n  "baseUrl": "https://api.electricitymap.org/v3/"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"With a free trial token:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "APITokenHeader": "X-BLOBR-KEY",\n  "APIToken": "<api-token>",\n  "baseUrl": "https://api-access.electricitymaps.com/<url-token>"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sign up for a free trial:"})," Select the free trial product from\n",(0,t.jsx)(n.a,{href:"https://api-portal.electricitymaps.com/",children:"the ElectricityMaps catalog"}),". Note\nthat there are some\n",(0,t.jsx)(n.a,{href:"/docs/tutorial-extras/selecting-a-data-source#restrictions-electricitymaps-free-trial-user",children:"restrictions"}),"\non the free trial product."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"api-token-header",children:"API Token Header"}),"\n",(0,t.jsx)(n.p,{children:'The API Token Header for ElectricityMaps. If you have a paid account, the header\nis "auth-token". If you\'re using the free trial, the header is "X-BLOBR-KEY"'}),"\n",(0,t.jsx)(n.h4,{id:"api-token",children:"API Token"}),"\n",(0,t.jsx)(n.p,{children:"The ElectricityMaps token you receive with your account or free trial."}),"\n",(0,t.jsx)(n.h4,{id:"baseurl",children:"BaseUrl"}),"\n",(0,t.jsxs)(n.p,{children:['The url to use when connecting to ElectricityMaps. Defaults to\n"',(0,t.jsx)(n.a,{href:"https://api.electricitymap.org/v3/",children:"https://api.electricitymap.org/v3/"}),'" but can be overridden in the config if\nneeded (such as for free-trial users or enable integration testing scenarios).']}),"\n",(0,t.jsx)(n.h4,{id:"emission-factor-type",children:"Emission Factor Type"}),"\n",(0,t.jsxs)(n.p,{children:["String value for the optional ",(0,t.jsx)(n.code,{children:"emissionFactorType"})," parameter to be sent on every\nElectricityMaps API request that accepts this parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["See the\n",(0,t.jsx)(n.a,{href:"https://static.electricitymaps.com/api/docs/index.html#emission-factors",children:"ElectricityMaps API Documentation"}),"\nfor more details and valid values."]}),"\n",(0,t.jsx)(n.h4,{id:"disable-estimations",children:"Disable Estimations"}),"\n",(0,t.jsxs)(n.p,{children:["Boolean value for the optional ",(0,t.jsx)(n.code,{children:"disableEstimations"})," parameter to be sent on\nevery ElectricityMaps API request that accepts this parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["See the\n",(0,t.jsx)(n.a,{href:"https://static.electricitymaps.com/api/docs/index.html#estimations",children:"ElectricityMaps API Documentation"}),"\nfor more details."]}),"\n",(0,t.jsx)(n.h3,{id:"electricitymapsfree-configuration",children:"ElectricityMapsFree Configuration"}),"\n",(0,t.jsx)(n.p,{children:"If using the ElectricityMapsFree data source, ElectricityMapsFree configuration\nis required."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"With an account token:"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"})," The ElectricityMapsFree API does not currently support access to\nhistorical forecasts. This means that functionality such as the CLI\n",(0,t.jsx)(n.code,{children:"emissions-forecasts"})," > ",(0,t.jsx)(n.code,{children:"--requested-at"})," flag and the API ",(0,t.jsx)(n.code,{children:"/forecasts/batch"})," >\n",(0,t.jsx)(n.code,{children:"requestedAt"})," input will respond with a ",(0,t.jsx)(n.code,{children:"NotImplemented"})," error."]}),"\n",(0,t.jsx)(n.p,{children:"The ElectricityMapsFree API also does not currently support access to\nhistorical emissions data. It only supports getting the single latest\nemissions data point for the given location."}),"\n",(0,t.jsxs)(n.p,{children:["If either of these restrictions are an issue, a data source that has support\nfor historical forecasts, such as ",(0,t.jsx)(n.a,{href:"#watttime-configuration",children:"WattTime"})," or\nhistorical emissions, such as\n",(0,t.jsx)(n.a,{href:"#electricitymaps-configuration",children:"ElectricityMaps"})," may be preferable."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "token": "<api-token>",\n  "baseUrl": "https://api.co2signal.com/v1/"\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"api-token-1",children:"API Token"}),"\n",(0,t.jsx)(n.p,{children:"The ElectricityMapsFree token you receive with your account."}),"\n",(0,t.jsx)(n.h4,{id:"baseurl-1",children:"BaseUrl"}),"\n",(0,t.jsxs)(n.p,{children:['The url to use when connecting to ElectricityMapsFree. Defaults to\n"',(0,t.jsx)(n.a,{href:"https://api.co2signal.com/v1/",children:"https://api.co2signal.com/v1/"}),'" but can be overridden in the config if needed\n(such as to enable integration testing scenarios).']}),"\n",(0,t.jsx)(n.h2,{id:"carbonawarevars",children:"CarbonAwareVars"}),"\n",(0,t.jsx)(n.p,{children:"This section contains the global settings for the SDK. The configuration looks\nlike this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "carbonAwareVars": {\n    "TelemetryProvider": "ApplicationInsights",\n    "VerboseApi": "true",\n    "webApiRoutePrefix": ""\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"tracing-and-monitoring-configuration",children:"Tracing and Monitoring Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The application uses Opentelemetry to create traces locally in the console. In\norder to configure it to send the traces to a tracing app like Zipkin, Jaeger\netc, please refer to the Open Telemetry\n",(0,t.jsx)(n.a,{href:"https://opentelemetry.io/",children:"documentation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"configuring-with-application-insights",children:"Configuring with Application Insights"}),"\n",(0,t.jsxs)(n.p,{children:["Application monitoring and tracing can be configured using the\n",(0,t.jsx)(n.code,{children:"TelemetryProvider"})," variable in the application configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'CarbonAwareVars__TelemetryProvider="ApplicationInsights"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This application is integrated with Application Insights for monitoring\npurposes. The telemetry collected in the app is pushed to AppInsights and can be\ntracked for logs, exceptions, traces and more. To connect to your Application\nInsights instance, configure the ",(0,t.jsx)(n.code,{children:"ApplicationInsights_Connection_String"}),"\nvariable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ApplicationInsights_Connection_String="AppInsightsConnectionString"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can alternatively configure using Instrumentation Key by setting the\n",(0,t.jsx)(n.code,{children:"AppInsights_InstrumentationKey"})," variable. However, Microsoft is ending\ntechnical support for instrumentation key\ufffdbased configuration of the Application\nInsights feature soon. ConnectionString-based configuration should be used over\nInstrumentationKey. For more details, please refer to\n",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/sdk-connection-string?tabs=net",children:"the documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'AppInsights_InstrumentationKey="AppInsightsInstrumentationKey"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"verbosity",children:"Verbosity"}),"\n",(0,t.jsx)(n.p,{children:"You can configure the verbosity of the application error messages by setting the\n'VerboseApi' environment variable. Typically, you would set this value to 'true'\nin the development or staging regions. When set to 'true', a detailed stack\ntrace would be presented for any errors in the request."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'CarbonAwareVars__VerboseApi="true"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"web-api-prefix",children:"Web API Prefix"}),"\n",(0,t.jsxs)(n.p,{children:["Used to add a prefix to all routes in the WebApi project. Must start with a ",(0,t.jsx)(n.code,{children:"/"}),".\nInvalid paths will cause an exception to be thrown at startup."]}),"\n",(0,t.jsx)(n.p,{children:"By default, all controllers are off of the root path. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost/emissions\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"webApiRoutePrefix"})," is set, it will allow calls to controllers using the\nprefix, which can be helpful for cross cluster calls, or when proxies strip out\ninformation from headers. For example, if this value is set to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'CarbonAwareVars__webApiRoutePrefix="/mydepartment/myapp"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/mydepartment/myapp\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then calls can be made that look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://localhost/mydepartment/myapp/emissions\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that the controllers still respond off of the root path."}),"\n",(0,t.jsx)(n.h2,{id:"locationdatasourcesconfiguration",children:"LocationDataSourcesConfiguration"}),"\n",(0,t.jsxs)(n.p,{children:["By setting ",(0,t.jsx)(n.code,{children:"LocationDataSourcesConfiguration"})," property with one or more location\ndata sources, it is possible to load different ",(0,t.jsx)(n.code,{children:"Location"})," data sets in order to\nhave more than one location. For instance by setting two location regions, the\nproperty would be set as follow using\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#naming-of-environment-variables",children:"environment"}),"\nvariables:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'"LocationDataSourcesConfiguration__LocationSourceFiles__0__DataFileLocation": "azure-regions.json",\n"LocationDataSourcesConfiguration__LocationSourceFiles__0__Prefix": "az",\n"LocationDataSourcesConfiguration__LocationSourceFiles__0__Delimiter": "-",\n"LocationDataSourcesConfiguration__LocationSourceFiles__1__DataFileLocation": "custom-regions.json",\n"LocationDataSourcesConfiguration__LocationSourceFiles__1__Prefix": "custom",\n"LocationDataSourcesConfiguration__LocationSourceFiles__1__Delimiter": "_",\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This way when the application starts, it open the files specified by\n",(0,t.jsx)(n.code,{children:"DataFileLocation"})," property that should located under ",(0,t.jsx)(n.code,{children:"location-sources/json"}),"\ndirectory. The format of these files is the same as the ",(0,t.jsx)(n.code,{children:"Location"})," Model class.\nIn order to differentiate between regions, a ",(0,t.jsx)(n.code,{children:"Prefix"})," and ",(0,t.jsx)(n.code,{children:"Delimiter"})," properties\nare used to allow the user to select the region when a request is performed. By\nsettings the properties, the region should be made of\n",(0,t.jsx)(n.strong,{children:"region"}),"=",(0,t.jsx)(n.code,{children:"Prefix"}),"+",(0,t.jsx)(n.code,{children:"Delimiter"}),"+",(0,t.jsx)(n.code,{children:"RegionName"}),", so when the query is performed, it\nwould be found. The following example shows how to perform an http request:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"PREFIX=az\nDELIMITER='-'\nREGION=${PREFIX}${DELIMITER}eastus\ncurl \"http://${IP_HOST}:${PORT}/emissions/bylocations/best?location=${REGION}&time=2022-05-25&toTime=2022-05-26&durationMinutes=0\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["At build time, all the JSON files under\n",(0,t.jsx)(n.code,{children:"<user's repo>/src/data/location-sources"})," are copied over the destination\ndirectory\n",(0,t.jsx)(n.code,{children:"<user's repo>/src/CarbonAware.WebApi/src/bin/[Debug|Publish]/net6.0/location-sources/json"}),"\nthat is part of the ",(0,t.jsx)(n.code,{children:"CarbonAware.WebApi"})," assembly. Also the file can be placed\nwhere the assembly ",(0,t.jsx)(n.code,{children:"CarbonAware.WebApi.dll"})," is located under\n",(0,t.jsx)(n.code,{children:"location-sources/json"})," directory. For instance, if the application is installed\nunder ",(0,t.jsx)(n.code,{children:"/app"}),", copy the file to ",(0,t.jsx)(n.code,{children:"/app/location-sources/json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": Under ",(0,t.jsx)(n.code,{children:"<user's repo>/src/data/location-sources"})," there is a template\nfile ",(0,t.jsx)(n.code,{children:"custom-azure-zones.json.template"})," that can be used for locations that\ndon't have latitude and logitude, and the underline datasource requires a zone\nname. This is the case for data source ",(0,t.jsx)(n.code,{children:"ElectricityMaps"})," where the routes can be\naccessible using lat/lon, but some regions are zone name based."]}),"\n",(0,t.jsxs)(n.p,{children:["One can also specify these values in ",(0,t.jsx)(n.code,{children:"appsettings.json"})," like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "LocationDataSourcesConfiguration": {\n    "LocationSourceFiles": [\n      {\n        "DataFileLocation": "azure-regions.json",\n        "Prefix": "az",\n        "Delimiter": "-"\n      },\n      {\n        "DataFileLocation": "custom-regions.json",\n        "Prefix": "custom",\n        "Delimiter": "_"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"sample-configurations",children:"Sample Configurations"}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-emissions-data-using-watttime",children:"Configuration for Emissions data Using WattTime"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'DataSources__EmissionsDataSource="WattTime"\nCarbonAwareVars__WebApiRoutePrefix="/microsoft/cse/fsi"\nDataSources__Configurations__WattTime__Proxy__UseProxy=true\nDataSources__Configurations__WattTime__Proxy__Url="http://10.10.10.1"\nDataSources__Configurations__WattTime__Proxy__Username="proxyUsername"\nDataSources__Configurations__WattTime__Password="proxyPassword"\nDataSources__Configurations__WattTime__Username="wattTimeUsername"\nDataSources__Configurations__WattTime__Password="wattTimePassword"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-for-forecast-data-using-electricitymaps",children:"Configuration for Forecast data Using ElectricityMaps"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "DataSources": {\n    "ForecastDataSource": "ElectricityMaps",\n    "Configurations": {\n      "ElectricityMaps": {\n        "Type": "ElectricityMaps",\n        "APITokenHeader": "auth-token",\n        "APIToken": "token",\n        "BaseURL": "https://api.electricitymap.org/v3/"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-for-emissions-data-using-electricitymaps-and-forecast-data-using-watttime",children:"Configuration for Emissions data using ElectricityMaps and Forecast data using WattTime"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "DataSources": {\n    "EmissionsDataSource": "ElectricityMaps",\n    "ForecastDataSource": "WattTime",\n    "Configurations": {\n      "WattTime": {\n        "Type": "WattTime",\n        "Username": "username",\n        "Password": "password",\n        "BaseURL": "https://api2.watttime.org/v2/",\n      },\n      "ElectricityMaps": {\n        "Type": "ElectricityMaps",\n        "APITokenHeader": "auth-token",\n        "APIToken": "token",\n        "BaseURL": "https://api.electricitymap.org/v3/"\n      }\n    }\n  }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configuration-for-emissions-data-using-electricitymapsfree-and-forecast-data-using-watttime",children:"Configuration for Emissions data using ElectricityMapsFree and Forecast data using WattTime"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "DataSources": {\n    "EmissionsDataSource": "ElectricityMapsFree",\n    "ForecastDataSource": "WattTime",\n    "Configurations": {\n      "WattTime": {\n        "Type": "WattTime",\n        "Username": "username",\n        "Password": "password",\n        "BaseURL": "https://api2.watttime.org/v2/",\n      },\n      "ElectricityMapsFree": {\n        "Type": "ElectricityMapsFree",\n        "token": "token",\n        "BaseURL": "https://api.co2signal.com/v1/"\n      }\n    }\n  }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-emissions-data-using-json",children:"Configuration For Emissions data Using JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "DataSources": {\n    "EmissionsDataSource": "Json",\n    "Configurations": {\n      "Json": {\n        "Type": "Json",\n        "DataFileLocation": "test-data.json"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-using-watttime-and-defined-location-source-files",children:"Configuration Using WattTime and Defined Location Source Files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "DataSources": {\n        "EmissionsDataSource": "WattTime",\n        "Configurations": {\n          "WattTime": {\n            "Type": "WattTime",\n            "Username": "user",\n            "Password": "password"\n        }\n    },\n    "locationDataSourcesConfiguration": {\n        "locationSourceFiles": [\n            {\n                "prefix": "az",\n                "delimiter": "-",\n                "dataFileLocation": "azure-regions.json"\n            },\n            {\n                "prefix": "custom",\n                "delimiter": "_",\n                "dataFileLocation": "custom-regions.json"\n            }\n        ]\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.MN)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5788:(e,n,i)=>{i.d(n,{MN:()=>l});var t=i(1504);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(i),p=a,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||s;return i?t.createElement(g,r(r({ref:n},h),{},{components:i})):t.createElement(g,r({ref:n},h))}));h.displayName="MDXCreateElement"}}]);