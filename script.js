var willSmith = "http://www.stickpng.com/assets/images/586b8134b6fc1117b60b27a7.png";
var lupitaNyongo = ["http://www.stickpng.com/assets/images/5890febcb0d25102c5b122a8.png"];
var constanceWu = ["https://pixel.nymag.com/imgs/daily/vulture/2018/12/06/06-constance-wu-chatroom-silo.w330.h412.png"];


$('button').click(function() {
    var input = $('input').val();
    $(".images").html("");
    if (input === "horror") {
        horrorMovie();
    } else if (input === "comedy") {
        comedyMovie();
    } else if (input === "romance") {
        romanceMovie();
    } else {
        alert("Please enter comedy, romance, or horror!");
    }
});


function horrorMovie() {
    changeBackground("https://wallpapercave.com/wp/oBFaBiu.jpg");
    changeTextColor("red");
    displayImage(willSmith);
}

function comedyMovie() {
    changeBackground("https://image.freepik.com/free-vector/comedy-movie-neon-sign-luminous-3d-glasses-brick-wall-background_1262-13408.jpg");
    changeTextColor();
    displayImage(lupitaNyongo);
}

function romanceMovie() {
    changeBackground("https://cdn.pixabay.com/photo/2018/03/10/17/16/woman-3214594__340.jpg");
    changeTextColor();
    displayImage(constanceWu);
}


function changeBackground(backgroundImage) {
    $('body').css('background-image', "url(" + backgroundImage + ")");
}

function changeTextColor(color) {
    $('body').css('color', color);
}

function displayImage(image) {
    $('.images').append('<img src =' + image + '>');

}