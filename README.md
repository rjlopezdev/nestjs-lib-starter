# :bulb: Advise

:bulb: You can configure this template using the following commands:

```bash
npm i -g replace-in-file
replace-in-file {{LIBRARY_NAME}} <library_name> *
replace-in-file {{LIBRARY_NPM}}  <npm_registry> *
replace-in-file {{AUTHOR_NAME}}  <author_name>  *
replace-in-file {{AUTHOR_EMAIL}} <author_email> *
```
| Name | Description |
|:---:|---|
| __LIBRARY_NAME__ | _The name of the library_ |
| __LIBRARY_NPM__ | _The package name_ |
| __AUTHOR_NAME__ | _You, or who will be the maintainer of the library (GitHub account)_ |
| __AUTHOR_EMAIL__ | _Author email_ |

## | :warning: :+1: __Remove this Advise when you do it!!!__


<p align="center">
  <img src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg" alt="{{LIBRARY_NAME}}" width="200" height="200">
</p>

<h1 align="center"> {{LIBRARY_NAME}} </h1>

<p align="center">
  Minimal library description.
  <br>
  <br>
  <!-- TODO: Workflow label -->
  <img src="https://github.com/actions/toolkit/workflows/Main%20workflow/badge.svg">
  <br>
  <br>
  <img src="https://img.shields.io/badge/maintainer-{{AUTHOR_NAME}}-orange.svg?link=https://github.com/{{AUTHOR_NAME}}">
  <br>
  <a href="https://codecov.io/gh/{{AUTHOR_NAME}}/{{LIBRARY_NPM}}">
  <img src="https://codecov.io/gh/{{AUTHOR_NAME}}/{{LIBRARY_NPM}}/branch/master/graph/badge.svg"/>
  </a>
  <img src="https://badge.fury.io/js/{{LIBRARY_NPM}}.svg">
  <img src="https://img.shields.io/badge/license-MIT-green.svg">
  <img src="https://img.shields.io/badge/nest%20add-compatible-green.svg">
  <br>
  <br>
  <a href="CONTRIBUTING.md"> Contributing </a>
  ·
  <a href="LICENSE"> License </a>
</p>

An exhaustive description of the library.

# Summary

* [Installation]()
* [Setup]()
* [Usage]()

# Installation

* :cat2: Using Nest CLI:

```
nest add {{LIBRARY_NPM}}
```
* :package: Using Package Manager: 
```
npm install --save {{LIBRARY_NPM}}
```

# Setup

Explain your library setup.

# Usage

Explain your library usage.