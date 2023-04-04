$(".showInTable").click(function(){
    $(this).hide();
    $(this).next("aside").show();
});

// Reset button functions. Clears feedback and brings back the "check answers" buttons.
$(".reset").click(function(){
    $(".cf-table textarea").val('');
    $(".showInTable").show();
    $(".cf-table aside").hide();
});