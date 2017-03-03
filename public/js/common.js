// post root url
var API_ROOT_URL = 'http://wentest.xiaoshushidai.com/mapis/index.php?mrt=mrt3&r_type=1&i_type=4&dev_type=WAP&version=2015102015&requestData='; 
    API_ROOT_URL = '/api/';
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

// api post common method
function api_post(act, requestData, callback) {
    //var requestData = '' + requestData;
    $.ajax({
        url: API_ROOT_URL + act,
        method: 'post',
        data: requestData,
        success: function(ret) {
            if(ret.status == 1){
                callback(ret);
            }else{
                dialog.error(ret.show_err);
            }
        },
        error: function(error) {
            dialog.error('api请求失败！');
        }
    });
}

// dialog
var dialog = new Dialog();

var success_pop;
function Dialog(){

}

$(function(){
    success_pop = document.getElementById('success-pop');
    Dialog.prototype.DOM = success_pop;
    Dialog.prototype.timeout = null;
    Dialog.prototype.show = function(content, showTime){
        var self = this;
        var showTime = showTime || 1000;
        $(self.DOM).removeClass('fadeIn');
        if(this.timeout)clearTimeout(this.timeout);
        $(self.DOM).addClass('fadeIn');
        self.DOM.innerText = content || 'dialog';
        
        this.timeout = setTimeout(function(){
            $(self.DOM).removeClass('fadeIn');
        },showTime);
    }
    Dialog.prototype.success = function(content, showTime){
        this.DOM.style.color = '#0f0';
        this.show(content,showTime);
    }
    Dialog.prototype.tips = function(content, showTime){
        this.DOM.style.color = '#fff';
        this.show(content,showTime);
    }
    Dialog.prototype.error = function(content, showTime){
        this.DOM.style.color = 'red';
        this.show(content,showTime || 2000);
    }
});