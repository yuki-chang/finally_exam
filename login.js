function showKeyPress(evt) {
    evt = (evt) ? evt : window.event
    return checkSpecificKey(evt.keyCode);
}
function checkSpecificKey(keyCode) {
    var specialKey = "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";//Specific Key list
    var realkey = String.fromCharCode(keyCode);
    var flg = false;
    flg = (specialKey.indexOf(realkey) >= 0);
    if (flg) {
        alert('請勿輸入特殊字元: ', realkey);
        return false;
    }
    return true;
}
document.onkeypress = showKeyPress;


$('input').on('keypress', function (event) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        alert("請輸入英文以及數字")
        return false;
    }
});


function checkValidation() {
    var validation = document.getElementById("validation").value;
    var correct = "JEPV";
    if (validation == correct) {
        alert("驗證碼正確，成功登入");
    } else {
        alert("驗證碼錯誤");
    }
}

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var nav_yellow = document.getElementById('nav_yellow');
var text1 ="為配合教育部資安稽核計畫及行政院國家資通安全會報之政府組態基準(GCB)要求，請本校教職員工及學生自公告日(2020/10/14)起依下列規範修改密碼：";
var text2 ="1. 密碼不得少於8碼密碼，不得與上次密碼相同密碼，至少必須包含英文大寫字母、小寫字母、數字、特殊符號(不含 _底線)；";
var text3 ="2. 密碼有效期間為一年，一年後需再修改密碼才可使用校內各系統(系統會自動顯示要求修改密碼)。";
var text4 ="自2020/11/2起，使用各資訊系統時，將檢核您是否已於公告日後修改密碼並符合上述規範，未修改及不符合者，均須先修改密碼才能繼續使用各系統。";

function stringAnimation(text,p,num){
    var chars = text.split("");
    var typed = "";
    var state = 0;
    var type = setInterval(function(){
      if(chars.length > 0){
        var char = chars.shift();
        if(char == "\n")
          char = "<br />"
        else if(char == ";"){
          state += 1;
          p += " state" + state;
        }
        typed += char;
        p.innerHTML = typed;
        p.scrollTop = p.scrollHeight;
      }
      else{
        clearInterval(type);
      }
    }, num); //80
}


stringAnimation(text1,p1,40);
stringAnimation(text2,p2,50);
stringAnimation(text3,p3,60);
stringAnimation(text4,nav_yellow,70);