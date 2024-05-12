import { useEffect, useState } from 'react';
import indonesia_food from '../assets/images/indonesia_food.png';
import japanese_food from '../assets/images/japanese_food.png';
import korean_food from '../assets/images/korean_food.png';

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title }) => {
	return (
		<div className='relative bg-white rounded-xl overflow-hidden shadow-md min-w-40 md:min-w-0'>
			{/* Image */}
			<img
				className='w-full h-36 md:h-34 object-cover object-center'
				src={imageSrc}
				alt={title}
			/>
			{/* Title Section */}
			<div className='absolute inset-0 bg-gradient-to-t from-black opacity-100'></div>
			<div className='absolute inset-0 flex items-end'>
				<h2 className='text-white text-lg px-4 py-2'>{title}</h2>
			</div>
		</div>
	);
};

const Categories = () => {
	// Estado para verificar si se cumple el ancho mínimo de pantalla
	// Status to check if the minimum screen width is met
	const [matches, setMatches] = useState(
		window.matchMedia('(min-width: 768px)').matches
	);

	// This useEffect checks if the min width is met, if it is met, it generates a match to make the component change its style
	// este useEffect verifica si el min width se cumple si se cumple genera un match para hacer que el componente cambie su estilo
	useEffect(() => {
		window
			.matchMedia('(min-width: 768px)')
			.addEventListener('change', (e) => setMatches(e.matches));
	}, []);

	return (
		<div className='px-8 md:px-0 md:py-4'>
			{/* Title Section */}
			<h3 className='text-2xl my-4'>Categories</h3>
			<div
				className='overflow-x-auto scrollbar-hide'
				style={{
					width: matches ? '100%' : '90vw',
				}}
			>
				{/* Cards */}
				<div className='flex space-x-2 md:grid md:grid-cols-3 md:gap-1'>
					<Card imageSrc={indonesia_food} title='Indonesia Food' />
					<Card imageSrc={japanese_food} title='Japanese Food' />
					<Card imageSrc={korean_food} title='Korean Food' />
				</div>
			</div>
		</div>
	);
};

export default Categories;
