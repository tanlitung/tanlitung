$(document).ready(function() {

    $(".burger-nav").on("click", function(){
        $("header nav ul").toggleClass("open");
    });

    $("nav>ul>li>a").on("click", function(){
        $("header nav ul").toggleClass("open");
    });
});