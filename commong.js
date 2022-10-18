var lenyanjing={};

lenyanjing.init=function(){

    let html="";
    for(let i=0;i<alllist.length;i++){

        if(!alllist[i].children){

        
            html+= '<div class="col-lg-4 col-md-6 col-sm-12 artlists"><a target="_blank" href=details.html?id='+String(alllist[i]['id'])+'&type=1&name='+lenyanjing.encodes(alllist[i]['title'])+'>'+alllist[i]['title']+'</a></div>';
        }
    }
    $("#alllisttit").append(html);
    let htmls="";
    let othhtml="";
    let ywhtml="";
    for(let i=0;i<yiwen.length;i++){

        if(yiwen.length -1 == i){
            continue;
        }
        othhtml+= '<div class="col-lg-4 col-md-6 col-sm-12 artlists"><a target="_blank" href=details.html?id='+String(yiwen[i]['id'])+'&type=2&name='+lenyanjing.encodes(yiwen[i]['title'])+'>'+yiwen[i]['title']+'</a></div>';
        ywhtml+= '<div class="col-lg-4 col-md-6 col-sm-12 artlists"><a target="_blank" href=details.html?id='+String(yiwen[i]['id'])+'&type=3&name='+lenyanjing.encodes(yiwen[i]['titles'])+'>'+yiwen[i]['titles']+'</a></div>';
        htmls +='<li><a class="dropdown-item" href=details.html?id='+String(yiwen[i]['id'])+'&type=2&name='+lenyanjing.encodes(yiwen[i]['title'])+'>'+yiwen[i]['title']+'</a></li><li><hr class="dropdown-divider"></li>';
    
    }
    $("#fenjuan").append(htmls);
    $("#alllisttits").append(othhtml);
    $("#ywalllisttits").append(ywhtml);

    let childhtml="";
    for(let i=0;i<children3.length;i++){
        childhtml+= '<div class="col-lg-4 col-md-6 col-sm-12 artlists"><a target="_blank" href=details.html?id='+String(children3[i]['id'])+'&type=1&name='+lenyanjing.encodes(children3[i]['title'])+'>'+children3[i]['title']+'</a></div>';
    }
    $("#alllisttitss").append(childhtml);

}

lenyanjing.encodes=function(val){
    return String(encodeURI(val));
}

lenyanjing.decodes=function(val){
    return decodeURI(val);
}

lenyanjing.tongji=function(){
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c2cf1f7caf0529b9d8c79215805fbc73";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
}

lenyanjing.getUrlParma=function(){

    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
    theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
    }
    }
    return theRequest;
 
}


lenyanjing.isParamEmpty=function(id){

    if(id == "" || id == null || id ==undefined){
        return false;
    }else{
        return true;
    }
 
}

lenyanjing.getContents=function(id,type=1){

    let cons="";
    // 父节点
    if(type == 1){

        return allcontents[id];
    }

    // 子节点
    if(type == 2){

        for(let i=0;i<yiwen.length;i++){
            if(yiwen[i].id == id){
                cons=yiwen[i].contents
                break;
            }
        }
    }

    if(type == 3){

        for(let i=0;i<yiwen.length;i++){
            if(yiwen[i].id == id){
                cons=yiwen[i].oldcontents
                break;
            }
        }
    }
    return cons;

}
    
lenyanjing.init();
lenyanjing.tongji();
