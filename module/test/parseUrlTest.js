
QUnit.test('parse url test', function (assert){
    assert.ok(1, 'test');

    var url1 = 'https://www.google.com.hk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#newwindow=1&q=url&safe=active';
    var obj1 = {
       href: url1,
       origin: 'https://www.google.com.hk',
       protocol: 'https:',
       host: 'www.google.com.hk',
       hostname: 'www.google.com.hk',
       port: '',
       pathname: '/webhp',
       search: '?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8',
       hash: '#newwindow=1&q=url&safe=active'
    };
    
    assert.deepEqual(parseUrl(url1), obj1, 'parse url' + url1);
});