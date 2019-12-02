`<UtilityProvider />` component example:

Utils are all activated by default. They inject some CSS utilities classes in the scope of the `<UtilityProvider />`. They will be available in all your components using the className attributes.

Adding the `<UtilityProvider />` to your project and disabling all the utilities like this:

```js static
import { UtilityProvider, theme } from 'bootstrap-styled';

ReactDOM.render(
    <UtilityProvider 
        theme={theme}       
        utils={{
          // v4.4.0 implementation: new behavior, it is now enabled by default
          screen: true,
          print: true,
          // v4.0.0 implementation: old behavior, now disabled by default, it will be removed in futur version
          align: false,
          background: false,
          border: false,
          display: false,
          flex: false,
          float: false,
          position: false,
          screenreaders: false,
          sizing: false,
          spacing: false,
          text: false,
          visibility: false,
          // custom utilities
          clearfix: false,
          transition: false,
          cursor: false,
        }}
    >
      <App />
    </UtilityProvider>
  document.getElementById('app')
);
```

___Note that these utils are also available with `<BootstrapProvider />`.___

> Advice: to migrate to 4.4.0 behavior, we recommand that you switch all `utilities` to true, and disable `utils` one by one after checking the difference
> some old utilities are still required such as `utils.transition` to inject `.fade` class.
