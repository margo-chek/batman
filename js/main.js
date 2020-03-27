$(document).ready(function () { // jqRea - загрузился ли документ? готов к работе?
    // console.log ('страница загрузилась');
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function(event) {
        event.preventDefault();
        // console.log($(this).attr('href')); // атрибут, по которому мы кликнули имеет href
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-activ').toggleClass('tabs-item-activ'); // удалить
        $(this).toggleClass('tabs-item-activ'); // для блока, на который мы кликнули, присвоить класс .tabs-item-activ
    })
});