# Node library template
> My personal node library template.

This might be to your taste, it might not.

Motivation:
* Using ES modules
* As barebones as possible
* As few dependencies as possible
* Default liniting rules
* Build pipeline for npm packages
* Github workflow for automated tests when pushing to master or develop (including PRs)

## Install dependencies

```
yarn install
```

## Run linter

```
yarn lint
```

## Run tests

```
yarn test
```

## Build for NPM

```
yarn build
```


## Publish to NPM
Lint, test and build

```
yarn pre-publish
```

and finally publish to NPM

```
yarn publish
```

## Using locally
In order to use the library locally it needs to be linked like so:

1. In the root directory of this library run: ```yarn link```
2. Make sure a build exists ```yarn build```
3. In the root directory where you want to use this library run ```yarn link "node-library-template"``` - replace *node-library-template* with the actual package name as defined in *package.json*

Then you can import and use the library:
```javascript
import Main from 'node-library-template';

const main = new Main();
main.echo('Testing');
```

## Contributing
Contributions are very welcome, please direct your PRs against the develop branch.