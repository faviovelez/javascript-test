$('document').ready(function() {
	console.log('hello world');
	var quotesContainer = $('.quotes--container');
	var quoteOne = $('.quote--one');
	var quoteBtn = $('.quote-btn-one');
	var aboutMe = $('#about-nav');
	var expertise = $('#expertise-nav');
	var quote = $('#quote-nav');
	var engBtn = $('#en');
	var spnBtn = $('#es');
	var jumboHeader = $('.call-to-action');
	var jumboParagraph = $('.description-to-action');
	var jumboBtn = $('#find-more');
	var aboutTitle = $('about-me--title');

	var english = {
		about: "About me",
		expertise: "Expertise",
		quotes: "Quotes",
		callToAction: "Join the technology revolution",
		descriptionAction: "Take advantage of online tools to boost your sales. I will help you increase your customer base and loyalty",
		findMore: "Find more",
		aboutTitle: "About me",
	};

	var spanish = {
		about: "Acerca de mi",
		expertise: "Experiencia",
		quotes: "Frases",
		callToAction: "Únete a la revolución digital",
		descriptionAction: "Utiliza las herramientas en línea para aumentar tus ventas. Te ayudaré a aumentar tus base de clientes leales",
		findMore: "Conocer más",
		aboutTitle: "Acerca de mi",
	};

	engBtn.click(function() {
		event.preventDefault();
		aboutMe.text(english.about);
		expertise.text(english.expertise);
		quote.text(english.quotes);
		jumboHeader.text(english.callToAction);
		jumboParagraph.text(english.descriptionAction);
		jumboBtn.text(english.findMore);
	});

	spnBtn.click(function() {
		event.preventDefault();
		aboutMe.text(spanish.about);
		expertise.text(spanish.expertise);
		quote.text(spanish.quotes);
		jumboHeader.text(spanish.callToAction);		
		jumboParagraph.text(spanish.descriptionAction);		
		jumboBtn.text(spanish.findMore);
	});

	console.log(spanish.callToAction);

	aboutMe.click(function() {   
		$('body').animate({ scrollTop: 680}, 'slow');
	});

	expertise.click(function() {   
		$('body').animate({ scrollTop: 1180}, 'slow');
	});

	quote.click(function() {   
		$('body').animate({ scrollTop: 1480}, 'slow');
	});

	quoteBtn.click(function() {
		event.preventDefault();
		quoteOne.removeClass('col-md-10');
		quoteOne.addClass('col-md-4');	
		quotesContainer.append('<div class="quote--two col-md-4 col-xs-12 col-md-offset-2"> <p class="quotes quote--new">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio illum ipsam possimus maiores nobis, accusantium magni, quas, facilis fugiat iure ad necessitatibus. Magni aut quam temporibus quod. Aut, nesciunt.</p> <a href="" class="btn btn-primary btn-transparent quote-btn-two">Hide quote</a> </div>');
		quoteBtn.css("visibility", "hidden");
		quoteOne.css("margin-bottom", "4rem");
		var quoteTwo = $('.quote--two');
		quoteTwo.css("margin-bottom", "4rem");
		var quoteNew = $('.quote--new');
		var btnTwo = $('.quote-btn-two');
		var quoteBtnTwo = $('.quote-btn-two');
		quoteBtnTwo.click(function() {
			event.preventDefault();
			quoteTwo.remove();
			quoteNew.remove();
			btnTwo.remove();
			quoteOne.addClass('col-md-10');
			quoteOne.removeClass('col-md-4');	
			quoteBtn.css("visibility", "visible");
		})
	});	
});





/*
$(document).ready(function() {
	console.log('Hello World');
	var navbar = $('#navbar-fixed');
	var scroll_pos = 0;
	var navBio =  $('#navBio'),
	    navExp =  $('#navExperience'),
	    profile = $('#profile');

	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 200){
			//navbar.css("background-color", "#6d2529");
			navbar.addClass('theme--white');
		}
		else {
			//navbar.css("background-color", "transparent");
			navbar.removeClass('theme--white');
			navbar.css({
				'transition':'.5s all ease-out'
			});
		}
	});

	navBio.on('click', function() {
		$('body').animate({ scrollTop: 925}, 'slow');
	});

	navExp.on('click', function() {
		$('body').animate({ scrollTop: 1470}, 'slow');
	});

	$('#Container').mixItUp();

	profile.on('click', function() {
		profile.attr('src', 'http://1.bp.blogspot.com/-kJTYjb0BsOs/VbCRdKLt1ZI/AAAAAAAAEBQ/2mB9vOflAD0/s1600/Guti%2Ben%2Bel%2BChiringuito%2Bde%2BChupitos%2Bde%2BJugones.jpg')
	});

	new WOW().init();
});
*/
