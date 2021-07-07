$(function () {
    
    $('.btn-x').hide();
    
    $('.btn').on('click', function () {
        $('.menu').addClass('active-menu');
        $('.btn-x').show();
        $('.btn').hide();
    })
    
    $('.btn-x').on('click', function () { 
        $('.menu').removeClass('active-menu');
        $('.btn-x').hide();
        $('.btn').show();
     })
    
})