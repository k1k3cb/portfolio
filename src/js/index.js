// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');
const hamburgerElement = document.getElementById('hamburger-menu');

const portfolioWorks = [
	{
		image: '/assets/images/password-generator.jpg',
		title: 'passwordGenerator',
		description:
			'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. ',
		githugLink: ''
	}
];

// const addWork = () => {
// 	portfolioWorks.forEach{
// 		blabla.contentTex{

// 		}
// 	};
// };

function toggleMenu() {
	// console.log("click click");
	menuElement.classList.toggle('hidden');
	hamburgerElement.classList.toggle('hamburger-icon-close');
}

toggleMenuElement.addEventListener('click', toggleMenu);

// añadir y eliminar la clase hidden segun tamaño pantalla

const resizeWindow = () => {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		menuElement.classList.remove('hidden');
	} else {
		menuElement.classList.add('hidden');
	}
};

resizeWindow();

window.addEventListener('resize', resizeWindow);

//dark mode

const darkModeButtonElement = document.getElementById('darkmode-btn');

darkModeButtonElement.addEventListener('click', () => {
	// console.log("click click");
	document.body.classList.toggle('dark-mode');
	darkModeButtonElement.classList.toggle('darkmode-icon--white');
});

//carga hasta el fin de la pagina

// window.scroll({
// 		top:99999999999,
// 		behavior:"smooth",
// 	});
