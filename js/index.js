$(document).ready(function() {
    openModal()
});

function openModal() {
    $('[data-open-modal]').click(function() {
        $('.menu').toggleClass('show');
        $('header').toggleClass('blur');
    });
}

