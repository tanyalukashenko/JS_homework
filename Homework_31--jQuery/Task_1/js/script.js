$('.js-tab-trigger').on('click', function() {
    let tabName = $(this).data('tab');
    let tab = $('.js-tab-content[data-tab="'+ tabName +'"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    $('.js-tab-content.active').removeClass('active');
    tab.addClass('active');
})