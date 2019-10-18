# HalPlayground

## Getting started
1. `npm install` (TODO switch to yarn)
2. `npm run serve-hal`
3. (in new terminal): `ng serve`
4. Open http://localhost:4200/

## Deploy new version 
TODO

ng new hal-playground --directory=./ --routing --style=scss --prefix=hal
ng generate library hal-components

library name: hal-components
lib prefix: hal
components file prefix: "none"




## TODO doc
svg-element


## TODO extract
broadcast channel
table system. witch? drops or mdm or both?
mdm-paginator


## Versioning

This project will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered
with the following format:

`<major>.<minor>.<patch>`

## Publish to NPM

- Build with `ng build ng-components`
- Naviagte into dist/ng-components/
- run `npm publish`