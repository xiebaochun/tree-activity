// post root url
var API_ROOT_URL = 'http://www.xiaoshushidai.com/mapis/index.php?mrt=mrt3&r_type=1&i_type=4&dev_type=WAP&version=2015102015&requestData='; 
    API_ROOT_URL = '/api/';
function verify_mobile(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

function log(content){
    console.log(content);
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
    var url = encodeURIComponent(AES_encrypt(JSON.stringify(requestData)));
    $.ajax({
        url: API_ROOT_URL + act,
        type: 'post',
        data: {url: url},
        success: function(ret) {
            if(ret.status == 1){
                callback(ret);
            }else{
                callback(ret)
                if(ret.show_err){
                    dialog.error(ret.show_err);
                }
            }
        },
        error: function(error) {
            dialog.error('服务器繁忙！');
        }
    });
}

// dialog
var dialog = new Dialog();

var success_pop;
function Dialog(){

}

function showShareTips(){
    $('.share-tips').removeClass('none').addClass('animated fadeIn');
    setTimeout(function(){
        $('.share-tips').removeClass('animated fadeIn');
    },1000);
}

function closeShareTips(self){
    $(self).addClass('animated fadeOut');
    setTimeout(function(){
        $(self).removeClass('aniamted fadeOut').addClass('none');
    });
}

$(function(){
    success_pop = document.getElementById('success-pop');
    Dialog.prototype.DOM = success_pop;
    Dialog.prototype.timeout = null;
    Dialog.prototype.show = function(content, showTime){
        var self = this;
        var showTime = showTime || 1000;
        $(self.DOM).removeClass('animated fadeIn fadeOut');
        if(this.timeout)clearTimeout(this.timeout);
        $(self.DOM).addClass('animated fadeIn').removeClass('none');
        //self.DOM.innerText = content || 'dialog';
        $(self.DOM).html(content || 'dialog');
        
        this.timeout = setTimeout(function(){
            $(self.DOM).removeClass('animated fadeIn').addClass('animated fadeOut');
        },showTime);
        this.timeout = setTimeout(function(){
            $(self.DOM).removeClass('animated fadeOut').addClass('none');
        },showTime + 500);
    }
    Dialog.prototype.success = function(content, showTime){
        this.DOM.style.color = '#fff';
        this.show(content,showTime);
    }
    Dialog.prototype.tips = function(content, showTime){
        this.DOM.style.color = '#fff';
        this.show(content,showTime);
    }
    Dialog.prototype.error = function(content, showTime){
        this.DOM.style.color = '#fff';
        this.show(content,showTime || 2000);
    }
});

// rem.js
!new function(){var a=this;a.width=750,a.fontSize=28,a.widthProportion=function(){var b=(document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/a.width;return b>1?1:b},a.changePage=function(){document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+a.widthProportion()*a.fontSize+"px !important")},a.changePage(),window.addEventListener("resize",function(){a.changePage()},!1)};
