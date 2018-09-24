$('.tabMain').on('click', activeContent);

function activeContent() {

    // TAB CHANGE
    $('.tabMain').removeClass("activetab");
    $(this).addClass('activetab');
    // CONTENT CHANGE
    $('.category').removeClass('activeCategory');
    if ($(this).hasClass('breakfast')) {
        $('.contentMainBreakfast').addClass('activeCategory');
    } else if ($(this).hasClass('dinner')) {
        $('.contentMainDinner').addClass('activeCategory');
    } else {
        $('.contentMainSnacks').addClass('activeCategory');
    }
}

// $('.shoplist').on('click', shoplistFunction);

// function shoplistFunction() {
//     console.log('shoplistFunction');

// };


$('.feature').on('click', showDescription);

function showDescription() {
    $('.feature').removeClass('largerFeature');
    $('.shoplisted').removeClass('activeFeature');
    $('.feature').addClass('smallerFeature');
    $(this).removeClass('smallerFeature');
    $(this).addClass('largerFeature');
    $('.descriptionFeature').css({
        'font-size': '0',
        'padding': 'none'
    });
    if ($(this).hasClass('largerFeature')) {
        $('.feature').removeClass('largerFeature');
        $('.descriptionFeature').css({
            'font-size': '0',
            'padding': 'none'
        });
        $('.feature').removeClass('smallerFeature');

    }
    if ($(this).hasClass('shoplist')) {
        $('.shoplist .descriptionFeature').css({
            'font-size': '1.5rem',
            'padding': '5px'
        });
        $('.shoplisted').addClass('activeFeature');

    }
    if ($(this).hasClass('scale')) {
        $('.scale .descriptionFeature').css({
            'font-size': '1.5rem',
            'padding': '5px'
        });
        // $('.shoplisted').addClass('activeFeature');

    }

}