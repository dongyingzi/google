QUnit.test('richText.js test', function (assert) {
    var form = document.getElementById('serialize-form');

    var expect = 'name=qiu&address=beijing&password=12345&gender=female&' + 
        'hobby=football&hobby=basketball&age=23&job=FE&job=RD&description=%E9%82%B1%E5%BE%B7%E6%B8%85';

    assert.equal(serializeForm(form), expect, 'serializeForm form wrong');


});