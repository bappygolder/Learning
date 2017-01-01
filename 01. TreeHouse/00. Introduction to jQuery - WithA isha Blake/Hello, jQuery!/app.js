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
