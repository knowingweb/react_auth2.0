# callcenter2_react_components

>

[![NPM](https://img.shields.io/npm/v/callcenter2_react_components.svg)](https://www.npmjs.com/package/callcenter2_react_components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save callcenter2_react_components
```
### Instalar libreria de componentes microvoz en un proyecto
Hay dos formas de incluir nuestra libreria de componentes en los proyectos.
```console

foo@bar:~$ npm install microvoz/callcenter2_react_components --save
foo@bar:~$ git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf git@github.com:
```

```json
"dependencies": {
  "GitRepo": "git+https://<token-from-github>:x-oauth-basic@github.com/<user>/<GitRepo>.git",
  "callcenter2_react_components": "github:microvoz/callcenter2_react_components",
  "callcenter2_react_components": "git+ssh://git@github.com:microvoz/callcenter2_react_components.git#2.1",
  "callcenter2_react_components": "github:microvoz/callcenter2_react_components#branchName",
  "callcenter2_react_components": "file:../callcenter2_react_components",
}
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'callcenter2_react_components'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [microvoz](https://github.com/microvoz)



tener en cuenta que esta inabilidata el request interceptor

npm install --only=dev


