# @whatasoda/eslint-config

## install package
```sh
npm i -D @whatasoda/eslint-config
```

## install peer dependencies
```sh
npm i react react-dom
npm i -D typescript
```

## usage
.eslintrc.js
```js
module.exports = {
  extends: ['@whatasoda'],
  parserOptions: {
    project: './tsconfig.json',
  }
}
```
