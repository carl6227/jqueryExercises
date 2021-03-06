$("#introBtn").click(function() {
    $('#alert').toggle()
});


$("#profile").hover(function() {
    $("#profileContainer").toggle();
    $(this).animate({
        width: "100%"
    }).css('box-shadow', '10px 20px 30px -10px #888');
});
$("#profile").mouseout(function() {
    $(this).animate({
        width: "80%"
    });
});

$("#friend").click(function() {
    $("#testimonyContainer").toggle();

});
$("#friend").dblclick(function() {
    window.location.href = $(this).data("link");
});
$("#friend").hover(function() {
    $(this).animate({
        width: "100%"
    }).css('box-shadow', '10px 20px 30px -10px #888');
});
$("#friend").mouseout(function() {
    $(this).animate({
        width: "80%"
    });
});
$("#btnAnimate").click(function() {
    $("#picAnimate").css('box-shadow', '10px 20px 30px -10px #888');
    $(".picAnimate").animate({
        width: "70%"
    }, 1000).css('box-shadow', '10px 20px 30px -10px #888');

});
$("#btnAnimate").mouseout(function() {
    $(".picAnimate").animate({
        width: "100%",
    }, 1000);
});

// conversion jquery
$("#btn").click(function() {
    $num = $('#firstNum').val();
    $base2 = $("#toBase").val();
    $("#result").val(parseInt($num, $base2))
});

// display month 
$("#btnDate").click(function() {
    date = $("#date").val();
    ndx1 = date.indexOf("/")
    month = parseInt(date.slice(ndx1 + 1, ndx1 + 3));
    switch (month) {
        case 1:
            $("#monthOf").val("JANUARY")
            break;
        case 2:
            $("#monthOf").val("FEBUARY")
            break;
        case 3:
            $("#monthOf").val("MARCH")
            break;
        case 4:
            $("#monthOf").val("APRIL")
            break;
        case 5:
            $("#monthOf").val("MAY")
            break;
        case 6:
            $("#monthOf").val("JUNE")
            break;
        case 7:
            $("#monthOf").val("JULY")
            break;
        case 8:
            $("#monthOf").val("AUGUST")
            break;
        case 9:
            $("#monthOf").val("SEPTEMBER")
            break;
        case 10:
            $("#monthOf").val("OCTOBER")
            break;
        case 11:
            $("#monthOf").val("NOVEMBER")
            break;
        case 12:
            $("#monthOf").val("DECEMBER")
            break;
        default:
            $("#monthOf").val("NO CORRESPONDING MONTH")
    }
});

// display week
$("#btnWeek").click(function() {
    dateInput = new Date($("#dateInput").val());
    $("#week").val("Weekdays")
    if ((dateInput.getDay() == 6) || (dateInput.getDay() == 0)) {
        $("#week").val("Weekend")
    }
})