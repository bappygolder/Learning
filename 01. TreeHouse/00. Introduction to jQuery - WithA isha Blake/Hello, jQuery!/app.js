/*jshint esversion: 6*/

$('li').on('click', function() {
    $(this).text("Clicked!").delay(2000).fadeOut(400);
});


/*selector examples
	element:
		$(p), $(a), $(li) etc.
	id & class selectors:
		$('.blog-post');
		$('#about');
	attribute selectors:
		$("[name='newletter']");

note: they are same as class*/

//make all the odd elements in the second list background blue
const list2 = $('.ul2 li');
list2.not(":even").css('background-color', 'steelblue').css('color', '#e2e2e2');

//show link value in console
console.log($('a').attr('href'));

//on button click update link attribute to BG home page
$('.changeLink').click(() => {
    $('a').attr('href', 'http://bappygolder.com/');
    console.log($('a').attr('href'));
});

//on click of reset page reset the link of the link
//..not working
// $('.resetBtn').click(() => {
//     $('a').attr('herf', 'https://www.google.com');
//     console.log('Linke reset: ' + $('a').attr('href'));
// });

//get all the the site links that are not part of our website to open in a new tab
$('a').not("href^='file:///C:/Users/'") //select all the links that are not part of our root domain
    .attr('target', '_blank'); //open then in new tab
