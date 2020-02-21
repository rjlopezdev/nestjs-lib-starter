# :bulb: Advise

:bulb: You can configure this template using the following commands:

```bash
npm i -g replace-in-file
replace-in-file /Nest Library Starter/g    <library_name> * --isRegex
replace-in-file /nestjs-library-starter/g     <npm_registry> * --isRegex
replace-in-file /rjlopezdev/g     <author_name>  * --isRegex
replace-in-file /rjlopezdev@mail.com/g    <author_email> * --isRegex
replace-in-file /nestjs-library-starter/g <repository>   * --isRegex
```
| Name | Description |
|:---:|---|
| __LIBRARY_NAME__ | _The name of the library_ |
| __LIBRARY_NPM__ | _The package name_ |
| __AUTHOR_NAME__ | _You, or who will be the maintainer of the library (GitHub account)_ |
| __AUTHOR_EMAIL__ | _Author email_ |
| __REPOSITORY_NAME__ | Name of the repository |

## | :warning: :+1: __Remove this Advise when you do it!!!__

# :package: :rocket: CI/CD Configuration

In order to configure successfully this template for CI/CD carry out the following steps:

## Secrets:
* Create [NPM_TOKEN](https://docs.npmjs.com/creating-and-viewing-authentication-tokens#creating-authentication-tokens)
* Create [GH_TOKEN](https://help.github.com/es/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets)
* Create []()