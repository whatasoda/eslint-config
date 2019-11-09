# @whatasoda/eslint-config

whatasoda's awesome eslint-config 🚀

## Install package
```sh
npm i -D @whatasoda/eslint-config
```

## Install peer dependencies
```sh
# required
npm i -D typescript
# optional
npm i react
```

## Usage
.eslintrc.js
```js
module.exports = {
  extends: ['@whatasoda'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  }
}
```
