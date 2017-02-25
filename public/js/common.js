function verify_mobile(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

function splitSlice(str, len) {
    var ret = [];
    for (var offset = 0, strLen = str.length; offset < strLen; offset += len) {
        ret.push(str.slice(offset, len + offset));
    }
    return ret;
}
