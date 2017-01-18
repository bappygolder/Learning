/*jshint esversion: 6*/
//local project location: file:///C:/Users/Bappy%20Golder/Desktop/Projects/Learning/01.%20TreeHouse/00.%20Introduction%20to%20jQuery%20-%20WithA%20isha%20Blake/website%20interaction%20with%20jQuery%20-%20Pet%20Adoption%20Site/index.html

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
    var $newPet = '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $petName +
        '</p><p><strong>Species:</strong> ' + $petSpecies +
        '</p><p><strong>Notes:</strong> ' + $petNotes +
        '</p><span class="close">&times;</span></div></section>';

    //add the HTML on the page
    $('#posted-pets').append($newPet);
});

//puppy image faddeIn
$('img').css('display', 'none').fadeIn('slow');


//apply selected highlight on/off design based on clicks
$('.card').on('click', function() {
    $(this).toggleClass('selected');
});
