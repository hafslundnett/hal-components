# HalPlayground

[![npm version](https://badge.fury.io/js/%40hafslundnett%2Fhal-components.svg)](https://badge.fury.io/js/%40hafslundnett%2Fhal-components)
[![npm size](https://badgen.net/bundlephobia/minzip/@hafslundnett/hal-components)](https://bundlephobia.com/result?p=@hafslundnett/hal-components)

This is the repository for <a href="https://hal-components.hafslundnett.io/welcome">Hafslund Angular Libary(HAL)</a>

## Documentation

The showoff website include all documentation off components with related examples.
Can be visited at : 
- https://hal-components.hafslundnett.io

## Getting started
1. `yarn`
2. `yarn watch-hal`
3. (in new terminal): `yarn start`
4. Open http://localhost:4201/

## Publish to NPM

- Build with `yarn build-hal`
- Build schematics `yarn build-hal-schematics `
- Naviagte into dist/hal-components/
- run `npm publish`

## Running unit test
Run <code>ng test hal-components</code> to execute unit tests via <a href='https://karma-runner.github.io/4.0/index.html'>Karma</a>

## Running end-to-end test
Run <code>yarn run cypress</code> to execute end-to-end test via <a href='https://www.cypress.io/'>Cypress</a>. Before you run the tests make sure you are serving the application via <code>ng serve</code>


## Notes
ng new hal-playground --directory=./ --routing --style=scss --prefix=hal
ng generate library hal-components

library name: hal-components
lib prefix: hal
components file prefix: "none"


## Versioning

This project will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered
with the following format:

`<major>.<minor>.<patch>`
