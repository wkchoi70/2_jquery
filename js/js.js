$(function(){ //문서가 로드되기 전에 실행되는걸 방지
    $("#hide").click(function() {
        $("p.one").hide(1000);
    });
    $("#show").click(function() {
        $("p.one").show(2000);
    });
    // 토글버튼
    $("button.control").click(function() {
        $("mark").toggle(2000);
    });
})

