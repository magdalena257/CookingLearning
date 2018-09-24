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

$('.shoplist').on('click', shoplistFunction);

function shoplistFunction() {
    console.log('shoplistFunction');
    $('.shoplisted').toggleClass('activeFeature');
};


$('.feature').on('click', showDescription);

function showDescription() {
    $('.feature').removeClass('largerFeature');
    $('.feature').addClass('smallerFeature');
    $(this).removeClass('smallerFeature');
    $(this).addClass('largerFeature');

    if ($(this).hasClass('shoplist')) {
        $('.shoplist .descriptionFeature').css({
            'font-size': '1.5rem',
            'padding': '5px'
        });


    }


}
// switch(expression) {
//     case x:
//         code block
//         break;
//     case y:
//         code block
//         break;
//     default:
//         code block
// }