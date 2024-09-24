"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"release-v1.6","metadata":{"permalink":"/blog/release-v1.6","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-09-18-release-1.6.mdx","source":"@site/blog/2024-09-18-release-1.6.mdx","title":"Release v1.6","description":"Release 1.6","date":"2024-09-18T00:00:00.000Z","tags":[{"inline":true,"label":"v1.6","permalink":"/blog/tags/v-1-6"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.565,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"release-v1.6","title":"Release v1.6","tags":["v1.6","release"]},"unlisted":false,"nextItem":{"title":"Release v1.5","permalink":"/blog/release-v1.5"}},"content":"Release 1.6\\n\\nRelease for milestone https://github.com/Green-Software-Foundation/carbon-aware-sdk/milestone/8?closed=1 with general bugs fixes and improvements\\n\\n\x3c!-- truncate --\x3e\\n\\n### Added \\n\\n- [PR #555 Add a configuration for disabling to cache JSON emission data ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/555)\\n- [PR #544 Add env directive to values.yaml and troubleshooting guide to avoid inotify limitation on Linux ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/544)\\n- [PR #524 Add blog article for .NET 8 upgrade ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/524)\\n- [PR #523 documentation-change.yml: Created issue template for documentation ch\u2026 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/523)\\n\\n### Fixed\\n\\n- [#528 Bug: Avoid inotify limit in WebAPI container on Kubernetes ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/528)\\n- [PR #553 Documentation: \\"it\'s\\" is used incorrectly several times ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/553)\\n- [PR #551 Docs/blog update for releases 1.3 to1.5 and fix ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/551)\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/559](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/559)"},{"id":"release-v1.5","metadata":{"permalink":"/blog/release-v1.5","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-07-23-release-1.5.mdx","source":"@site/blog/2024-07-23-release-1.5.mdx","title":"Release v1.5","description":"Release 1.5","date":"2024-07-23T00:00:00.000Z","tags":[{"inline":true,"label":"v1.5","permalink":"/blog/tags/v-1-5"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.805,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"release-v1.5","title":"Release v1.5","tags":["v1.5","release"]},"unlisted":false,"prevItem":{"title":"Release v1.6","permalink":"/blog/release-v1.6"},"nextItem":{"title":"Release v1.4","permalink":"/blog/release-v1.4"}},"content":"Release 1.5\\n\\nThis is the WattTime v3 update.  Most notable changes that may require action are for deployment configuration, and these are minor.\\n\\n\x3c!-- truncate --\x3e\\n\\n### Added \\n\\nWattTime v3 API support.  This is an inplace upgrade for v2.\\n\\n- [PR #532 Watt Time v3 Support  ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/532)\\n- [PR #340 Add example for \'podman play kube\' ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/340)\\n- [PR #536 Updated azure-regions.json with new regions ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/536)\\n- [#519 Remove hackathon sentence from our website banner ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/519)\\n- [#510 Gap Analysis for WattTime v3 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/510)\\n- [#262 Feature Contribution: Publish the docker file in a docker registry ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/262)\\n\\n### Removed\\n\\nWattTime v2 API support due to v3 in place replacement.\\n\\n### Fixed\\n\\n- [PR #522 Remove Hack mention from the Docs\'s banner ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/522)\\n- [#535 Bug: Configuration for locations loads twice  ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/535)\\n- [PR #516 Update published documentation to .NET 8 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/516)\\n- [PR #515 overview.md: Fixed three broken links Signed-off-by: joecus1 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/515)\\n- [#506 Check our published documentation to identify any references to .NET7 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/506)\\n- [#512 Bug: Broken links in overview.md file ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/512)\\n\\n### Changed\\n\\nUpdates for WattTime v3 API endpoint from v2, details in the [ADR for WattTime v3 changes](/docs/architecture/decisions/watt-time-v3).\\n\\n#### API\\n\\nNo changes\\n\\n#### API Deployment\\n\\nDue to the change for WattTime v3, there is change to the configuration for WattTime users.\\n\\nWith some of the changes to the code, some of the configuration will also needs to change.\\n\\n| Config (v2)                   | Config (v3)                 | Description                  |\\n|------------------------------------|----------------------------------|------------------------------|\\n| `BalancingAuthorityCacheTTL`                                 | `RegionCacheTTL`                                 | This is the cache for regions data in seconds, and has a default value of 1 day.  This only needs updating if you set it |\\n| n/a                        | `AuthenticationBaseUrl`                                | **NEW** This is the base URL for the WattTime Authentication API and defaults to `https://api.watttime.org/` if not set. |\\n\\nExample below if set (note they do not have to be set)\\n```json\\n\\"wattTime_no-proxy\\": {\\n  \\"Type\\": \\"WattTime\\",\\n  \\"Username\\": \\"the_username\\",\\n  \\"Password\\": \\"super_secret_secret\\",\\n  \\"BaseURL\\": \\"https://api.watttime.org/v3/\\",\\n  \\"AutenticationBaseURL\\": \\"https://api.watttime.org\\", // This is new but not mandatory in config\\n  \\"RegionCacheTTL\\": 86400, // This is changed but not mandatory in config\\n  \\"Proxy\\": {\\n    \\"UseProxy\\": false\\n  }\\n```\\n\\n#### SDK \\n\\nNo changes\\n\\n\\n#### Other\\n\\nNo changes\\n\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503)"},{"id":"release-v1.4","metadata":{"permalink":"/blog/release-v1.4","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-05-24-release-1.4.mdx","source":"@site/blog/2024-05-24-release-1.4.mdx","title":"Release v1.4","description":"Release 1.4","date":"2024-05-24T00:00:00.000Z","tags":[{"inline":true,"label":"v1.4","permalink":"/blog/tags/v-1-4"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.71,"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"release-v1.4","title":"Release v1.4","tags":["v1.4","release"]},"unlisted":false,"prevItem":{"title":"Release v1.5","permalink":"/blog/release-v1.5"},"nextItem":{"title":"Carbon Aware SDK 1.4, behind the scenes","permalink":"/blog/dotnet-8-upgrade"}},"content":"Release 1.4\\n\\n\\n### Added \\n\\n- [#401 Feature Contribution: Upgrade .NET version to .NET 8 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/401) \x3c!-- truncate --\x3e\\n- [#419 Feature Contribution: Migrate sample implementation of Azure Function to isolated worker model ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/419)\\n- [PR #500 Up Helm chart version to 1.2.0 ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/500)\\n\\n- [#397 Feature Contribution: Data caching in the SDK ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/397)\\n\\n### Fixed\\n\\n- [#505 Bug: Project Page wiki from GSF website still says it\'s in incubation ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/505)\\n- [#496 URGENT WebAPI container has not built due to segmentation fault ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/496)\\n- [#487 Bug: Getting started guide is lost ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/487)\\n\\n### Changed\\n\\n- [#477 Bug: Ensure the readme file shows as the project overview content on the documentation site ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/477)\\n- [PR #485 Docs overview, disclaimer & pipeline updates for graduation ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/485)\\n\\n#### API\\n\\n- \\n\\n#### API Deployment\\n\\n- \\n\\n#### SDK \\n\\n- \\n\\n\\n#### Other\\n\\n- \\n\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/503)"},{"id":"dotnet-8-upgrade","metadata":{"permalink":"/blog/dotnet-8-upgrade","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-05-16-dotnet8/index.md","source":"@site/blog/2024-05-16-dotnet8/index.md","title":"Carbon Aware SDK 1.4, behind the scenes","description":"As most software nowadays, the Carbon Aware SDK relies on a stack of utilities, and while adding a new feature is usually the most appealing for a project, it\u2019s also critical to maintain the stack, especially in a community effort.","date":"2024-05-16T00:00:00.000Z","tags":[{"inline":true,"label":"dotnet8","permalink":"/blog/tags/dotnet-8"},{"inline":true,"label":"post","permalink":"/blog/tags/post"}],"readingTime":8.045,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"dotnet-8-upgrade","title":"Carbon Aware SDK 1.4, behind the scenes","tags":["dotnet8","post"]},"unlisted":false,"prevItem":{"title":"Release v1.4","permalink":"/blog/release-v1.4"},"nextItem":{"title":"Release v1.3","permalink":"/blog/release-v1.3"}},"content":"As most software nowadays, the Carbon Aware SDK relies on a stack of utilities, and while adding a new feature is usually the most appealing for a project, it\u2019s also critical to maintain the stack, especially in a community effort.\\n\\nContainerization has helped shift the upgrading work to a more convenient time for the development team, but there are still various motivations for keeping a stack up to date with current versions: security, bug fixes, performance, support\u2026 but the best is to couple with new feature development: such was the case for the .NET framework.\\n\\nHowever, those updates often have ripple effects, as their dependencies are not always foreseeable, making the software upgrade workload hard to predict.\\n\\nAs NTT and NTT DATA were key participants in this contribution, this is a good occasion to cast a light on the behind the scenes, and the way this new Carbon Aware SDK is being used internally.\\n\\n# Why .NET 8 ?\\n\\nCarbon Aware SDK v1.4.0 was released in May 2024. Its core evolution was the upgrade to .NET 8. Until v1.3.x, the Carbon Aware SDK relied on the LTS (Long Term Support) version .NET 6. With an EOL (End of Life) set for November 2024, an upgrade was unavoidable.\\n\\nMicrosoft released .NET 8 in November 2023, the latest LTS version of .NET, which [will be supported until November 2026](https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core). \\n\\nWanting to display the Software Carbon Intensity ([SCI - Software Carbon Intensity](https://sci.greensoftware.foundation/) as adopted in [ISO/IEC 21031:2024](https://www.iso.org/standard/86612.html)) metrics from the Carbon Aware SDK WebAPI made .NET 8 a requirement, as .NET 8 introduced [enhanced support for implementing metrics features](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/runtime#extensions-metrics).\\n\\nIndeed, the newly introduced [IMeterFactory](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.imeterfactory?view=net-8.0) interface enabled us to create a [Meter](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.metrics.meter?view=net-8.0) instance while maintaining modularity by using dependency injection (i.e. use the .NET 8 implementation of the feature, instead of recreating it\u2026 another software development sustainable pattern). \\n\\nIn summary, Carbon Intensity metrics handling was combined with the necessary support extension that the .NET 8 upgrade provides.\\n\\n# In practice\\n\\nThe initial work for upgrading to .NET 8 was done in [Pull Request #404](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/404) (aka PR, a code change proposal, which once approved will be merged in the main code).\\n\\nWithout being a C# expert, it\u2019s still interesting to look at the PR and see that: it involves several individuals working together as a community, many files were impacted, and highlights the importance of tests and samples, which required further work due to some ripple effects.\\n\\nFor the nitty gritty (else jump to the next paragraph): the core work is \u201csimply\u201d updating the target framework version. \\n\\nIt can be done in the property window of each of the C# projects, for example, in the Japanese version of Visual Studio (Fig.1).\\n\\n![fig1](./fig1.png)\\n\\nFig.1 Property window of C# project in Carbon Aware SDK on Visual Studio Community Edition\\n\\nCarbon Aware SDK includes 30 C# projects (in v1.3.0 at least), so automation is welcomed. The target framework version is described in `/Project/PropertyGroup/TargetFramework` in the `.csproj` file. For example, running the command on WSL:\\n\\n```\\nfind . -name \\"*.csproj\\" -exec sed -i \'s|^\\\\(\\\\s\\\\+\\\\)<TargetFramework>net6.0</TargetFramework>$|\\\\1<TargetFramework>net8.0</TargetFramework>|g\' {} \\\\;\\n```\\n\\nThe .NET version is specified in many other places, which need to be updated as well (`grep` will list them all).\\n\\n* Base image in Docker file\\n    * Use tag `8.0` instead of `6.0` for `mcr.microsoft.com/dotnet/sdk`\\n* Tool configurations\\n    * global.json\\n    * dotnet-tools.json\\n    * launch.json for VSCode\\n* Target framework version for OpenAPI generator for .NET\\n* .NET version for [actions/setup-dotnet](https://github.com/actions/setup-dotnet) in GitHub Actions Workflow\\n* Comments in source files\\n* Documents\\n\\nWhile the updating part is done, the work does not end there\u2026\\n\\n# Unexpected work items\\n\\nWhile the .NET 8 upgrade was done, some unexpected issues surfaced. \\n\\n## Ripple effect on sample code\\n\\nTo help onboard newcomers to the Carbon Aware SDK, a sample running on Azure Functions is provided.\\n\\nAzure Functions for .NET is transitioning one of its execution modes (the In-process model) to the Isolated worker model ([more details here](https://learn.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-in-process-differences)). Moreover, .NET 8 did not yet provide an option to use the former model in its initial release (cf. [roadmap of Azure Functions](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/net-on-azure-functions-august-2023-roadmap-update/ba-p/3910098)).\\n\\nAs our sample was still implementing the in-process model (to be deprecated and not available in .NET 8 at this time), it made sense to migrate to the isolated worker model.\\n\\nFor the code lover, there is a helpful [guide](https://learn.microsoft.com/en-us/azure/azure-functions/migrate-dotnet-to-isolated-model?tabs=net8) for the migration. This led to:\\n\\n* Change the version of container images to build and test\\n* Update the `.csproj` file\\n* Replace `Startup.cs` with `Program.cs`\\n* Replace `FunctionName` attribute with `Function`\\n* Change loggers to be obtained from the DI container\\n* Update the document\\n\\nFor more details browse: [Pull Request #420](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/420).\\n\\n## Port Number Breaking change\\n\\nAs the Carbon Aware SDK WebAPI uses ASP.NET Core technology, another collateral change was required since .NET 8 changed its default port number from 80 to 8080 [Microsoft Learn document](https://learn.microsoft.com/en-us/dotnet/core/compatibility/containers/8.0/aspnet-port)).\\n\\nChanging the port number from WebAPI container affects the containerPort in the Helm chart and some GitHub Workflows that uses WebAPI.\\n\\n## Broken build pipeline on GitHub Actions\\n\\nThanks to GitHub, a lot of automation is available to publish code, allowing contributors to focus more on coding. In particular, the Carbon Aware SDK repository is configured to publish the WebAPI container image (like a snapshot build) when a commit occurs on the dev branch.\\n\\nHowever, it suddenly stopped working after the .NET 8 upgrade.\\n\\nThe team investigated the logs (Fig. 2), as a container image for both AMD64 and Arm64 Linux in GitHub Actions with [docker/build-push-action](https://github.com/docker/build-push-action): a mysterious segmentation fault (SEGV) was occurring after the upgrade\u2026 the code was not changed,  `dotnet publish` was outside the scope.\\n\\n```\\n > [linux/arm64 build-env 4/6] RUN dotnet publish CarbonAware.WebApi/src/CarbonAware.WebApi.csproj -c Release -o publish:\\n7.209 MSBuild version 17.9.6+a4ecab324 for .NET\\n24.69   Determining projects to restore...\\n41.42 Segmentation fault (core dumped)\\n```\\n\\nFig.2 Logs in `dotnet publish` on GitHub Actions\\n\\nFurther investigation was done, and thanks to a [.NET blog](https://devblogs.microsoft.com/dotnet/improving-multiplatform-container-support/) about multi-platform container support, we identified that an unsupported approach was used for the build, and needed to be amended. More precisely, since .NET 6, QEMU static binaries were used to build container images for multi-platform.\\n\\nFortunately, the .NET blog guides how to build multi-platform container images, and the workflow was fixed accordingly in [Pull Request #498](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/498). So the WebAPI container image with .NET 8 can be pulled from [GitHub Packages](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/carbon-aware-sdk) now!\\n\\n# Use case in NTT / NTT DATA\\n\\nWhile NTT & NTT DATA have been contributing to the Carbon Aware SDK for a long time, we had not previously publicly referenced our [adoption of the tool](https://github.com/Green-Software-Foundation/carbon-aware-sdk/blob/dev/casdk-docs/docs/overview/adopters.md).\\n\\nThe Carbon Aware SDK v1.4.0 carbon metrics exporter (dependent on .NET8 upgrade) has increased the usefulness of the SDK due to increased visualization capabilities now available.\\n\\n## Carbon Intensity map\\n\\nThis feature facilitates integration with monitoring solutions like [Prometheus](https://prometheus.io/) and furthermore with a visualization solution like [Grafana](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/): unlocking geomap style visualization (showing metrics at specified locations on a map). By enabling the exporter and making some settings on Grafana, carbon intensities can be exported from Carbon Aware SDK to a geomap, this is part of a dashboard to monitor carbon emissions for software systems.\\n\\nThe Carbon Intensity can be intuitively visualized with size and colors on a geomap. Beyond raising awareness, this can guide decisions on location or time shift.\\n\\n![fig3](./fig3.png)\\n\\n## Green Dashboard for Kubernetes\\n\\nCarbon Aware SDK helps increase awareness around Carbon emission, and it is now possible to monitor carbon emission per application within Kubernetes.\\n\\nIn practice, each container\'s energy consumption is evaluated through [Kepler](https://www.cncf.io/projects/kepler/) (sandbox project in Cloud Native Cloud Foundation, [CNCF](https://www.cncf.io/)), and thanks to the Carbon Aware SDK, the carbon emission can be evaluated.\\n\\nAll those emission data from power grid can be accessed through the Prometheus exporter with the Carbon Aware SDK (starting v1.4.0), and visualized with the Grafana dashboard.\\n\\nThe power consumption, energy consumption, carbon emission, and SCI can be seen at a glance!\\n\\nOne of the upsides of micro-services architecture, as Kubernetes facilitates it, is to be able to work on different pieces of an application in a relatively independent fashion (maintaining, scaling, optimizing\u2026).\\n\\nThe Green Dashboard allows a team to check an application\'s global energy consumption and carbon emission (dashboard left side), while drilling down into sustainability-related metrics for each micro-service (dashboard right side).\\n\\nIt shows the SCI, allowing to get a sense of the rate of Carbon Emission down to a particular piece of an architecture (R being the [functional unit](https://learn.greensoftware.foundation/measurement/#software-carbon-intensity-specification) for that service - for example, an API call, the data is being shown per R unit or over an hour).\\n\\nWhile in monolithic application optimization needs customized instrumentation, and often have rippled effects, this green dashboard helps identify which micro-service refactoring would have the maximum impact on the application\'s carbon footprint, leveraging the team effort more efficiently.\\n\\n![fig4](./fig4.png)\\n\\n# Moving Forward\\n\\nWith the Cloud Computing expansion, and Kubernetes flexibility, more and more choices exist for running a workload. While business and economic constraints often lead those decisions, the carbon footprint is becoming an increasingly critical consideration.\\n\\nThis is a difficult endeavor, and the first step is to know where one stands, measure but also later evaluate and confirm what action would lead to improvement. That was one of the intentions behind the Green Dashboard for Kubernetes, and the Carbon Aware SDK 1.4 is a key element in this approach.\\n\\nBy providing a standard interface to the carbon emissions of the energy, the Carbon Aware SDK is a key element for IT sustainability: from evaluating current carbon footprint up to taking into account carbon intensity for geo or time shifting\u2026\\n\\nThanks to the community effort the first step is a click away with the [quickstarting guide](https://carbon-aware-sdk.greensoftware.foundation/docs/quickstart), available for everyone.\\n\\nNo excuse!"},{"id":"release-v1.3","metadata":{"permalink":"/blog/release-v1.3","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-02-13-release-1.3.mdx","source":"@site/blog/2024-02-13-release-1.3.mdx","title":"Release v1.3","description":"Release 1.3","date":"2024-02-13T00:00:00.000Z","tags":[{"inline":true,"label":"v1.3","permalink":"/blog/tags/v-1-3"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.835,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.3","title":"Release v1.3","tags":["v1.3","release"]},"unlisted":false,"prevItem":{"title":"Carbon Aware SDK 1.4, behind the scenes","permalink":"/blog/dotnet-8-upgrade"},"nextItem":{"title":"Release v1.2","permalink":"/blog/release-v1.2"}},"content":"Release 1.3\\n\\n\\n### Added \\n\\n- docs site at https://carbon-aware-sdk.greensoftware.foundation/\\n- [PR #464 Create SECURITY.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/464)\\n- [PR #461 CarbonHack24 Update to README.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/461)\\n- [PR #457 Features/codespaces quickstart ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/457)\\n- [PR #459 Readme updates for clarity ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/459)\\n- [PR #449 Support location source setting in Helm chart ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/449)\\n- [PR #431 Update documentation of Usefulness (adopters.md)  ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/431)\\n- [#416 Add disclaimer banner to any public-facing documentation (docusaurus webpage) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/416)\\n- [#415 Update documentation of secureness (security.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/415)\\n- [#414 Update documentation of Usefulness (adopters.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/414)\\n- [#413 Update documentation for Test Coverage ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/413)\\n- [#412 Update documentation for End User Guide (enablement.md) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/412)\\n- [#410 Update documentation for How to contribute (contributing.md ) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/410)\\n\\n### Fixed\\n\\n- [#344 [Bug]: Fix and update doc deployment workflow ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/344)                 \\n\\n### Changed\\n\\n- [#411 Update documentation for Project overview (ReadMe) ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/411)\\n- [PR #454 Update quickstart.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/454)\\n- [PR #453 Update overview.md ](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/453)\\n\\n#### API\\n\\n- \\n\\n#### API Deployment\\n\\n- \\n\\n#### SDK \\n\\n- \\n\\n\\n#### Other\\n\\n- \\n\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/474](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/474)"},{"id":"release-v1.2","metadata":{"permalink":"/blog/release-v1.2","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2024-01-14-release-1.2.mdx","source":"@site/blog/2024-01-14-release-1.2.mdx","title":"Release v1.2","description":"Added","date":"2024-01-14T00:00:00.000Z","tags":[{"inline":true,"label":"v1.2","permalink":"/blog/tags/v-1-2"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.425,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.2","title":"Release v1.2","tags":["v1.2","release"]},"unlisted":false,"prevItem":{"title":"Release v1.3","permalink":"/blog/release-v1.3"},"nextItem":{"title":"Release v1.1","permalink":"/blog/release-v1.1"}},"content":"### Added \\n\\n- [#381 Add Helm chart and workflow](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/381)\\n- New package release for Helm charts available at https://github.com/Green-Software-Foundation/carbon-aware-sdk/pkgs/container/charts%2Fcarbon-aware-sdk\\n\\n### Fixed\\n\\n- [#232 Generating SDK client does not work on linux](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232)\\n- [#393 Fix: verify-azure-function-with-packages](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/393)\\n- [#391 fixing 3 broken links in overview.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/391)\\n- [#389 EMFree data source should regard specified time range](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/389)\\n\\n### Changed\\n\\n- [#425 Updating CONTRIBUTING.md](https://github.com/Green-Software-Foundation/carbon-aware-sdk/pull/425)\\n\\n#### API\\n\\n- \\n\\n#### API Deployment\\n\\n- \\n\\n#### SDK \\n\\n- \\n\\n\\n#### Other\\n\\n- Improved process leveraging the project boards at https://github.com/orgs/Green-Software-Foundation/projects/15/views/2\\n\\n\\nFor more details, checkout [https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues/232](https://github.com/Green-Software-Foundation/carbon-aware-sdk/issues?q=label%3Av1.2+is%3Aclosed+)"},{"id":"release-v1.1","metadata":{"permalink":"/blog/release-v1.1","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2023-07-18-release-1.1.mdx","source":"@site/blog/2023-07-18-release-1.1.mdx","title":"Release v1.1","description":"Added","date":"2023-07-18T00:00:00.000Z","tags":[{"inline":true,"label":"v1.1","permalink":"/blog/tags/v-1-1"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.1","title":"Release v1.1","tags":["v1.1","release"]},"unlisted":false,"prevItem":{"title":"Release v1.2","permalink":"/blog/release-v1.2"},"nextItem":{"title":"Release v1.0","permalink":"/blog/release-v1.0"}},"content":"### Added \\n\\n- Added Electricity Maps (paid api) support for forecasting and historical data.  \\n- Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities. \\n\\n### Fixed\\n\\n- Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time.\\n- Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent.\\n- Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure. \\n- Fixes some bugs in unit tests with uncaught scenarios, or faulty tests.\\n\\n### Changed\\n\\n- No previous API\'s were changed.  \\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n- Time is now always in UTC.  Previously the API may have returned local time depending on underlying API.\\n\\n#### API\\n\\n- `/locations` - Show the list of configured named locations that can be used in the API.\\n- `/api/v1/swagger.yaml` - Provides OpenAPI document now at public endpoint when deployed.\\n\\n#### API Deployment\\n\\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n\\n#### SDK \\n\\n- SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability.\\n- Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information.\\n- Additional tests across the SDK have been added.\\n- Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing.\\n\\n\\n#### Other\\n\\n- All contributors need to signoff commits for contribution using `git commit -s`.\\n- Added PR release workflow improvements for the project management of the CA SDK project team.\\n- Updated the project to prune stale PR\'s and issues to help with the management of the CA SDK project.\\n\\n\\n### Upgrading from 1.0.0 to 1.1.0 \\n\\n- Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - [Configuration](../docs/tutorial-extras/configuration) for a guide. The following is provided as an example of the new data source configuration format.\\n```json\\n{\\n  \\"DataSources\\": {\\n    \\"EmissionsDataSource\\": \\"Json\\",\\n    \\"ForecastDataSource\\": \\"WattTime\\",\\n    \\"Configurations\\": {\\n      \\"WattTime\\": {\\n        \\"Type\\": \\"WattTime\\",\\n        \\"Username\\": \\"username\\",\\n        \\"Password\\": \\"password\\",\\n        \\"BaseURL\\": \\"https://api2.watttime.org/v2/\\",\\n        \\"Proxy\\": {\\n          \\"useProxy\\": true,\\n          \\"url\\": \\"http://10.10.10.1\\",\\n          \\"username\\": \\"proxyUsername\\",\\n          \\"password\\": \\"proxyPassword\\"\\n        }\\n      },\\n      \\"ElectricityMaps\\": {\\n        \\"Type\\": \\"ElectricityMaps\\",\\n        \\"APITokenHeader\\": \\"auth-token\\",\\n        \\"APIToken\\": \\"myAwesomeToken\\",\\n        \\"BaseURL\\": \\"https://api.electricitymap.org/v3/\\"\\n      },\\n      \\"Json\\": {\\n        \\"Type\\": \\"Json\\",\\n        \\"DataFileLocation\\": \\"test-data-azure-emissions.json\\"\\n      }\\n    }\\n  }\\n}\\n```"},{"id":"release-v1.0","metadata":{"permalink":"/blog/release-v1.0","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2022-10-01-release-1.0.mdx","source":"@site/blog/2022-10-01-release-1.0.mdx","title":"Release v1.0","description":"Added","date":"2022-10-01T00:00:00.000Z","tags":[{"inline":true,"label":"v1.0","permalink":"/blog/tags/v-1-0"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"release-v1.0","title":"Release v1.0","tags":["v1.0","release"]},"unlisted":false,"prevItem":{"title":"Release v1.1","permalink":"/blog/release-v1.1"},"nextItem":{"title":"Welcome to the Carbon Aware SDK documentation site","permalink":"/blog/welcome"}},"content":"### Added \\n\\n- Added Electricity Maps (paid api) support for forecasting and historical data.  \\n- Added ElectricityMaps (free api) support for historical data.  Note that this API does not support forecast capabilities. \\n\\n### Fixed\\n\\n- Fixed generated test data that had time bomb bug that was in test data, which caused integration tests to fail.  This is now automatically generated each time.\\n- Fixed some bugs that related to underlying data source errors surfacing as HTTP 500 errors from the API.  These should now be more consistent.\\n- Fixed an issue where UTF-8 passwords were encoded as ASCII for WattTime API, causing integration failure. \\n- Fixes some bugs in unit tests with uncaught scenarios, or faulty tests.\\n\\n### Changed\\n\\n- No previous API\'s were changed.  \\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n- Time is now always in UTC.  Previously the API may have returned local time depending on underlying API.\\n\\n#### API\\n\\n- `/locations` - Show the list of configured named locations that can be used in the API.\\n- `/api/v1/swagger.yaml` - Provides OpenAPI document now at public endpoint when deployed.\\n\\n#### API Deployment\\n\\n- Configuration has changed.  Refer to upgrading from 1.0.0 to 1.1.0 below.\\n\\n#### SDK \\n\\n- SDK was abstracted to provide a library for DLL import usage, which now allows users to use the SDK in their projects directly without the need to deploy an API.  This is useful in scenarios where the API can not be centralised.  Note - we still highly recommend centralising for management of the API and audit capabilities with observability.\\n- Functionality for forecast and historical data have been seperated into seperate interfaces.  This impacts configuration, see upgrading from 1.0.0 to 1.1.0 for more information.\\n- Additional tests across the SDK have been added.\\n- Aggregation tier in the SDK was removed, this should not impact users of the SDK, but may impact maintainers who were actively contributing.\\n\\n\\n#### Other\\n\\n- All contributors need to signoff commits for contribution using `git commit -s`.\\n- Added PR release workflow improvements for the project management of the CA SDK project team.\\n- Updated the project to prune stale PR\'s and issues to help with the management of the CA SDK project.\\n\\n\\n### Upgrading from 1.0.0 to 1.1.0 \\n\\n- Configuration changes are required due to historical and forecast configuration now being decoupled.  Refer to - [Configuration](../docs/tutorial-extras/configuration) for a guide. The following is provided as an example of the new data source configuration format.\\n```json\\n{\\n  \\"DataSources\\": {\\n    \\"EmissionsDataSource\\": \\"Json\\",\\n    \\"ForecastDataSource\\": \\"WattTime\\",\\n    \\"Configurations\\": {\\n      \\"WattTime\\": {\\n        \\"Type\\": \\"WattTime\\",\\n        \\"Username\\": \\"username\\",\\n        \\"Password\\": \\"password\\",\\n        \\"BaseURL\\": \\"https://api2.watttime.org/v2/\\",\\n        \\"Proxy\\": {\\n          \\"useProxy\\": true,\\n          \\"url\\": \\"http://10.10.10.1\\",\\n          \\"username\\": \\"proxyUsername\\",\\n          \\"password\\": \\"proxyPassword\\"\\n        }\\n      },\\n      \\"ElectricityMaps\\": {\\n        \\"Type\\": \\"ElectricityMaps\\",\\n        \\"APITokenHeader\\": \\"auth-token\\",\\n        \\"APIToken\\": \\"myAwesomeToken\\",\\n        \\"BaseURL\\": \\"https://api.electricitymap.org/v3/\\"\\n      },\\n      \\"Json\\": {\\n        \\"Type\\": \\"Json\\",\\n        \\"DataFileLocation\\": \\"test-data-azure-emissions.json\\"\\n      }\\n    }\\n  }\\n}\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Green-Software-Foundation/carbon-aware-sdk/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome to the Carbon Aware SDK documentation site","description":"Carbon aware software does more when it can leverage greener energy sources, and less when the energy CO2 emissions are higher.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":true,"label":"welcome","permalink":"/blog/tags/welcome"},{"inline":true,"label":"post","permalink":"/blog/tags/post"}],"readingTime":1.245,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome to the Carbon Aware SDK documentation site","tags":["welcome","post"]},"unlisted":false,"prevItem":{"title":"Release v1.0","permalink":"/blog/release-v1.0"}},"content":"Carbon aware software does more when it can leverage greener energy sources, and less when the energy CO2 emissions are higher.  \\n\\nThe Carbon Aware SDK is a toolset to help you measure the carbon emissions of your software, in turn helping you **measure and reduce your software\'s carbon emissions**, and choose when and where you run your software to make it greener.\\n\\n![Carbon Aware Software](./carbon-aware-software.png)\\n\\n\\nBy knowing the carbon emissions of the energy that powers your applications, you and your organisation can leverage greener energy sources to reduce your CO2 emissions by:  \\n\\n* Building  AI models when carbon emissions are lower\\n* Deploying software into the cloud in locations that have greener energy sources\\n* Running software updates at greener energy time windows \\n* Using data to run hypothetical models to understand how you could start driving impact and reduce emissions, drive business cases for change, and create a greener future. \\n\\nWithin the [Green Software Foundations Theory of Change](https://greensoftware.foundation/articles/theory-of-change), we look at 3 pillars, that being **Knowledge**, **Tech Culture**, and **Tooling** as focus areas to drive this change.  The Carbon Aware SDK at its core sits firmly in the **Tooling** pillar, and also supports the other pillars, providing **Knowledge** through emissions data to inform change, and being core enabler for the **Tech Culture** for building carbon aware software.\\n\\nCompanies including UBS and Vestas have already deployed the Carbon Aware SDK to build greener software, and you can too!\\n\\n_Published in feb 2024 based on latest updates to the readme.md_"}]}}')}}]);