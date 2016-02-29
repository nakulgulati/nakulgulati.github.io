function loadContent() {
    var hash = $(location).attr("hash");

    if ($("#navbar").hasClass("in")) {
        $('.collapse').collapse('hide');
    }

    switch (hash) {
        case "#gsoc":
            $("#page-content").load("gsoc.html");
            break;
        case ("#projects"):
            $("#page-content").load("projects.html");
            break;
        case "#resume":
            $("#page-content").load("resume.html");
            break;
        case "#contact":
            $("#page-content").load("contact.html");
            break;
        default:
            $("#page-content").load("intro.html");
            break;
    }
}

function setup() {

    $(window).on('hashchange', function () {
        loadContent();
    });

    //$(".navbar-brand").hover(function () {
    //    $(this).html("N4ku1 Gu1471");
    //}, function(){
    //    $(this).html("Nakul Gulati");
    //});
    loadContent();
}