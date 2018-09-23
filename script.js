$('.tabMain').on('click', activeContent);

function activeContent() {

    // TAB CHANGE
    $('.tabMain').removeClass("activetab");
    $(this).addClass('activetab');
    // console.log($(this));

    // CONTENT CHANGE
    if ($(this).hasClass('breakfast')) {
        console.log('breakfast')
        $('.contentMainDinner').removeClass('activeCategory');
        $('.contentMainSnacks').removeClass('activeCategory');
        $('.contentMainBreakfast').addClass('activeCategory');

    } else if ($(this).hasClass('dinner')) {
        console.log('dinner')
        $('.contentMainBreakfast').removeClass('activeCategory');
        $('.contentMainSnacks').removeClass('activeCategory');
        $('.contentMainDinner').addClass('activeCategory');
    } else if ($(this).hasClass('snacks')) {
        console.log('snacks')
        $('.contentMainBreakfast').removeClass('activeCategory');
        $('.contentMainDinner').removeClass('activeCategory');
        $('.contentMainSnacks').addClass('activeCategory');
    }
}