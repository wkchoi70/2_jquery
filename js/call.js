$(function(){
    $("button#hideBtn").click(function(){
$("p").hide("slow", function(){
    alert("난 사라짐");
})
    });
});

//자바스크립트
function myDisplayer(some) {
    document.getElementById("call").innerHTML = some;
}

function myFirst() {
    myDisplayer("pjy");
}
function mySecond() {
    myDisplayer("ljh");
}

//함수를 호출할때만 실행되는 코드블록
myFirst();
mySecond();

