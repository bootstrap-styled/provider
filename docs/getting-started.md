Like every [rollup-umd](dev-tools.yeutech.com/rollup-umd) project $PACKAGE_NAME provide two distribution:
 
1. `dist` folder with all the javascript bundled in one file. You will have a UMD and ES5 file.
1. `lib` folder that just contain the ES6 transpiled in ES5.

Whenever you use $PACKAGE_NAME, you need to import the one appropriate to your environment (node or browser).

If you are building a distributed package in a node environment, you want to prevent bundling the whole library you are importing (if made with rollup-umd).

To do so, always import from `lib`.
 
This is correct:

```js static
import myLib from '$PACKAGE_NAME/lib';
```

This is wrong:

```js static
import myLib from '$PACKAGE_NAME';
```

If you are a developer, you want to read more [here](http://dev-tools.yeutech.com/rollup-umd/#distribution).
