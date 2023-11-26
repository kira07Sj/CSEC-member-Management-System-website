

app.listen(3000 ,()=>
{
    console.log("Port Connected!");
});
//add members button
$(".add-member-btn").click(function()
{
    $(".add-member-btn").css("display","none");
    $(".member-reg").fadeIn();
});
function blur() {
    $(".logo").addClass("blur");
    $(".sideimg").addClass("blur");
    $(".Startbtn").addClass("blur");
    $(".paragraph").addClass("blur");
    $(".header").addClass("blur");
}

//Get started button
$(".Startbtn").click(function()
{
    $(".signIn").css("display","block");
    blur();
});

$(".switchToMember").click(function()
{
    $(".signIn2").css("display","block");
    $(".signIn").css("display","none");
    blur();
});

$(".switchToAdmin").click(function()
{
    $(".signIn").css("display","block");
    $(".signIn2").css("display","none");
    blur();
});