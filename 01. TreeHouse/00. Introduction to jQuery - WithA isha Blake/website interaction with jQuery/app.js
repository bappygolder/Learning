/*jshint esversion: 6*/

$('.loc').hover( // on mouse hover
    function() {
        //console.log('mouse enter');
        $(this).html('<strong>Location:</strong> Your House');
    },
    function() {
        $(this).html('<strong>Location:</strong> Treehouse Adoption Center');
    }
);
