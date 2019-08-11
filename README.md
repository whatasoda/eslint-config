# @whatasoda/eslint-config

## Enable `@whatasoda` namespace in your npm
If you did it before, you can skip it.
```sh
echo "@whatasoda:registry=https://npm.pkg.github.com/" >> ~/.npmrc
```

## Install package
```sh
npm i -D @whatasoda/eslint-config
```

## Install peer dependencies
```sh
npm i react react-dom
npm i -D typescript
```

## Usage
.eslintrc.js
```js
module.exports = {
  extends: ['@whatasoda'],
  parserOptions: {
    project: './tsconfig.json',
  }
}
```
