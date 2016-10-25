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
	var aboutTitle = $('.about-me--title');
	var expertiseTitle = $('.expertise--title');
	var quoteTitle = $('.quotes--title');
	var favio = $('#favio-nav');
	var author = $('.author');
	var initialQuote = $('#initial-quote');
	var anotherQuote = $('.quote-btn-one');
	var mkt = $('.mkt');
	var sales	= $('.sales');
	var business = $('.business');	
	var description = $('.about-me--description');
	var quoteNew = $('.quote--new');
	var quoteBtnTwo = $('.quote-btn-two');
	var quoteTwo = $('.quote--two');

	var english = {
		aboutMe: "About me",
		expertise: "Expertise",
		quote: "Quotes",
		jumboHeader: "Join the technology revolution",
		jumboParagraph: "Take advantage of online tools to boost your sales. I will help you increase your customer base and loyalty",
		jumboBtn: "Find more",
		aboutTitle: "About me",
		description: "I'm an independent Marketing professional with a strong believe that any company can increase their customer base and profits making small but powerful changes in their processes and Marketing strategies. I can Help your business to grow steadily.",
		expertiseTitle: "Areas of Expertise",
		quoteTitle: "My Favorite Quotes",
		initialQuote: "The future belongs to those who believe in the beauty of their dreams.",
		anotherQuote: "See another Quote",
		mkt: "Marketing Strategy",
		sales: "Sales Management",
		business: "Business Modeling",
		quoteNew: "Whatever you can do or dream you can, begin it. Boldness has genius, power and magic in it!",
		quoteBtnTwo: "Hide quote",
	};

	var spanish = {
		aboutMe: "Acerca de mi",
		expertise: "Experiencia",
		quote: "Frases",
		jumboHeader: "Únete a la revolución digital",
		jumboParagraph: "Utiliza las herramientas en línea para aumentar tus ventas. Te ayudaré a aumentar tus base de clientes leales",
		jumboBtn: "Conocer más",
		aboutTitle: "Acerca de mi",
		description: "Soy un mercadólogo independiente que cree firmemente que toda empresa puede aumentar la cantidad de clientes repetitivos y sus ingresos, haciendo solo algunos pequeños (pero significativos) cambios en sus procesos y estrategias de Mercadotecnia. Yo puedo ayudar a que su negocio crezca de manera sostenida.",
		expertiseTitle: "Áreas de Experiencia",
		quoteTitle: "Mis Frases Favoritas",
		initialQuote: "El futuro pertenece a aquellos que creen en la belleza de los sueños.",
		anotherQuote: "Ver otra frase",
		mkt: "Estrategia de Mercadotecnia",
		sales: "Gestión de Fuerza de Ventas",
		business: "Modelos de Negocio",
		quoteNew: "Lo que puedas hacer o soñar, ponte a hacerlo. La osadía está llena de genialidad, poder y magia.",
		quoteBtnTwo: "Ocultar frase",
	};

	quoteBtn.click(function() {
		event.preventDefault();
		quoteOne.removeClass('col-md-10');
		quoteOne.addClass('col-md-4');
		spnBtn.on('click change', function() {
    $(this).data('clicked', true);
		});
		if (spnBtn.data('clicked')) {
			quotesContainer.append('<div class="quote--two col-md-4 col-xs-12 col-md-offset-2"> <p class="quotes quote--new"> "Whatever you can do or dream you can, begin it. Boldness has genius, power and magic in it!".</p><span class="author">John Anster, The First Part of Faust (Goethe).</span><br><a href="" class="btn btn-primary btn-transparent quote-btn-two">Hide quote</a> </div>');
		} else {
			quotesContainer.append('<div class="quote--two col-md-4 col-xs-12 col-md-offset-2"> <p class="quotes quote--new"> "Lo que puedas hacer o soñar, ponte a hacerlo. La osadía está llena de genialidad, poder y magia.".</p><span class="author">John Anster, La primera parte de Fausto (Goethe).</span><br><a href="" class="btn btn-primary btn-transparent quote-btn-two">Ocultar frase</a> </div>');
		}	
		quoteBtn.css("visibility", "hidden");
		quoteOne.css("margin-bottom", "4rem");
		quoteTwo.css("margin-bottom", "4rem");
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

	engBtn.click(function() {
		event.preventDefault();
		aboutMe.text(english.aboutMe);
		expertise.text(english.expertise);
		quote.text(english.quote);
		jumboHeader.text(english.jumboHeader);
		jumboParagraph.text(english.jumboParagraph);
		jumboBtn.text(english.jumboBtn); 
		description.text(english.description);
		initialQuote.text(english.initialQuote);
		anotherQuote.text(english.anotherQuote);
		quoteTitle.text(english.quoteTitle);
		aboutTitle.text(english.aboutTitle);
		expertiseTitle.text(english.expertiseTitle);
		mkt.text(english.mkt);
		sales.text(english.sales);
		business.text(english.business);
	});

	spnBtn.click(function() {
		event.preventDefault();
		aboutMe.text(spanish.aboutMe);
		expertise.text(spanish.expertise);
		quote.text(spanish.quote);
		jumboHeader.text(spanish.jumboHeader);		
		jumboParagraph.text(spanish.jumboParagraph);		
		jumboBtn.text(spanish.jumboBtn);
		description.text(spanish.description);
		initialQuote.text(spanish.initialQuote);
		anotherQuote.text(spanish.anotherQuote);
		quoteTitle.text(spanish.quoteTitle);
		aboutTitle.text(spanish.aboutTitle);
		expertiseTitle.text(spanish.expertiseTitle);
		mkt.text(spanish.mkt);
		sales.text(spanish.sales);
		business.text(spanish.business);

	});

	aboutMe.click(function() {   
		$('body').animate({ scrollTop: 680}, 'slow');
	});

	expertise.click(function() {   
		$('body').animate({ scrollTop: 1180}, 'slow');
	});

	quote.click(function() {   
		$('body').animate({ scrollTop: 1480}, 'slow');
	});

	favio.click(function() {   
		$('body').animate({ scrollTop: 0}, 'slow');
	}); 

}); // Document ready closure


/*
	var objectValues = {
	 aboutMe: $('#about-nav'),
	 expertise: $('#expertise-nav'),
	 quote: $('#quote-nav'),
	 engBtn: $('#en'),
	 spnBtn: $('#es'),
	 jumboHeader: $('.call-to-action'),
	 jumboParagraph: $('.description-to-action'),
	 jumboBtn: $('#find-more'),
	 aboutTitle: $('about-me--title'),
	};

	engBtn.click(function() {
		event.preventDefault();
		$.each(objectValues, function(key) {
	    if (objectValues.key == english.key) {
	    	var thisKey = objectValues.key;
	    	thisKey.text(english.key);
	    }
		}); 
	});
*/

//		quoteNew.text(spanish.quoteNew);
//		quoteBtnTwo.text(spanish.quoteBtnTwo);

//			quoteNew.text(english.quoteNew);
//			quoteBtnTwo.text(english.quoteBtnTwo);
