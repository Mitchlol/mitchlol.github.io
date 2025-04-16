$(function(){
    var url = window.location.href;
    var activeTab = url.substring(url.indexOf("#") + 1);
    if($.trim(activeTab) == 'openpixelpoi') // check hash tag name for prevent error
    {
        $(".tab-pane").removeClass("active in");
        $("#" + activeTab).addClass("active in");
        $('a[href="#'+ activeTab +'"]').tab('show');
    }
});
