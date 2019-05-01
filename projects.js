console.log("I work!")

$('.burger').on('click', () => {
    $('.mobile-menu').toggleClass('show');
});

function changeThumbnail() {
    $('.js-thumbnail').on('click', function(event) 
    {
        const $imgSrc = $(this).find('img').attr('src');
        const $imgAlt = $(this).find('img').attr('alt');
        $('.hero img').attr('src', $imgSrc).attr('alt', $imgAlt);
    });
}

$(changeThumbnail);

