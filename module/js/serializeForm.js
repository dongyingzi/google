
/**
 * 将一个表单元素序列化为可提交的字符串
 * 
 * @param {FormElement} form 需要序列化的表单元素
 * @return {string} 表单序列化后的字符串
 */
function serializeForm(form) {
    if (!form || form.nodeName.toUpperCase() !== 'FORM') {
        return;
    }

    var result = [];

    var i, len;
    var field, fieldName, fieldType;

    for (i = 0, len = form.length; i < len; ++i) {
        field = form.elements[i];
        fieldName = field.name;
        fieldType = field.type;

        if (field.disabled || !fieldName) {
            continue;
        } // enf if

        switch (fieldType) {
            case 'text':
            case 'password':
            case 'hidden':
            case 'textarea':
                result.push(encodeURIComponent(fieldName) + '=' + 
                    encodeURIComponent(field.value));
                break;

            case 'radio':
            case 'checkbox':
                if (field.checked) {
                    result.push(encodeURIComponent(fieldName) + '=' + 
                        encodeURIComponent(field.value));
                }
                break;

            case 'select-one':
            case 'select-multiple':
                for (var j = 0, jLen = field.options.length; j < jLen; ++j) {
                    if (field.options[j].selected) {
                        result.push(encodeURIComponent(fieldName) + '=' + 
                            encodeURIComponent(field.options[j].value || field.options[j].text));
                    }
                } // end for
                break;

            case 'file':
            case 'submit':
                break; // 是否处理？

            default:
                break;
        } // end switch
    } // end for
    
    return result.join('&');
}