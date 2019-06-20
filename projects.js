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

function changeThumbnailTwo() {
    $('.js-thumbnail-2').on('click', function(event) 
    {
        const $imgSrc2 = $(this).find('img').attr('src');
        const $imgAlt2 = $(this).find('img').attr('alt');
        $('.hero-2 img').attr('src', $imgSrc2).attr('alt', $imgAlt2);
    });
}

$(changeThumbnail);
$(changeThumbnailTwo);