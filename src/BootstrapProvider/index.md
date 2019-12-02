The `<BootstrapProvider />` component allows you to configure the styling of all your components and to toggle global options. You are not required to use it, but we strongly suggest applying it so that you benefit of the full extent of our application.

#### **Configure reset css**

Every browser have slightly different css by default. If you want to reset all the CSS, you can use `reset: true`. 

```jsx static
<BootstrapProvider reset={true}>
  <App />
</BootstrapProvider>
```

> Use this only once in your application and before any other styled-components otherwise your stylesheet will be injected after them.  

#### **Configure global css**

You generally build UI component, so you don't have to maintain any css stylesheet. 

You may want to inject a global configuration for your fonts and body margin, if you do, use the `injectGlobal: true`.

```jsx static
<BootstrapProvider injectGlobal={true}>
  <App />
</BootstrapProvider>
```

> Use this only once in your application and before any other styled-components otherwise your stylesheet will be injected after them. 

#### **Overriding Variables**

The theme allows you to very quickly change the value of variables associated with the CSS that builds our components.

```jsx static
<BootstrapProvider
  theme={{
    '$brand-primary': 'red',
  }}
 >
  <App />
</BootstrapProvider>
```

___This will override the original color of $brand-primary and set it's value to red for all Components that make use of this variable.___

#### **Global options**

```jsx static
<BootstrapProvider
  theme={{
    '$spacer': '.5rem',
    '$enable-dynamic-links': false,
    '$enable-rounded': true,
  }}
 >
  <App />
</BootstrapProvider>
```

#### **Creating your own theme**

If you want to do more than just overriding variables, you can also create your own and design a logic amongst them. To do so, you must first create a function that will build the theme for you:

```jsx static
import { unit } from 'bootstrap-styled-mixins';

function makeTheme(u = {}) {
  const v = {};
  // you can add meta data to your theme
  v['_name'] = u['_name'] || 'bootstrap-styled';
  // do all the logic to calculate your theme values
  v['$my-var'] = u['$my-var'] || '10px';
  v['$my-other-var'] = u['$my-other-var'] || unit.math.divide(v['$my-var'], 2);
  return { ...u, ...v };
}
```

You can also combine your other themes together to create your application theme.

```jsx static
import { BootstrapProvider, makeTheme as makeThemeBoostrap } from 'bootstrap-styled';
import { makeTheme as makeThemeMotion } from 'bootstrap-styled-motion';
import { makeTheme as makeThemeFoobar } from 'bootstrap-styled-foobar-components';

const theme = {
  ...makeThemeBootstrap({ '$enable-rounded': false }),
  ...makeThemeMotion(),
  ...makeThemeFoobar({ '$my-var': '5px' })
};

<BootstrapProvider theme={theme}>
  <App />
</BootstrapProvider>
```

If the first argument passed to the `makeTheme` *(original)* is a **List** of `makeTheme`  
and the second argument is a `theme` object configuration, it will then iterate the list and pipe the created theme into all the `makeTheme`.

If you want to make the theme of bootstrap-styled, you must not forget to add it to the list of makeTheme to process.

That tool can be useful when you are playing with themes while you build application or module that depend on bootstrap-styled.


```jsx static
import { makeTheme } from 'bootstrap-styled';
import { makeTheme as makeThemeMotion } from 'bootstrap-styled-motion';

const commonThemeConfig = {
  '$brand-primary': 'red',
};

const list = [
  makeTheme,
  makeThemeMotion
];

export default makeTheme(list, commonThemeConfig);
```


#### **Utils**

Utils are all activated by default. They inject some CSS utilities classes in the scope of the BootstrapProvider. They will be available in all your components using the className attributes.

Adding the BootstrapProvider to your and disabling all the utilities like this:

```jsx static
import { BootstrapProvider, theme } from 'bootstrap-styled';

ReactDOM.render(
    <BootstrapProvider theme={theme} utils={{
      display: false,
      print: false,
      clearfix: false,
      transition: false,
      cursor: false,
    }}>
      <App />
    </BootstrapProvider>
  document.getElementById('app')
);
```

In addition to the BootstrapProvider, you will want to have our global-styles for injected in your app.

```jsx static
import { getGlobalStyles } from 'bootstrap-styled';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${getGlobalStyles()}
`;
```

> **Heads up!** The `BootstrapProvider` is an extended version of the `ThemeProvider` and contains bootstrap additional fixes to give you a better experience and higher adaptability to browsers and devices. It also include lots of css utilities.
