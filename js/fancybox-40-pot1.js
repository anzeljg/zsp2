$(document).ready(function() {

	/*
	 *  Odmevi v časopisju
	 */
	$('#news01').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/01.jpg',
				opts : {
					caption : 'Vir: Iz sporočila javnosti, ki ga je Predsedstvo Republike Slovenije sprejelo na seji 27. junija 1991. Primorske novice, 1991, št. 51, str. 1.',
					thumb   : 'thumb/40/pot1/01.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news03').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/03.jpg',
				opts : {
					caption : 'Vir: Primorci množično ustavljali tanke, Primorske novice, 1991, št. 51, str. 2.',
					thumb   : 'thumb/40/pot1/03.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news04').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/04.jpg',
				opts : {
					caption : 'Vir: Vojaki divjali po Vipavi, Primorske novice, 1991, št. 54, str. 11.',
					thumb   : 'thumb/40/pot1/04.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news05').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/05.jpg',
				opts : {
					caption : 'Vir: Hubelj: No passaran!, Primorske novice, 1991, št. 51, str. 3.',
					thumb   : 'thumb/40/pot1/05.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news06').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/06.jpg',
				opts : {
					caption : 'Vir: Nikoli ne bi streljal na svoje ljudi, Primorske novice, 1991, št. 53, str. 16.',
					thumb   : 'thumb/40/pot1/06.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news07').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/07.jpg',
				opts : {
					caption : 'Vir: Letalski napad na Nanos, Primorske novice, 1991, posebna izdaja, str. 4.',
					thumb   : 'thumb/40/pot1/07.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

	$('#news08').click(function () {
		$.fancybox.open([
			{
				src: 'media/40/pot1/08.jpg',
				opts : {
					caption : 'Vir: Groza črnovrške noči, Primorske novice, 1991, št. 53, str. 4.',
					thumb   : 'thumb/40/pot1/08.jpg'
				}
			},
		], {
			loop: false,
			buttons: ["zoom", "thumbs", "close"],
			thumbs: { autoStart: true }
		});
	});

});
