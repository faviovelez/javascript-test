// Variables // 
	
$('document').ready(function() {
	var translated = 0;
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
	var quoteCreated = $('.quote--new');	
	var description = $('.about-me--description');
	var quoteTwo;
	var quoteCreated;
	var author;
	var quoteBtnTwo = $('.quote-btn-two');
	var themeChanger = $('.theme-changer-btn');
	var scrollPosition = 0;
	var themeRestore = $('.theme-restore-btn');
	console.log('hello world');
	console.log(translated);

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
		initialQuote: '"The future belongs to those who believe in the beauty of their dreams."',
		anotherQuote: "See another Quote",
		mkt: "Marketing Strategy",
		sales: "Sales Management",
		business: "Business Modeling",
		quoteCreated: '"Whatever you can do or dream you can, begin it. Boldness has genius, power and magic in it."',
		author: "John Anster, The First Part of Faust (Goethe).",
		quoteBtnTwo: "Hide quote",
		themeChanger: "Change theme",
		themeRestore: "Restore theme",
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
		initialQuote: '"El futuro pertenece a aquellos que creen en la belleza de los sueños."',
		anotherQuote: "Ver otra frase",
		mkt: "Estrategia de Mercadotecnia",
		sales: "Gestión de Fuerza de Ventas",
		business: "Adaptación de Modelos de Negocio",
		quoteCreated: '"Lo que puedas hacer o soñar, ponte a hacerlo. La osadía está llena de genialidad, poder y magia."',
		author: "John Anster, La primera parte de Fausto (Goethe).",
		quoteBtnTwo: "Ocultar frase",
		themeChanger: "Cambiar estilo",
		themeRestore: "Reestablecer estilo",
	};

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
		quoteCreated.text(english.quoteCreated);
		author.text(english.author);
		quoteBtnTwo.text(english.quoteBtnTwo);
		themeChanger.text(english.themeChanger);
		themeRestore.text(english.themeRestore);
		var translated = 0;
		console.log(translated);
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
		quoteCreated.text(spanish.quoteCreated);
		author.text(spanish.author);
		quoteBtnTwo.text(spanish.quoteBtnTwo);
		themeChanger.text(spanish.themeChanger);
		themeRestore.text(spanish.themeRestore);
		var translated = 1;
		console.log(translated);
	});

	quoteBtn.click(function() {
		event.preventDefault();
		quoteOne.removeClass('col-md-10');
		quoteOne.addClass('col-md-4');
		quotesContainer.append('<div class="quote--two col-md-4 col-xs-12 col-md-offset-2"><p class="quotes quote--new"></p><span class="author"></span><br><a href="" class="btn btn-primary btn-transparent quote-btn-two"></a></div>');
		var quoteTwo = $('.quote--two');
		var quoteCreated = $('.quote--new');
		var author = $('.author');
		var quoteBtnTwo = $('.quote-btn-two');
		if (translated > 0) {
			quoteCreated.text(spanish.quoteCreated);
			author.text(spanish.author);
			quoteBtnTwo.text(spanish.quoteBtnTwo);
		} else {
			quoteCreated.text(english.quoteCreated);
			author.text(english.author);
			quoteBtnTwo.text(english.quoteBtnTwo);
		};		
		quoteBtn.css("visibility", "hidden");
		quoteOne.css("margin-bottom", "4rem");
		quoteTwo.css("margin-bottom", "4rem");
		quoteBtnTwo.click(function() {
			event.preventDefault();
			quoteTwo.remove();
			quoteCreated.remove();
			quoteBtnTwo.remove();
			quoteOne.addClass('col-md-10');
			quoteOne.removeClass('col-md-4');	
			quoteBtn.css("visibility", "visible");
		});
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

	themeChanger.click(function() {
		event.preventDefault();
		$('body').css("background-color", "#0a0b0c");
		$('body').css("color", "#fff");
		$('body').css("font-family", "Noto Serif");
		$('h2').css("font-family", "Noto Serif");
		$('.jumbotron').css("background-image", "url(https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=73012694e746cd95566fdfe66fb251a2)"); 
		$('.thumbnail').css("background-color", "#0a0b0c");
		$('.caption').css("color", "#fff");
		$('.btn-transparent').css("border-style", "solid");
		$('.btn-transparent').css("border-color", "#fff");
		$('.btn-transparent').css("border-width", "1px");
		});
	themeRestore.click(function() {
		event.preventDefault();
		$('body').css("background-color", "#fff");
		$('body').css("color", "#333");
		$('body').css("font-family", "Ubuntu");
		$('h2').css("font-family", "Ubuntu");
		$('.jumbotron').css("background-image", "url(https://hd.unsplash.com/photo-1435163570436-d7c1dee361c4"); 
		$('.thumbnail').css("background-color", "#fff");
		$('.caption').css("color", "#333");
		$('.btn-transparent').css("border-style", "solid");
		$('.btn-transparent').css("border-color", "#333");
		$('.btn-transparent').css("border-width", "1px");
		$('.btn-transparent').css("border", "none");
		});

}); // Document ready closure
