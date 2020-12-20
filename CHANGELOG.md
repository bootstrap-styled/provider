## [2.0.3](https://github.com/bootstrap-styled/provider/compare/v2.0.2...v2.0.3) (2020-12-20)


### Bug Fixes

* fix incorrect name of es module in package ([dd295ac](https://github.com/bootstrap-styled/provider/commit/dd295acda752356e792f58c43c5bb611a3351abb))
* remove extra blank line ([27904a6](https://github.com/bootstrap-styled/provider/commit/27904a6a95b53bd9cc9d00ab5ebc60536b7fdccd))

## [2.0.2](https://github.com/bootstrap-styled/provider/compare/v2.0.1...v2.0.2) (2019-12-02)


### Bug Fixes

* **UtilityProvider:** fixing console warning ([8cf0e67](https://github.com/bootstrap-styled/provider/commit/8cf0e67d26fd16fe0a98b06550733912f7ce34e9))

## [2.0.1](https://github.com/bootstrap-styled/provider/compare/v2.0.0...v2.0.1) (2019-12-02)


### Bug Fixes

* **dependencies:** upgrade all dependencies ([4a8eae6](https://github.com/bootstrap-styled/provider/commit/4a8eae602112f773b591d5e3d63ef344631adbb8))
* **UtilityProvider:** fixing v4.4.0 using wrong props ([59d143a](https://github.com/bootstrap-styled/provider/commit/59d143ad0acb20edf3e8bd2b0d8716f28c7798bd))

# [2.0.0](https://github.com/bootstrap-styled/provider/compare/v1.5.3...v2.0.0) (2019-12-02)


### Features

* **utilities:** update utilities to v4.4.0 ([8cf8216](https://github.com/bootstrap-styled/provider/commit/8cf82165b08e05240692fd28e356560b4b458c99))


### BREAKING CHANGES

* **utilities:** deprecate old utilities, they will be removed in futur version. Please now use new
variant. If necessary, enabled old implementation back as described in the documentation
* **utilities:** align, background, border, clearfix, display, flex, float, position, screenreaders,
sizing, spacing, text, visibility are now disabled. display and media have been added and can be
used to replace. They also migrated the theme colors, so far we keep using $brand-primary for v4
components, but they now use $primary, etc... names and if you want to get those utilities with the
proper colors, you will need to use the new naming convention. (in addition of the old naming
convention until they get removed and unused from v4 and others libs)

re https://github.com/bootstrap-styled/v4/issues/92

## [1.5.3](https://github.com/bootstrap-styled/provider/compare/v1.5.2...v1.5.3) (2019-09-26)


### Bug Fixes

* **typescripts:** disable typescript due to https://github.com/bootstrap-styled/bootstrap-styled/issues/83#issuecomment-535666014 ([f8526fb](https://github.com/bootstrap-styled/provider/commit/f8526fb)), closes [/github.com/bootstrap-styled/bootstrap-styled/issues/83#issuecomment-535666014](https://github.com//github.com/bootstrap-styled/bootstrap-styled/issues/83/issues/issuecomment-535666014)

## [1.5.2](https://github.com/bootstrap-styled/provider/compare/v1.5.1...v1.5.2) (2019-09-26)


### Bug Fixes

* **react:** upgrade to react 16.9.0 ([9f17503](https://github.com/bootstrap-styled/provider/commit/9f17503))

## [1.5.1](https://github.com/bootstrap-styled/provider/compare/v1.5.0...v1.5.1) (2019-09-11)


### Bug Fixes

* **typescript:** added typescript definition ([ca55108](https://github.com/bootstrap-styled/provider/commit/ca55108))

# [1.5.0](https://github.com/bootstrap-styled/provider/compare/v1.4.2...v1.5.0) (2019-08-04)


### Features

* **typescript:** added typescript definition ([de8b561](https://github.com/bootstrap-styled/provider/commit/de8b561))

## [1.4.2](https://github.com/bootstrap-styled/provider/compare/v1.4.1...v1.4.2) (2019-01-03)


### Bug Fixes

* **dependencies:** Update [@bootstrap-styled](https://github.com/bootstrap-styled)/css-mixins to the latest version ([a672c85](https://github.com/bootstrap-styled/provider/commit/a672c85))
* **dependencies:** Update rollup-plugin-terser to the latest version 🚀 ([1f9f210](https://github.com/bootstrap-styled/provider/commit/1f9f210))
* **package:** update [@bootstrap-styled](https://github.com/bootstrap-styled)/css-mixins to version 2.0.0 ([156eae1](https://github.com/bootstrap-styled/provider/commit/156eae1))

## [1.4.1](https://github.com/bootstrap-styled/provider/compare/v1.4.0...v1.4.1) (2018-12-16)


### Bug Fixes

* **greenkeeper:** fix sonar running on greenkeeper test ([31f230a](https://github.com/bootstrap-styled/provider/commit/31f230a))

# [1.4.0](https://github.com/bootstrap-styled/provider/compare/v1.3.0...v1.4.0) (2018-12-16)


### Bug Fixes

* **dist:** fix distribution build ([c380a71](https://github.com/bootstrap-styled/provider/commit/c380a71))


### Features

* **greenkeeper:** added greenkeeper and updated all deps ([ce6444f](https://github.com/bootstrap-styled/provider/commit/ce6444f))

# [1.3.0](https://github.com/bootstrap-styled/provider/compare/v1.2.1...v1.3.0) (2018-11-23)


### Features

* **babel:** Upgrade to babel 7 ([942de4b](https://github.com/bootstrap-styled/provider/commit/942de4b))

## [1.2.1](https://github.com/bootstrap-styled/provider/compare/v1.2.0...v1.2.1) (2018-11-23)


### Bug Fixes

* **dependencies:** update bootstrap-styled and rollup-umd-documentation ([e8b974a](https://github.com/bootstrap-styled/provider/commit/e8b974a))

# [1.2.0](https://github.com/bootstrap-styled/provider/compare/v1.1.6...v1.2.0) (2018-11-14)


### Features

* **dependencies:** clear CHANGELOG (will be regenerated) ([be1a195](https://github.com/bootstrap-styled/provider/commit/be1a195))
