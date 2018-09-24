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
    console.log($(this));
}
console.log($('.feature'));
console.log($('.category'));