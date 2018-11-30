# Nextjs - Typescript - Redux Starter

show examples of using nextjs with typescript and redux

## counter: shows how to use redux via sync action and async actions

## time: shows how to ajax in getInitialProps

## known issue
```
Error: Expected diagnostics to have start
    at createFromDiagnostic (/Users/dengxiaodi/GitHub/nextjs-typescript-redux-stater/node_modules/fork-ts-checker-webpack-plugin/lib/NormalizedMessage.js:22:23)
    at Array.map (<anonymous>)
```
this is because ts has type-check error, but fork-ts-checker-webpack-plugin is unable to show it.
