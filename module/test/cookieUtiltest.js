QUnit.test('cookieUtil  test', function (assert) {

    var str = cookieUtil.setItem({
        key: 'name',
        value: 'qiu',
        maxAge: '333'
    });

    if (!document.cookie) {
        assert.ok(true, 'cookie测试需要服务器');
        return;
    }

    var expect = 'name=qiu; max-age=333';

    assert.equal(str, expect, 'setItem()');

    var result = cookieUtil.getItem('name');

    assert.equal(result, 'qiu', 'getItem()');

    cookieUtil.setItem({
        key: 'gender',
        value: 'female'
    });
    cookieUtil.clear();
    result = cookieUtil.getItem('name');
    assert.equal(result, undefined, 'clear()');

    cookieUtil.setItem({
        key: 'name',
        value: 'qiu'
    });
    cookieUtil.setItem({
        key: 'gender',
        value: 'female'
    });
    result = {
        name: 'qiu',
        gender: 'female'
    };
    assert.deepEqual(cookieUtil.getAll(), result, 'getAll()');

});