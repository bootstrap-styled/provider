**BootstrapProvider**

It contain the following features:

- [Reset css by Eric Meyer](https://meyerweb.com/eric/tools/css/reset/)
- Global styles (`body`, `font-family`, `background`, etc...) using `$theme`.
- styled-components [`<ThemeProvider />`](https://www.styled-components.com/docs/api#themeprovider)
- IE8 browser JS fixes =).
- The default `$theme` from [Bootstrap original](https://getbootstrap.com/).
- The default bootstrap-styled `makeTheme` preprocessor using also bootstrap original theme variable calc.
- Meta-data support (with `_`).
- Scoped theme detection.
- Include by default the `<UtilityProvider />`.

**UtilityProvider**

- [Bootstrap original CSS utilities](https://getbootstrap.com/docs/4.1/utilities/borders/)
- Configurable utilities.
