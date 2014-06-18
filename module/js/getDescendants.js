/**
 * 编写一个JavasSript函数，
 * 给定一个DOM节点node和一个正整数n,
 * 返回node的所有第n代后代节点（直接子节点为第1代）
 * 
 * @param {[type]} node [node description]
 * @param {[type]} n [n description]
 * @return {[type]} [return description]
 */
function getDescendants(node, n) {
    var p = [node];
    var result = [];
    var foreach = Array.prototype.forEach;
    var i, len, cur, childNodes, child;

    function addChild(d, i) {
        result.push(d);
    }

    while (n--) {
        result = [];
        for (i = 0, len = p.length; i < len; ++i) {
            foreach.call(p[i].childNodes, addChild);
        } // end for
        p = result;
    } // end while

    return result;
}