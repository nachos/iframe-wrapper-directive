'use strict';

describe('iframe-wrapper-directive', function () {
  var $compile;
  var $rootScope;

  beforeEach(module('iframeWrapper'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Should be replaced by an iframe element', function () {
    var element = $compile('<iframe-wrapper></iframe-wrapper>')($rootScope);

    $rootScope.$digest();

    expect(element[0].nodeName).to.equal('IFRAME');
  });

  xit('iframe element should have content', function () {
    $rootScope.content = {
      test: 'test'
    };

    var element = $compile('<iframe-wrapper content="content"></iframe-wrapper>')($rootScope);

    $rootScope.$digest();

    expect(element[0].contentWindow.test).to.eql($rootScope.content.test);
  });

  it('iframe element should have source', function () {
    $rootScope.src = 'c:/test.html';
    var element = $compile('<iframe-wrapper src="src"></iframe-wrapper>')($rootScope);

    $rootScope.$digest();

    expect(element[0].src).to.equal($rootScope.src);
  });
});