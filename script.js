// INDEX.HTML




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


// RECIPE.HTML




$('.feature').on('click', showDescription);

function showDescription() {
    $('.shoplisted').removeClass('activeFeature');
    $('.scaled').removeClass('activeFeature');
    $('.notScaled').removeClass('inactiveFeature');
    $('.descriptionFeature').removeClass('descriptionFeatureActive');
    $('.priced').addClass('inactiveFeature');
    $('.caloried').addClass('inactiveFeature');
    if ($(this).hasClass('largerFeature')) {
        $('.feature').removeClass('largerFeature');
        $('.feature').removeClass('smallerFeature');
        return 0;

    } else {
        $('.feature').removeClass('largerFeature');
        $('.feature').addClass('smallerFeature');
        $(this).removeClass('smallerFeature');
        $(this).addClass('largerFeature');

    }


    if ($(this).hasClass('shoplist')) {
        $('.shoplist .descriptionFeature').addClass('descriptionFeatureActive');
        $('.shoplisted').addClass('activeFeature');


    }
    if ($(this).hasClass('scale')) {
        $('.scale .descriptionFeature').addClass('descriptionFeatureActive');
        $('.scaled').addClass('activeFeature');
        $('.notScaled').addClass('inactiveFeature');

    }
    if ($(this).hasClass('prices')) {
        $('.prices .descriptionFeature').addClass('descriptionFeatureActive');
        $('.priced').removeClass('inactiveFeature');


    }
    if ($(this).hasClass('calories')) {
        $('.calories .descriptionFeature').addClass('descriptionFeatureActive');
        $('.caloried').removeClass('inactiveFeature');


    }
}