/**
 * 解析url中的query string转换为对象
 */

/**
 * 解析url中的query string为对象
 * 
 * @param {String} url 需要解析的url
 * @return {Object} url中参数解析后的对象
 */
function queryParse(url) {
    var result = {};
    var i, len;
    var startIndex = url.indexOf('?');
    var endIndex = url.indexOf('#');

    if (startIndex !== -1) {
        endIndex = (endIndex === -1) ? url.length : endIndex;
        var query = ulr.substring(startIndex, endIndex);
        var pairs = query.split('&');
        var pair, key, value;
        var pos;

        for (i = 0, len = pairs.length; i < len; ++i) {
            pair = pairs[i];
            pos = pair.indexOf('&');
            key = decodeURIComponent(pair.substring(0, pos));
            value = decodeURIComponent(pair.substring(pos + 1));
        }
    }

}