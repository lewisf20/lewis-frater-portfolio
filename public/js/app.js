/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
	'particles-js',

	{
		particles: {
			number: {
				value: 40,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: ['#F4B23F'],
			},
			shape: {
				type: 'star',
			},
			opacity: {
				value: 0.9,
				random: true,
				anim: {
					enable: false,
					speed: 2,
					opacity_min: 0.4,
					sync: false,
				},
			},
			size: {
				value: 10,
				random: true,
			},
			line_linked: {
				enable: false,
				distance: 150,
				color: '#ffffff',
				opacity: 0.4,
				width: 1,
			},
			move: {
				enable: true,
				speed: 3,
				direction: 'none',
				random: true,
				straight: false,
				out_mode: 'out',
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: 'canvas',
			events: {
				onhover: {
					enable: true,
					mode: 'grab',
				},
				onclick: {
					enable: true,
					mode: 'push',
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 200,
					line_linked: {
						opacity: 1,
					},
				},
				push: {
					particles_nb: 4,
				},
			},
		},
		retina_detect: true,
	}
);
