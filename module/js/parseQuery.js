/**
 * 解析url中的query string转换为对象
 */

/**
 * 解析url中的query string为对象
 * 
 * @param {String} url 需要解析的url
 * @return {Object} url中参数解析后的对象
 */
function parseQuery(url) {
    var result = {};
    var i, len;
    var startIndex = url.indexOf('?');
    var endIndex = url.indexOf('#');

    if (startIndex !== -1) {
        endIndex = (endIndex === -1) ? url.length : endIndex;
        var query = url.substring(startIndex + 1, endIndex);
        var pairs = query.split('&');
        var pair, key, value;
        var pos;

        for (i = 0, len = pairs.length; i < len; ++i) {
            pair = pairs[i].split('=');
            key = decodeURIComponent(pair.substring(0, pos));
            value = decodeURIComponent(pair.substring(pos + 1).replace(/\+/g, ' '));

            // add new key:value pair
            if (!result.hasOwnProperty(key)) {
                result[key] = value;
            // push item in exist array
            } else if (isArray(result[key])) {
                result[key].push(value);
            // create array for multiply key: value
            } else {
                var arr = [result[key]];
                arr.push(value);
                result[key] = arr;
            } // end if-else
        } // end for
    } // end if
    return result;
}

function isArray(arg) {
    if (arg && typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}

/**

console.log(parseQuery('https://www.google.com.hk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#ie=UTF-8&q=url%20with%20query&sourceid=chrome-psyapi2'));


 */