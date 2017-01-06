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

//make changes on ADD button click
$('#add-pet').on('click', function() {
    //collect all the values from the input fields
    var $petName = $('#pet-name').val();
    var $petSpecies = $('#pet-species').val();
    var $petNotes = $('#pet-notes').val();

    console.log($petName);
    console.log($petSpecies);
    console.log($petNotes);

    //format the information in the fields in correct HTML
    //add the HTML on the page


});
