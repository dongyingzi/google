QUnit.test('hello  test', function (assert) {
    var str = '?name=qiu&age=33&skill=css&skill=javascript';
    var obj = {
        name: 'qiu',
        age: '33',
        skill: ['css', 'javascript']
    };

    assert.deepEqual(parseQuery(str), obj, 'query string parse');
});