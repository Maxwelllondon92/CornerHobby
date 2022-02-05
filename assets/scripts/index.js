$(function () {
    ////// VARIABILI GLOBALI
    ////// CALLBACK
    checkWindow();
    showCurrentCategoryGenres();
    ////// EVENT HANDLERS
    $(window).on("resize", checkWindow);
    $('#ch-categories').on('change', showCurrentCategoryGenres);
    // filtriBtn.on("click", function():void {
    //});
    ////// ELENCO FUNZIONI
    function checkWindow() {
        if (visualViewport.width >= 992) {
            //desktop
            $("#ch-filterBtn").hide();
            $('#ch-filters').removeClass('offcanvas offcanvas-bottom');
            $('#ch-filters').addClass('col-lg-3');
            $('#ch-filters').css("visibility", "visible");
            $('.ch-genres').children('ul').removeClass('flex-row flex-wrap');
            $('.ch-genres').children('ul').addClass('flex-column flex-nowrap');
        }
        else {
            //mobile
            $("#ch-filterBtn").show();
            $('#ch-filters').addClass('offcanvas offcanvas-bottom');
            $('#ch-filters').removeClass('col-lg-3');
        }
    }
    function showCurrentCategoryGenres() {
        console.log($('#ch-categories').val());
        $('.ch-genres').hide();
        switch ($('#ch-categories').val()) {
            case 'libri':
                $('#ch-book-genres').show();
                break;
            case 'film':
                $('#ch-film-genres').show();
                break;
            case 'musica':
                $('#ch-music-genres').show();
        }
    }
});
