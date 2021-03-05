$("#profile").hover(function() {
    $("#profileContainer").toggle();


});

$("#friend").click(function() {
    $("#testimonyContainer").toggle();
});
$("#friend").dblclick(function() {
    window.location.href = $(this).data("link");
});

$("#btnAnimate").click(function() {
    $("#picAnimate").animate({
        width: "20%",
        height: "30%"


    });
});
$("#btn").click(function() {
    $num = $('#firstNum').val();
    $base2 = $("#toBase").val();
    $("#result").val(parseInt($num, $base2))
});
$("#btnDate").click(function() {
    date = $("#date").val();
    ndx1 = date.indexOf("/")
        // console.log(date.search("/12/"))
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

// $("#btnWeek").click(function() {

//     d = new Date();
//     strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
//     d.setFullYear(2018)
//     d.setMonth(2)
//     console.log(d.getFullYear() + "" + )
// });