# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [2.1.6](https://github.com/rokucommunity/release-testing/compare/2.1.5...v2.1.6) - 2025-05-08
### Changed
 - Update publish-release.yml ([d0988b3](https://github.com/rokucommunity/release-testing/commit/d0988b3))
 - Update make-release-artifacts.yml ([b1cab72](https://github.com/rokucommunity/release-testing/commit/b1cab72))
 - Update initialize-release.yml ([1e83adc](https://github.com/rokucommunity/release-testing/commit/1e83adc))
 - Update publish-release.yml ([e8f72b4](https://github.com/rokucommunity/release-testing/commit/e8f72b4))
 - Update make-release-artifacts.yml ([73719e4](https://github.com/rokucommunity/release-testing/commit/73719e4))
 - Update initialize-release.yml ([f6b1f94](https://github.com/rokucommunity/release-testing/commit/f6b1f94))
 - Create publish-release.yml ([c6246f3](https://github.com/rokucommunity/release-testing/commit/c6246f3))
 - Create make-release-artifacts.yml ([d30fbfd](https://github.com/rokucommunity/release-testing/commit/d30fbfd))
 - Update initialize-release.yml ([c6d752e](https://github.com/rokucommunity/release-testing/commit/c6d752e))
 - Create initialize-release.yml ([e6bf7f1](https://github.com/rokucommunity/release-testing/commit/e6bf7f1))
 - Create delete-release.yml ([c635713](https://github.com/rokucommunity/release-testing/commit/c635713))
 - Delete .github/workflows directory ([35c38a6](https://github.com/rokucommunity/release-testing/commit/35c38a6))
 - Remove fork guard ([a0457fb](https://github.com/rokucommunity/release-testing/commit/a0457fb))
 - Add check at template levelto prevent forks from triggering this workflow ([b2189fd](https://github.com/rokucommunity/release-testing/commit/b2189fd))
 - Upgrading to brighterscript 0.67.8 ([615df1e](https://github.com/rokucommunity/release-testing/commit/615df1e))
 - upgrade to [brighterscript@0.69.8](https://github.com/rokucommunity/brighterscript/blob/master/CHANGELOG.md#0698---2025-05-05). Notable changes since 0.67.0:
     - Shared CI Support Prerelease ([brighterscript#1483](https://github.com/rokucommunity/brighterscript/pull/1483))
     - Shared CI Support Prerelease ([brighterscript#1475](https://github.com/rokucommunity/brighterscript/pull/1475))
     - Prevent runtime crash for non-referencable funcs in ternary and null coalescing ([brighterscript#1474](https://github.com/rokucommunity/brighterscript/pull/1474))
     - Fix `removeParameterTypes` compile errors for return types ([brighterscript#1414](https://github.com/rokucommunity/brighterscript/pull/1414))
     - Remove `npm ci` from the `package` npm script since it's redundant ([brighterscript#1461](https://github.com/rokucommunity/brighterscript/pull/1461))
     - Flag incorrect return statements in functions and subs ([brighterscript#1463](https://github.com/rokucommunity/brighterscript/pull/1463))
     - Updated the type definition of the `InStr` global callable ([brighterscript#1456](https://github.com/rokucommunity/brighterscript/pull/1456))
     - More safely wrap expressions for template string transpile ([brighterscript#1445](https://github.com/rokucommunity/brighterscript/pull/1445))
     - Migration to the new shared CI ([brighterscript#1440](https://github.com/rokucommunity/brighterscript/pull/1440))
     - Support plugin factory detecting brighterscript version ([brighterscript#1438](https://github.com/rokucommunity/brighterscript/pull/1438))
     - Fixed getClosestExpression bug to return undefined when position not found ([brighterscript#1433](https://github.com/rokucommunity/brighterscript/pull/1433))
     - Adds Alias statement syntax from v1 to v0 ([brighterscript#1430](https://github.com/rokucommunity/brighterscript/pull/1430))
     - Remove temporary code that was accidentally committed ([brighterscript#1432](https://github.com/rokucommunity/brighterscript/pull/1432))
     - Significantly improve the performance of standardizePath ([brighterscript#1425](https://github.com/rokucommunity/brighterscript/pull/1425))
     - Bump @babel/runtime from 7.24.5 to 7.26.10 ([brighterscript#1426](https://github.com/rokucommunity/brighterscript/pull/1426))
     - Backport v1 typecast syntax to v0 ([brighterscript#1421](https://github.com/rokucommunity/brighterscript/pull/1421))
     - Prevent running the lsp project in a worker thread ([brighterscript#1423](https://github.com/rokucommunity/brighterscript/pull/1423))
     - Language Server Rewrite ([brighterscript#993](https://github.com/rokucommunity/brighterscript/pull/993))
     - Add `validate` flag to ProgramBuilder.run() ([brighterscript#1409](https://github.com/rokucommunity/brighterscript/pull/1409))
     - Fix class transpile issue with child class constructor not inherriting parent params ([brighterscript#1390](https://github.com/rokucommunity/brighterscript/pull/1390))
     - Export more items ([brighterscript#1394](https://github.com/rokucommunity/brighterscript/pull/1394))
     - Add more convenience exports from vscode-languageserver ([brighterscript#1359](https://github.com/rokucommunity/brighterscript/pull/1359))
     - Fix bug with ternary transpile for indexed set ([brighterscript#1357](https://github.com/rokucommunity/brighterscript/pull/1357))
     - Bump cross-spawn from 7.0.3 to 7.0.6 in /benchmarks ([brighterscript#1349](https://github.com/rokucommunity/brighterscript/pull/1349))
     - Add Namespace Source Literals ([brighterscript#1353](https://github.com/rokucommunity/brighterscript/pull/1353))
     - [Proposal] Add Namespace Source Literals ([brighterscript#1354](https://github.com/rokucommunity/brighterscript/pull/1354))
     - Enhance lexer to support long numeric literals with type designators ([brighterscript#1351](https://github.com/rokucommunity/brighterscript/pull/1351))
     - Fix issues with the ast walkArray function ([brighterscript#1347](https://github.com/rokucommunity/brighterscript/pull/1347))
     - Optimize ternary transpilation for assignments ([brighterscript#1341](https://github.com/rokucommunity/brighterscript/pull/1341))
     - Fix namespace-relative transpile bug for standalone file ([brighterscript#1324](https://github.com/rokucommunity/brighterscript/pull/1324))
     - Update README.md with "help" items ([brighterscript#3abcdaf3](https://github.com/rokucommunity/brighterscript/commit/3abcdaf3))
     - Prevent crash when ProgramBuilder.run called with no options ([brighterscript#1316](https://github.com/rokucommunity/brighterscript/pull/1316))
     - Ast node clone ([brighterscript#1281](https://github.com/rokucommunity/brighterscript/pull/1281))
     - Bump micromatch from 4.0.5 to 4.0.8 in /benchmarks ([brighterscript#1295](https://github.com/rokucommunity/brighterscript/pull/1295))
     - Bump micromatch from 4.0.4 to 4.0.8 ([brighterscript#1292](https://github.com/rokucommunity/brighterscript/pull/1292))
     - Add support for resolving sourceRoot at time of config load ([brighterscript#1290](https://github.com/rokucommunity/brighterscript/pull/1290))
     - Add support for roIntrinsicDouble ([brighterscript#1291](https://github.com/rokucommunity/brighterscript/pull/1291))
     - Add plugin naming convention ([brighterscript#1284](https://github.com/rokucommunity/brighterscript/pull/1284))
     - Bump requirejs from 2.3.6 to 2.3.7 ([brighterscript#1269](https://github.com/rokucommunity/brighterscript/pull/1269))
     - Add templatestring support for annotation.getArguments() ([brighterscript#1264](https://github.com/rokucommunity/brighterscript/pull/1264))
     - Update Digitial Picture Frame url and img ([brighterscript#1237](https://github.com/rokucommunity/brighterscript/pull/1237))
     - Fix crash with missing scope ([brighterscript#1234](https://github.com/rokucommunity/brighterscript/pull/1234))
     - Bump braces from 3.0.2 to 3.0.3 in /benchmarks ([brighterscript#1229](https://github.com/rokucommunity/brighterscript/pull/1229))
     - fix: conform bsconfig.schema.json to strict types ([brighterscript#1205](https://github.com/rokucommunity/brighterscript/pull/1205))
     - Flag using devDependency in production code ([brighterscript#1222](https://github.com/rokucommunity/brighterscript/pull/1222))
     - Fix crash with optional chaining in signature help ([brighterscript#1207](https://github.com/rokucommunity/brighterscript/pull/1207))
     - Logger nocolor ([brighterscript#1189](https://github.com/rokucommunity/brighterscript/pull/1189))
     - Fix crash when diagnostic is missing range ([brighterscript#1174](https://github.com/rokucommunity/brighterscript/pull/1174))



## [2.1.5](https://github.com/rokucommunity/release-testing/compare/2.1.4...v2.1.5) - 2025-05-06
### Changed
 - Add brighterscript 0.67.0 ([f2e1ec5](https://github.com/rokucommunity/release-testing/commit/f2e1ec5))



## [2.1.3](https://github.com/rokucommunity/release-testing/compare/2.1.2...v2.1.3) - 2025-04-24
### Changed
 - Merge pull request #73 from rokucommunity/release/2.1.2 ([cf8e50d](https://github.com/rokucommunity/release-testing/commit/cf8e50d))



## [2.1.2](https://github.com/rokucommunity/release-testing/compare/2.1.1...v2.1.2) - 2025-04-23
### Changed
 - Merge pull request #72 from rokucommunity/release/2.1.1 ([e642714](https://github.com/rokucommunity/release-testing/commit/e642714))



## [2.1.1](https://github.com/rokucommunity/release-testing/compare/2.1.0...v2.1.1) - 2025-04-23
### Changed
 - Merge pull request #70 from rokucommunity/release/2.1.0 ([6d99143](https://github.com/rokucommunity/release-testing/commit/6d99143))



## [2.1.0](https://github.com/rokucommunity/release-testing/compare/2.0.1...v2.1.0) - 2025-04-22
### Changed
 - Merge pull request #69 from rokucommunity/release/2.0.1 ([38aae9b](https://github.com/rokucommunity/release-testing/commit/38aae9b))



## [2.0.1](https://github.com/rokucommunity/release-testing/compare/2.0.0...v2.0.1) - 2025-04-22
### Changed
 - Merge pull request #63 from rokucommunity/release/2.0.0 ([50cf977](https://github.com/rokucommunity/release-testing/commit/50cf977))



## [2.0.0](https://github.com/rokucommunity/release-testing/compare/v1.2.6...v2.0.0) - 2025-04-22
### Changed
 - Remove preid ([fd4a3d6](https://github.com/rokucommunity/release-testing/commit/fd4a3d6))
 - Merge branch 'master' into v2 ([4a36688](https://github.com/rokucommunity/release-testing/commit/4a36688))
 - Merge branch 'master' into v2 ([2051c71](https://github.com/rokucommunity/release-testing/commit/2051c71))
 - Merge pull request #59 from rokucommunity/release/2.0.0-alpha.3 ([2f111b0](https://github.com/rokucommunity/release-testing/commit/2f111b0))
 - Increment version to 1.2.4 ([8b80ce6](https://github.com/rokucommunity/release-testing/commit/8b80ce6))
 - Merge pull request #57 from rokucommunity/release/2.0.0-alpha.2 ([8c519fc](https://github.com/rokucommunity/release-testing/commit/8c519fc))
 - Resolve merge conflict ([edea63b](https://github.com/rokucommunity/release-testing/commit/edea63b))
 - Merge pull request #56 from rokucommunity/release/2.0.0-alpha.1 ([2856db1](https://github.com/rokucommunity/release-testing/commit/2856db1))
 - Merge pull request #54 from rokucommunity/release/2.0.0-alpha.0 ([8188b5f](https://github.com/rokucommunity/release-testing/commit/8188b5f))



## [2.0.0-alpha.3](https://github.com/rokucommunity/release-testing/compare/v1.2.4...v2.0.0-alpha.3) - 2025-04-18
### Changed
 - Increment version to 1.2.4 ([8b80ce6](https://github.com/rokucommunity/release-testing/commit/8b80ce6))
 - Increment version to 1.2.4 ([a806921](https://github.com/rokucommunity/release-testing/commit/a806921))
 - Merge pull request #57 from rokucommunity/release/2.0.0-alpha.2 ([8c519fc](https://github.com/rokucommunity/release-testing/commit/8c519fc))
 - Resolve merge conflict ([edea63b](https://github.com/rokucommunity/release-testing/commit/edea63b))
 - Merge pull request #56 from rokucommunity/release/2.0.0-alpha.1 ([2856db1](https://github.com/rokucommunity/release-testing/commit/2856db1))
 - Merge pull request #54 from rokucommunity/release/2.0.0-alpha.0 ([8188b5f](https://github.com/rokucommunity/release-testing/commit/8188b5f))



## [2.0.0-alpha.2](https://github.com/rokucommunity/release-testing/compare/v1.2.3...v2.0.0-alpha.2) - 2025-04-18
### Changed
 - Resolve merge conflict ([edea63b](https://github.com/rokucommunity/release-testing/commit/edea63b))
 - Merge pull request #56 from rokucommunity/release/2.0.0-alpha.1 ([2856db1](https://github.com/rokucommunity/release-testing/commit/2856db1))
 - Merge pull request #54 from rokucommunity/release/2.0.0-alpha.0 ([8188b5f](https://github.com/rokucommunity/release-testing/commit/8188b5f))



## [2.0.0-alpha.1](https://github.com/rokucommunity/release-testing/compare/v1.2.3...v2.0.0-alpha.1) - 2025-04-18
### Changed
 - Increment version to 1.2.3 ([1121331](https://github.com/rokucommunity/release-testing/commit/1121331))
 - Merge pull request #54 from rokucommunity/release/2.0.0-alpha.0 ([8188b5f](https://github.com/rokucommunity/release-testing/commit/8188b5f))



## [1.2.6](https://github.com/rokucommunity/release-testing/compare/v1.2.5...v1.2.6) - 2025-04-18
### Changed
 - Merge pull request #60 from rokucommunity/release/1.2.5 ([8180c9c](https://github.com/rokucommunity/release-testing/commit/8180c9c))



## [1.2.5](https://github.com/rokucommunity/release-testing/compare/v1.2.4...v1.2.5) - 2025-04-18
### Changed
 - Merge pull request #58 from rokucommunity/release/1.2.4 ([f917053](https://github.com/rokucommunity/release-testing/commit/f917053))



## [1.2.4](https://github.com/rokucommunity/release-testing/compare/v1.2.3...v1.2.4) - 2025-04-18
### Changed
 - Merge pull request #55 from rokucommunity/release/1.2.3 ([9da5832](https://github.com/rokucommunity/release-testing/commit/9da5832))



## [1.2.2](https://github.com/rokucommunity/release-testing/compare/v1.2.1...v1.2.2) - 2025-04-17
### Changed
 - Set the preid to not be required so that it can be an empty string ([0ef847f](https://github.com/rokucommunity/release-testing/commit/0ef847f))
 - Merge pull request #49 from rokucommunity/use-develop ([cd7fd50](https://github.com/rokucommunity/release-testing/commit/cd7fd50))
 - Create initialize-release.yml ([86c14b2](https://github.com/rokucommunity/release-testing/commit/86c14b2))
 - Delete .github/workflows/initialize-release.yml ([c77ab56](https://github.com/rokucommunity/release-testing/commit/c77ab56))
 - Remove word from marker ([6aa6095](https://github.com/rokucommunity/release-testing/commit/6aa6095))
 - Revert "Remove changes from the changelog" ([111caa4](https://github.com/rokucommunity/release-testing/commit/111caa4))
 - Remove changes from the changelog ([a68ab35](https://github.com/rokucommunity/release-testing/commit/a68ab35))
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).



## [1.2.1](https://github.com/rokucommunity/release-testing/compare/v1.2.0...v1.2.1) - 2025-04-10
### Changed
 - Add new line to end of file ([87b7d4a](https://github.com/rokucommunity/release-testing/commit/87b7d4a))
 - Just testing empty commits ([da4de15](https://github.com/rokucommunity/release-testing/commit/da4de15))



## [1.2.0](https://github.com/rokucommunity/release-testing/compare/v1.1.4...v1.2.0) - 2025-04-08
### Changed
 - Use the workflows-ref ([2cec60d](https://github.com/rokucommunity/release-testing/commit/2cec60d))
 - Merge pull request #38 from rokucommunity/release/1.1.5 ([ea02e84](https://github.com/rokucommunity/release-testing/commit/ea02e84))
 - Update ref to workflows-ref. Fix indentation ([a858c16](https://github.com/rokucommunity/release-testing/commit/a858c16))



## [1.1.5](https://github.com/rokucommunity/release-testing/compare/v1.1.4...v1.1.5) - 2025-04-08
### Changed
 - Update ref to workflows-ref. Fix indentation ([a858c16](https://github.com/rokucommunity/release-testing/commit/a858c16))



## [1.1.4](https://github.com/rokucommunity/release-testing/compare/v1.1.3...v1.1.4) - 2025-04-08
### Changed
 - Use - instead of _ for the package.json name ([2c36156](https://github.com/rokucommunity/release-testing/commit/2c36156))
 - Fix up ([51e61e9](https://github.com/rokucommunity/release-testing/commit/51e61e9))
 - Change the dispatchable call to use the develop branch ([41e63bc](https://github.com/rokucommunity/release-testing/commit/41e63bc))



## [1.1.2](https://github.com/rokucommunity/release-testing/compare/v1.1.1...v1.1.2) - 2025-04-01
### Changed
 - Update publish-release.yml ([2badcc3](https://github.com/rokucommunity/release-testing/commit/2badcc3))



## [1.1.1](https://github.com/rokucommunity/release-testing/compare/c4f4eaf897e85a7e09d470991faed2ba2544330a...v1.1.1) - 2025-04-01
### Changed
 - Create make-release-artifacts.yml ([8ab4de8](https://github.com/rokucommunity/release-testing/commit/8ab4de8))
 - Delete .github/workflows/make-release-artifacts.yml ([bde38f4](https://github.com/rokucommunity/release-testing/commit/bde38f4))
 - This is a test commit ([f9bfacd](https://github.com/rokucommunity/release-testing/commit/f9bfacd))
 - Create publish-release.yml ([75ff80d](https://github.com/rokucommunity/release-testing/commit/75ff80d))
 - Create make-release-artifacts.yml ([1462f0f](https://github.com/rokucommunity/release-testing/commit/1462f0f))
 - Create initialize-release.yml ([3e533d9](https://github.com/rokucommunity/release-testing/commit/3e533d9))
 - Create delete-release.yml ([b9ea4d2](https://github.com/rokucommunity/release-testing/commit/b9ea4d2))
 - Delete .github/workflows directory ([501b522](https://github.com/rokucommunity/release-testing/commit/501b522))
 - Merge pull request #25 from rokucommunity/release/1.1.0 ([898d651](https://github.com/rokucommunity/release-testing/commit/898d651))
 - Delete .github/workflows/create-release-artifacts.yml ([5a567cb](https://github.com/rokucommunity/release-testing/commit/5a567cb))
 - Create make-release-artifacts.yml ([0ae9039](https://github.com/rokucommunity/release-testing/commit/0ae9039))
 - Merge pull request #23 from rokucommunity/release/1.0.5 ([30674e1](https://github.com/rokucommunity/release-testing/commit/30674e1))
 - Create a package that matches the workflows artifact-paths ([45e654a](https://github.com/rokucommunity/release-testing/commit/45e654a))
 - Use the correct package script ([eb039a3](https://github.com/rokucommunity/release-testing/commit/eb039a3))
 - Create initialize-release.yml ([83dfae6](https://github.com/rokucommunity/release-testing/commit/83dfae6))
 - Create create-release-artifacts.yml ([0e5a593](https://github.com/rokucommunity/release-testing/commit/0e5a593))
 - Delete .github/workflows/initialize-release.yml ([29df165](https://github.com/rokucommunity/release-testing/commit/29df165))
 - Delete .github/workflows/create-release-artifacts.yml ([19dabd7](https://github.com/rokucommunity/release-testing/commit/19dabd7))
 - Merge pull request #20 from rokucommunity/add-template-workflows ([facb1d4](https://github.com/rokucommunity/release-testing/commit/facb1d4))
 - Delete .github/workflows directory ([d2ed2b1](https://github.com/rokucommunity/release-testing/commit/d2ed2b1))
 - Revert "Use a different path for the shared workflows" ([6495e18](https://github.com/rokucommunity/release-testing/commit/6495e18))
 - Use a different path for the shared workflows ([ba4d1d6](https://github.com/rokucommunity/release-testing/commit/ba4d1d6))
 - Create publish-release.yml ([75996ab](https://github.com/rokucommunity/release-testing/commit/75996ab))
 - Create initialize-release.yml ([9a578d1](https://github.com/rokucommunity/release-testing/commit/9a578d1))
 - Create delete-release.yml ([4ea4627](https://github.com/rokucommunity/release-testing/commit/4ea4627))
 - Create create-release-artifacts.yml ([8e48c01](https://github.com/rokucommunity/release-testing/commit/8e48c01))
 - Delete .github/workflows directory ([c419801](https://github.com/rokucommunity/release-testing/commit/c419801))
 - Added CHANGELOG ([324f0cc](https://github.com/rokucommunity/release-testing/commit/324f0cc))
 - Create create-release-artifacts.yml ([74fcd31](https://github.com/rokucommunity/release-testing/commit/74fcd31))
 - Delete .github/workflows/create-release-artifacts.yml ([e1bad86](https://github.com/rokucommunity/release-testing/commit/e1bad86))
 - Create publish-release.yml ([a67ff1c](https://github.com/rokucommunity/release-testing/commit/a67ff1c))
 - Create initialize-release.yml ([6a3c2e5](https://github.com/rokucommunity/release-testing/commit/6a3c2e5))
 - Create delete-release.yml ([b34fc81](https://github.com/rokucommunity/release-testing/commit/b34fc81))
 - Create create-release-artifacts.yml ([17f76cd](https://github.com/rokucommunity/release-testing/commit/17f76cd))
 - Delete .github/workflows directory ([72c6212](https://github.com/rokucommunity/release-testing/commit/72c6212))
 - Create on-update-build-release.yml ([c68cd5d](https://github.com/rokucommunity/release-testing/commit/c68cd5d))
 - Delete .github/workflows/on-update-build-release.yml ([89a1697](https://github.com/rokucommunity/release-testing/commit/89a1697))
 - Create on-update-build-release.yml ([293b8b2](https://github.com/rokucommunity/release-testing/commit/293b8b2))
 - Delete .github/workflows/on-update-build-release.yml ([1382321](https://github.com/rokucommunity/release-testing/commit/1382321))
 - Create on-update-build-release.yml ([e845a11](https://github.com/rokucommunity/release-testing/commit/e845a11))
 - Create on-merge-publish-release.yml ([87abee1](https://github.com/rokucommunity/release-testing/commit/87abee1))
 - Create on-dispatch-stage-release.yml ([80b7da2](https://github.com/rokucommunity/release-testing/commit/80b7da2))
 - Create on-dispatch-delete-release.yml ([3210ade](https://github.com/rokucommunity/release-testing/commit/3210ade))
 - Delete .github/workflows directory ([a231e4c](https://github.com/rokucommunity/release-testing/commit/a231e4c))
 - Delete .github/workflows/on-dispatch-delete-release.yml ([885062f](https://github.com/rokucommunity/release-testing/commit/885062f))
 - Create on-dispatch-stage-release.yml ([c4c9f60](https://github.com/rokucommunity/release-testing/commit/c4c9f60))
 - Create on-dispatch-delete-release.yml ([8aa3184](https://github.com/rokucommunity/release-testing/commit/8aa3184))
 - Delete .github/workflows/on-dispatch-stage-release.yml ([b928092](https://github.com/rokucommunity/release-testing/commit/b928092))
 - Delete .github/workflows/on-dispatch-delete-release.yml ([57d76cd](https://github.com/rokucommunity/release-testing/commit/57d76cd))
 - Create on-dispatch-delete-release.yml ([97cef5a](https://github.com/rokucommunity/release-testing/commit/97cef5a))
 - Create on-update-build-release.yml ([71f7515](https://github.com/rokucommunity/release-testing/commit/71f7515))
 - Delete .github/workflows/on-update-build-release.yml ([133fae1](https://github.com/rokucommunity/release-testing/commit/133fae1))
 - Add default scripts for CI ([969c140](https://github.com/rokucommunity/release-testing/commit/969c140))
 - Create on-update-build-release.yml ([44e58db](https://github.com/rokucommunity/release-testing/commit/44e58db))
 - Remove old stage workflow ([a0191b1](https://github.com/rokucommunity/release-testing/commit/a0191b1))
 - Remove redundant workflows ([68b0596](https://github.com/rokucommunity/release-testing/commit/68b0596))
 - Create on-merge-publish-release.yml ([69b118a](https://github.com/rokucommunity/release-testing/commit/69b118a))
 - Create on-dispatch-stage-release.yml ([409091c](https://github.com/rokucommunity/release-testing/commit/409091c))
 - Merge pull request #6 from rokucommunity/release/1.0.4 ([8b66d8e](https://github.com/rokucommunity/release-testing/commit/8b66d8e))
 - Merge pull request #5 from rokucommunity/release/1.0.3 ([28ae4fe](https://github.com/rokucommunity/release-testing/commit/28ae4fe))
 - Merge pull request #4 from rokucommunity/release/1.0.2 ([ec3bf02](https://github.com/rokucommunity/release-testing/commit/ec3bf02))
 - Rename workflow ([0c31cad](https://github.com/rokucommunity/release-testing/commit/0c31cad))
 - Merge pull request #2 from rokucommunity/release/1.0.1 ([ff1ef0e](https://github.com/rokucommunity/release-testing/commit/ff1ef0e))
 - test publish ([08eb1cc](https://github.com/rokucommunity/release-testing/commit/08eb1cc))
 - Add test workflows ([e4ad82c](https://github.com/rokucommunity/release-testing/commit/e4ad82c))
 - Test ([7c1b343](https://github.com/rokucommunity/release-testing/commit/7c1b343))
 - Test ([c44d06d](https://github.com/rokucommunity/release-testing/commit/c44d06d))
 - Add code to see if this makes my repo look at like a repo while running a workflow ([8fb1468](https://github.com/rokucommunity/release-testing/commit/8fb1468))
 - init npm ([23b5079](https://github.com/rokucommunity/release-testing/commit/23b5079))
 - Create stage-release-dispatcher.yml ([9f96c15](https://github.com/rokucommunity/release-testing/commit/9f96c15))
 - remove workflow ([2205f2e](https://github.com/rokucommunity/release-testing/commit/2205f2e))
 - Go back to correct path ([21197c8](https://github.com/rokucommunity/release-testing/commit/21197c8))
 - Change target workflow path ([bf137f7](https://github.com/rokucommunity/release-testing/commit/bf137f7))
