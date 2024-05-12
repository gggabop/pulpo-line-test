// This component represents a navigation bar with buttons and icons.
// Este componente representa una barra de navegación con botones e iconos.
import { useState } from 'react';
import local_dining from '../assets/icons/local_dining.svg';
import stockpot from '../assets/icons/stockpot.svg';
import list_alt from '../assets/icons/list_alt.svg';
import bar_chart_4_bars from '../assets/icons/bar_chart_4_bars.svg';
import grid_view from '../assets/icons/grid_view.svg';
import notifications from '../assets/icons/notifications.svg';
import settings from '../assets/icons/settings.svg';
import logout from '../assets/icons/logout.svg';

function NavBar() {
	const [activeButton, setActiveButton] = useState(null);
	// This function helps to render the active or inactive state of the navbar buttons.
	// Esta función ayuda a renderizar el estado activo o inactivo de los botones de la barra de navegación.
	const handleButtonClick = (buttonName) => {
		setActiveButton(buttonName === activeButton ? null : buttonName);
	};

	return (
		<div className='w-28 text-white mx-4 mt-10 mb-16 navbar-background rounded-2xl hidden md:flex flex-col'>
			<div className='flex items-center justify-center h-20 mb-10'>
				<button
					className={`px-6 py-3 rounded-full ${
						// Validation to have active or inactive background.
						// Validación para tener fondo activo o inactivo.
						activeButton === 'WrenchScrewdriver' ? 'bg-white bg-opacity-40' : ''
					}`}
					onClick={() => handleButtonClick('WrenchScrewdriver')}
				>
					<img src={local_dining} className='w-10 h-10' />
				</button>
			</div>
			<div className='flex flex-col items-center'>
				<nav className='flex flex-col mt-4 space-y-8'>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'Stock' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('Stock')}
					>
						<img src={stockpot} className='w-5 h-5' />
					</button>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'ListBullet' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('ListBullet')}
					>
						<img src={list_alt} className='w-5 h-5' />
					</button>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'ChartBar' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('ChartBar')}
					>
						<img src={bar_chart_4_bars} className='w-5 h-5' />
					</button>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'Squares2X2' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('Squares2X2')}
					>
						<img src={grid_view} className='w-5 h-5' />
					</button>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'Bell' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('Bell')}
					>
						<img src={notifications} className='w-5 h-5' />
					</button>
					<button
						className={`focus:outline-none p-3 flex justify-center rounded-lg hover:bg-white hover:bg-opacity-20 transition-opacity duration-300 ${
							activeButton === 'Cog6Tooth' ? 'bg-white bg-opacity-40' : ''
						}`}
						onClick={() => handleButtonClick('Cog6Tooth')}
					>
						<img src={settings} className='w-5 h-5' />
					</button>
				</nav>
			</div>
			<div className='flex grow items-end justify-center mb-20'>
				<button
					className={`px-6 py-3 rounded-full ${
						activeButton === 'ArrowLeftStartOnRectangle'
							? 'bg-white bg-opacity-40'
							: ''
					}`}
					onClick={() => handleButtonClick('ArrowLeftStartOnRectangle')}
				>
					<img src={logout} className='w-8 h-8' />
				</button>
			</div>
		</div>
	);
}

export default NavBar;
