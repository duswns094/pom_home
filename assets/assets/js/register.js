
/* -------------------------------------------------------------------------
// 레이어 팝업
------------------------------------------------------------------------- */
function divView(iden){
	divShow(iden);
}
function swhide(iden){
	divHide(iden);
}
function divShow(iden){
	$("#"+iden).show();
}
function divHide(iden){
	$("#"+iden).hide();
}
function divToggle(iden){
	$("#"+iden).toggle();
}
function divslideUp(iden){
    $("#"+iden).slideUp();
}
function divslideDown(iden){
    $("#"+iden).slideDown();
}
function divslideToggle(iden){
    $("#"+iden).slideToggle();
}


//비동기식 통신
$.ajaxSetup({ async : false });

function js_clear(objnm) {
    $("#"+objnm).val("");
    $("#"+objnm).attr("attr_ok","N");
    $("#btn_x_"+objnm).hide();
    $("#nt_"+objnm).html("");
}

function js_check_all(obj) {
    if($(obj).prop("checked")) {
        $("#checkagree").prop("checked", true);
        $("#checkprivacy").prop("checked", true);
    } else {
        $("#checkagree").prop("checked", false);
        $("#checkprivacy").prop("checked", false);
    }
}

function js_check() {
    var num1 = num2 = 0;
    $("#checkagree, #checkprivacy").each(function() {
        num1++;
        if($(this).prop("checked"))
            num2++;
    });

    if(num1 == num2)
        $("#check_all").prop("checked", true);
    else
        $("#check_all").prop("checked", false);
}

function only_kor(value) { return /^[\uac00-\ud7a3]+$/.test(value); }
function only_ueng_kor(value) { return /^[A-Z\uac00-\ud7a3]+$/.test(value); }
function only_leng_num(value) { return /^[a-z0-9]+$/.test(value); }
function only_num(value) { return /^[0-9]+$/.test(value); }

function jx_already_userid(userid) {
    var rt;
    $.get("/LIB/MEM/jx_already_userid.php", {"userid":userid}, function(data) {
		rt = data;
	},"text");

	return rt;
}

function js_passwd_check_1(passwd) {
    var SamePass_0 = 0; //동일문자 카운트

    var chr_pass_0;
    var chr_pass_1;
    var chr_pass_2;

    for(var i=0; i < passwd.length; i++) {
        chr_pass_0 = passwd.charAt(i);
        chr_pass_1 = passwd.charAt(i+1);
        chr_pass_2 = passwd.charAt(i+2);

        //동일문자 카운트
        if(chr_pass_0 == chr_pass_1 && chr_pass_0 == chr_pass_2) {
            SamePass_0 += 1
        }
    }

    if(SamePass_0 > 0)
        return false;
    else
        return true;
}

function js_passwd_check_2(passwd) {
    var numCnt = passwd.search(/[0-9]/g);
    var chrUCnt = passwd.search(/[A-Z]/g);
    var chrLCnt = passwd.search(/[a-z]/g);
    var specialCnt = passwd.search(/[`~!@#$%^&*()_\-+=|\\\";:\/?<>,.]/gi);
    var result = 0;

    if(numCnt >= 0)     result++;
    if(chrUCnt >= 0)    result++;
    if(chrLCnt >= 0)    result++;
    if(specialCnt >= 0) result++;

    if(result >= 3)
        return true;
    else
        return false;
}

function js_passwd_check_3(passwd) {
    var SamePass_31 = 0; //연속성(+) 카운드
    var SamePass_32 = 0; //연속성(-) 카운드
    var SamePass_41 = 0; //연속성(+) 카운드
    var SamePass_42 = 0; //연속성(-) 카운드

    var chr_pass_0;
    var chr_pass_1;
    var chr_pass_2;
    var chr_pass_3;

    var rt = 0;

    for(var i=0; i < passwd.length; i++) {
        chr_pass_0 = passwd.charAt(i);
        chr_pass_1 = passwd.charAt(i+1);
        chr_pass_2 = passwd.charAt(i+2);
        chr_pass_3 = passwd.charAt(i+3);

        //연속성(+) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_0.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 2) {
            SamePass_31 += 1;
        }
        //연속성(-) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_0.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -2) {
            SamePass_32 += 1;
        }
        //연속성(+) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_0.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 2 && chr_pass_0.charCodeAt(0) - chr_pass_3.charCodeAt(0) == 3) {
            SamePass_41 += 1;
        }
        //연속성(-) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_0.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -2 && chr_pass_0.charCodeAt(0) - chr_pass_3.charCodeAt(0) == -3) {
            SamePass_42 += 1;
        }
    }

    if(SamePass_31 > 0 || SamePass_32 > 0 )
        rt = 3;

    if(SamePass_41 > 0 || SamePass_42 > 0 )
        rt = 4;

    return rt;
}

var G_INJUNG_NUM = "";
var G_TIME_CHECK = false;
var G_SECOND = 0;
var G_INTERVAL_ID ;

function js_send_num() {
    if($("#j_cel").attr("attr_ok") == "N") {
        return;
    }

    G_INJUNG_NUM = "";
    for(var i=0; i<6; i++) G_INJUNG_NUM += String(Math.floor(Math.random()*10));

    G_SECOND = 300;
    G_TIME_CHECK = true;

    G_INTERVAL_ID = setInterval(js_time,1000);

    if("" == "") {
    	$.get("/LIB/MEM/jx_send_num.php", {"cel":$("#j_cel").val(), "acid":$("#j_acid").val(), "injung_num":G_INJUNG_NUM}, function(data) {
		    alert("인증번호를 발송하였습니다.");
		    $("#j_injung_num").focus();
	    },"text");
    } else {
    	alert("인증번호를 발송하였습니다.");
        $("#j_injung_num").val(G_INJUNG_NUM)
        $("#j_injung_num").focus();
    }
}

function js_time() {
    var v_minute = Math.floor(G_SECOND/60) ;
    var v_second = G_SECOND%60 ;
    if(v_second < 10) v_second = "0"+v_second;

    $("#div_time").html("남은 시간 : "+v_minute+":"+v_second);

    if(G_SECOND == 0) {
        clearInterval(G_INTERVAL_ID);
        G_TIME_CHECK = false;
        return;
    }

    G_SECOND--;
}

function js_injung_num_check() {
    if(G_INJUNG_NUM == "") {
        alert("인증번호 받기를 눌러주세요.");
        return;
    }

    if(!G_TIME_CHECK) {
        alert("인증시간이 지났습니다.");
        return;
    }

    var msg;

    if(G_INJUNG_NUM && $("#j_injung_num").val() && G_INJUNG_NUM == $("#j_injung_num").val()) {
        clearInterval(G_INTERVAL_ID);
        $("#j_injung_num").attr("attr_ok","Y");
        msg = "<p class=\"input_success\"><b>본인확인이 완료되었습니다.</b></p>";
    } else {
        msg = "<p class=\"input_error\"><b>인증번호가 일치하지 않습니다.</b></p>";
    }

    $("#nt_j_injung_num").html(msg);
}

function js_join() {
    var num = 0;
    var valid_check;

    if("P" == "S" && "LH".indexOf($("#j_acid").val()) == -1) {
    	valid_check = ['j_acid','j_userid','j_passwd','j_passwd_cf','j_pnm','j_stdnm','j_stdno','j_cel','j_injung_num'];
    } else {
    	valid_check = ['j_acid','j_userid','j_passwd','j_passwd_cf','j_pnm','j_stdnm','j_stdno'];
    }

    // 순서대로 확인하려고 배열로 처리
    for(var i=0;i<valid_check.length;i++) {
        if($("#"+valid_check[i]).attr("attr_ok") == "N") {
            num++;
            //$("#nt_"+valid_check[i]).html("<p class=\"input_error\">필수 정보 입니다.</p>");
            alert("입력값을 확인해 주세요.");
            $("#"+valid_check[i]).focus();
            return;
        }
    }

    if(num > 0)
        return;

    if(!$("#checkagree").prop("checked") || !$("#checkprivacy").prop("checked")) {
        alert("필수 약관 동의를 해주세요.");
        return;
    }

    var params = $("input, select").serialize();
	$.ajax({
        type : "POST",
        url : "/LIB/MEM/jx_join.php",
        dataType : "jsonp",
        data : params,
        success : function(data) {
            //console.log(data);
        },
        error:function(request,status,error) {
            //console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
        }
    });
}

function js_callback(data) {
    if(data.CODE == "already_userid") {
	    alert("사용할수 없는 아이디 입니다.");
    } else if(data.CODE == "notmatch") {
    	if("P" == "S") {
	    	alert("재원생 정보가 일치하지 않습니다.");
    	} else if("P" == "P") {
    		alert("재원생 정보가 일치하지 않거나, 학부모 정보가 일치하지 않습니다. 학원으로 문의바랍니다.");
    	}
    } else if(data.CODE == "already_join") {
	    alert("이미 등록되어 있습니다.");
    } else if(data.CODE == "leave"){
	    alert("현재 탈퇴 신청 되어 재등록은 탈퇴일 기준 7일 이후 가능합니다.");
	    location.href = "/";
	} else if(data.CODE == "success") {
	    alert("디멤버 등록이 완료되었습니다.");
	    location.href = "/";
	} else {
	    alert("오류가 발생하였습니다.");
	}
}

function js_j_acid() {
	$("#join_input_area > li").not("#li_j_acid").hide();
	$("#btn_rea").hide();

	if($("#j_acid").val()) {
		var not_id = "";

		$("#join_input_area > li").not("#li_j_acid"+not_id).show();
		$("#btn_rea").show();
	}
}

$(function() {
    $("#j_userid, #j_pnm, #j_stdnm, #j_stdno").keyup(function() {
        $("#btn_x_"+$(this).attr("id")).toggle(Boolean($(this).val()));
    });

    $("#j_userid").blur(function() {
        $(this).attr("attr_ok","N");

        var msg;

        if($(this).val().length < 6 || $(this).val().length > 15 || !only_leng_num($(this).val())) {
            msg = "<p class=\"input_error\"><b>6~15자의 영문 소문자, 숫자만 가능합니다.</b></p>";
        } else if(jx_already_userid($(this).val()) == "true") {
            msg = "<p class=\"input_error\"><b>사용중인 아이디 입니다.</b></p>";
        } else {
            msg = "<p class=\"input_success\">사용 가능한 아이디 입니다.</p>";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_passwd").blur(function() {
        $("#info_passwd_d, #info_passwd_n, #info_passwd_s").hide();
        $(this).attr("attr_ok","N");

        var msg;

        if(!js_passwd_check_1($(this).val())) {
            msg = "<p class=\"input_error\"><b>비밀번호에 같은 문자를 3번 이상 연속으로 입력하실 수 없습니다.</b></p>";
        } else if($(this).val().length < 8 || $(this).val().length > 16 || !js_passwd_check_2($(this).val())) {
            msg = "<p class=\"input_error\"><b>8~16자의 영문, 숫자, 특수문자의 조합만 가능합니다.</b></p>";
        } else {
            msg = "<p class=\"input_success\">사용 가능한 비밀번호 입니다.</p>";
            $(this).attr("attr_ok","Y");

            var num = js_passwd_check_3($(this).val());

            if($(this).val().length == 8 || num == 4)
                $("#info_passwd_d").show();
            else if(($(this).val().length > 8 && $(this).val().length < 11) || num == 3)
                $("#info_passwd_n").show();
            else
                $("#info_passwd_s").show();
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_passwd_cf").blur(function() {
        $(this).attr("attr_ok","N");
        var msg;

        if($(this).val() != $("#j_passwd").val()) {
            msg = "<p class=\"input_error\"><b>비밀번호 확인 입력이 일치하지 않습니다.</b></p>";
        } else {
            msg = "";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_pnm").blur(function() {
        $(this).attr("attr_ok","N");
        var msg;

        if(!only_kor($(this).val())) {
            msg = "<p class=\"input_error\"><b>이름 형식이 올바르지 않습니다.</b></p>";
        } else {
            msg = "";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_stdnm").blur(function() {
        $(this).attr("attr_ok","N");
        var msg;

        if(!only_ueng_kor($(this).val())) {
            msg = "<p class=\"input_error\"><b>이름 형식이 올바르지 않습니다.</b></p>";
        } else {
            msg = "";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_stdno").blur(function() {
        $(this).attr("attr_ok","N");
        var msg;

        if(!only_num($(this).val())) {
            msg = "<p class=\"input_error\"><b>학번를 정확하게 입력해 주세요.</b></p>";
        } else {
            msg = "";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
    $("#j_cel").blur(function() {
        $(this).attr("attr_ok","N");
        $("#j_injung_num").attr("attr_ok","N");
        var msg;

        if(!only_num($(this).val())) {
            msg = "<p class=\"input_error\"><b>휴대폰 번호를 정확하게 입력해 주세요.</b></p>";
        } else {
            msg = "";
            $(this).attr("attr_ok","Y");
        }

        $("#nt_"+$(this).attr("id")).html(msg);
    });
});

