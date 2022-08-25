$('.close-instructions').on('click touchend', function() {
    $('.instructions').removeClass('instructions-open');
    $('.open-instructions').removeClass('tab-hidden');
    $(this).addClass('tab-hidden');
});

$('.open-instructions').on('click touchend', function() {
    $('.instructions').addClass('instructions-open');
    $('.close-instructions').removeClass('tab-hidden');
    $(this).addClass('tab-hidden');
});

setTimeout(() => {
    $('.instructions').addClass('instructions-open');

}, 1000);