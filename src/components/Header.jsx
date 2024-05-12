// This component represents the header section of the application, containing the logo, tagline, search input, and mobile dashboard icon.
// Este componente representa la sección del encabezado de la aplicación, que incluye el logo, el eslogan, el campo de búsqueda y el ícono del panel de control móvil.
import SearchInput from './SearchInput';
import dashboard from '../assets/icons/dashboard.svg';

const Header = () => {
	return (
		<div className='flex mt-2 pt-8 px-4 md:p-0 justify-between items-center'>
			{/* Title */}
			<div className='flex flex-col p-2 md:w-1/4'>
				<div className='flex'>
					<h1 className='text-3xl font-bold text-amber-400'>Food</h1>
					<h1 className='text-3xl text-red-500 font-bold'>Health</h1>
				</div>
				<p>What do you want to eat today?</p>
			</div>
			{/* Search Input */}
			<div className='hidden md:flex items-center mr-14 w-full'>
				<SearchInput />
			</div>
			{/* Icon Mobile */}
			<div className='flex md:hidden'>
				<img
					src={dashboard}
					alt='Mobile SVG'
					className='block md:hidden w-12 h-12 mr-2'
				/>
			</div>
		</div>
	);
};

export default Header;
