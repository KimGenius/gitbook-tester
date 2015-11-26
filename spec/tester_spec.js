var tester = require('../lib/tester');
var path = require('path');

jasmine.getEnv().defaultTimeoutInterval = 20000;

describe(__filename, function() {
  it('should create book and parse content', function(testDone) {
    tester.builder()
    .withContent('#test me \n\n![preview](preview.jpg)')
    .create()
    .then(function(result) {
      expect(result.length).toEqual(1);
      expect(result[0].content).toEqual('<h1 id="test-me">test me</h1>\n<p><img src="preview.jpg" alt="preview"></p>');
    })
    .fin(testDone)
    .done();
  });

//  it('should create book with plugins and parse content', function(testDone) {
//      tester.builder()
//      .withContent('This text is {% em %}highlighted !{% endem %}')
//      .withBookJson({"plugins": ["emphasize"]})
//      .create()
//      .then(function(result) {
//        expect(result.length).toEqual(1);
//        expect(result[0].content).toEqual('<p>This text is <span class="pg-emphasize pg-emphasize-yellow" style="">highlighted !</span></p>');
//      })
//      .fin(testDone)
//      .done();
//  });
});

