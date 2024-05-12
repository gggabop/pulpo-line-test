import { useState } from 'react';
import ayam from '../assets/images/ayam.png';
import dumpling from '../assets/images/dumpling.png';
import smoothie from '../assets/images/smoothie.png';
import watermelon_smoothie from '../assets/images/watermelon_smoothie.png';
import { PlusIcon } from '@heroicons/react/16/solid';
import { MinusIcon, StarIcon } from '@heroicons/react/20/solid';

//this component here renders the order card
// este componente renderiza la tarjeta de la orden
// eslint-disable-next-line react/prop-types
const OrderCard = ({ imageSrc, title, rating = '4.8/5', price = '$320' }) => {
	const [count, setCount] = useState(1);
	return (
		<div className='flex items-center space-x-4 p-3 bg-white rounded-xl mb-5'>
			{/* Image */}
			<img
				src={imageSrc}
				alt='Sambal Fried Fish'
				className='w-30 max-h-28 rounded-xl'
			/>
			<div className='flex flex-col w-full'>
				{/* Title  */}
				<span className='font-semibold'>{title}</span>
				{/* Ratings */}
				<div className='flex items-start text-sm'>
					<StarIcon className='text-yellow-400 w-5 mr-2' />
					<span className='font-medium mr-2'>{rating}</span>
					<span className='text-gray-400'> (1K+ reviews) </span>
				</div>
				{/* Content */}
				<div className='flex justify-between items-center font-medium mt-6'>
					{/* Price */}
					<span className='font-bold'>{price}</span>
					{/* Buttons + & - */}
					<div className='flex items-center space-x-4'>
						<button
							className='w-8 h-8 p-1 text-white transition-colors duration-150 rounded-full focus:shadow-outline bg-gray-400 hover:bg-gray-300'
							onClick={() => setCount((prev) => prev - 1)}
						>
							<MinusIcon />
						</button>
						<span className='font-semibold text-xl'>{count}</span>
						<button
							className='w-8 h-8 p-1 text-white transition-colors duration-150 rounded-full focus:shadow-outline bg-[#F85900] hover:bg-orange-400'
							onClick={() => setCount((prev) => prev + 1)}
						>
							<PlusIcon />
						</button>
					</div>
					{/* End Of Buttons */}
				</div>
			</div>
		</div>
	);
};

export const Cart = () => {
	//Here you can add more cards to render
	//Aquí tu puedes añadir mas cards para que se muestren
	const cards = [
		{
			title: 'Boiled Dumplings',
			imageSrc: dumpling,
		},
		{
			title: 'Ayam Geprek Popular',
			imageSrc: ayam,
		},
		{
			title: 'Berry Blast Smoothie',
			imageSrc: smoothie,
		},
		{
			title: 'Watermelon Smoothie',
			imageSrc: watermelon_smoothie,
		},
	];

	return (
		<div>
			{/* Header Section */}
			<div className='mt-5 flex'>
				{/* TItle Section */}
				<div className='flex space-x-14 w-1/2'>
					<div>
						<h2 className='text-2xl font-semibold'>My Cart</h2>
						<span>Shopping is happy</span>
					</div>
				</div>
				{/* Bell Button */}
				<div className='flex justify-end items-start w-1/2 text-gray-400'>
					<button className='w-1/5'>
						<svg
							width='28'
							height='33'
							viewBox='0 0 46 56'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 47.6V42H5.75V22.4C5.75 18.5267 6.94792 15.085 9.34375 12.075C11.7396 9.065 14.8542 7.09333 18.6875 6.16V4.2C18.6875 3.03333 19.1068 2.04167 19.9453 1.225C20.7839 0.408333 21.8021 0 23 0C24.1979 0 25.2161 0.408333 26.0547 1.225C26.8932 2.04167 27.3125 3.03333 27.3125 4.2V6.16C31.1458 7.09333 34.2604 9.065 36.6562 12.075C39.0521 15.085 40.25 18.5267 40.25 22.4V42H46V47.6H0ZM23 56C21.4188 56 20.0651 55.4517 18.9391 54.355C17.813 53.2583 17.25 51.94 17.25 50.4H28.75C28.75 51.94 28.187 53.2583 27.0609 54.355C25.9349 55.4517 24.5812 56 23 56Z'
								fill='#B9B9B9'
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* Content Section */}
			<div className='my-10'>
				{/* Cards */}
				{cards.map((el, index) => (
					<OrderCard key={index} {...el} />
				))}
			</div>
		</div>
	);
};
