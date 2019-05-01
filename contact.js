console.log("i work!");

//when burger icon is pressed, mobile-menu pops up, toggle the menu

$('.burger').on('click', () => {
    $('.mobile-menu').toggleClass('show');
});
