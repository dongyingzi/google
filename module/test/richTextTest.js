QUnit.test('richText.js test', function (assert) {
    var str = '<p><img/></p><p></p><p><img/></p>';
    var result = richText(str);

    var div = document.querySelector('.richText');
    div.innerHTML = result;
    var p = div.getElementsByTagName('p');

    assert.equal(p[0].classList.contains('pic'), true, 'success');
    assert.equal(p[1].classList.contains('pic'), false, 'success');
    assert.equal(p[2].classList.contains('pic'), true, 'success');

});