// This component represents a search input field with a magnifying glass icon.
// Este componente representa un campo de entrada de búsqueda con un icono de lupa.
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

function SearchInput() {
	return (
		<div className='flex items-center bg-white rounded-full p-4 w-full'>
			{/* Input field for searching */}
			<input
				type='text'
				placeholder='Search'
				className='bg-transparent focus:outline-none flex-grow'
			/>
			{/* Magnifying glass icon */}
			<MagnifyingGlassIcon className='w-5 h-5 mr-2 text-gray-400' />
		</div>
	);
}

export default SearchInput;
