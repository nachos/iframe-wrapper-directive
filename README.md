# iframe-wrapper-directive

iframe wrapper directive that support context injection

<table>
  <thead>
    <tr>
      <th>Linux</th>
      <th>OSX</th>
      <th>Windows</th>
      <th>Coverage</th>
      <th>Dependencies</th>
      <th>DevDependencies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" align="center">
        <a href="https://travis-ci.org/nachos/iframe-wrapper-directive"><img src="https://img.shields.io/travis/nachos/iframe-wrapper-directive.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://ci.appveyor.com/project/nachos/iframe-wrapper-directive"><img src="https://img.shields.io/appveyor/ci/nachos/iframe-wrapper-directive.svg?style=flat-square"></a>
      </td>
      <td align="center">
<a href='https://coveralls.io/r/nachos/iframe-wrapper-directive'><img src='https://img.shields.io/coveralls/nachos/iframe-wrapper-directive.svg?style=flat-square' alt='Coverage Status' /></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/iframe-wrapper-directive"><img src="https://img.shields.io/david/nachos/iframe-wrapper-directive.svg?style=flat-square"></a>
      </td>
      <td align="center">
        <a href="https://david-dm.org/nachos/iframe-wrapper-directive#info=devDependencies"><img src="https://img.shields.io/david/dev/nachos/iframe-wrapper-directive.svg?style=flat-square"/></a>
      </td>
    </tr>
  </tbody>
</table>

## Have a problem? Come chat with us!
[![Join the chat at https://gitter.im/nachos/packages](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nachos/iframe-wrapper-directive?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation
#### Using [Bower](http://bower.io/)
``` bash
$ [sudo] bower install iframe-wrapper-directive --save
```

#### Add script tag
``` html
<script type="text/javascript" src="iframeWrapper.directive.js"></script>
```

## Usage
#### Add module "iframeWrapper" as dependency
``` javascript
var app = angular.module('myApp', ['iframeWrapper']);
```

#### Add the new element in HTML
``` html
<iframe-wrapper src="src" content="content"></iframe-wrapper>
```

## Run Tests
``` bash
$ npm test
```

## License

[MIT](LICENSE)
