import { useState } from 'react';
import sambal from '../assets/images/sambal.png';
import eggs from '../assets/images/eggs.png';
import noodles from '../assets/images/noodles.png';

// Este componente representa una tarjeta de pedido en la lista de pedidos
// eslint-disable-next-line react/prop-types
const OrderCard = ({ imageSrc, title, date }) => {
	return (
		<div className='flex items-center space-x-4 p-3 bg-white rounded-xl mb-2'>
			<img
				src={imageSrc}
				alt='Sambal Fried Fish'
				className='md:w-24 md:h-24 w-32 rounded-xl'
			/>
			<div className='flex flex-col w-full'>
				<span className='font-semibold'>{title}</span>
				<div className='flex flex-col md:flex-row md:justify-between md:items-center text-gray-400 font-medium'>
					<span>{date}</span>
					<button
						className='text-white bg-[#F85900] hover:bg-orange-400 font-regular px-3 text-xs sm:text-lg py-3 rounded-full hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-3/5 md:w-1/4'
						type='button'
					>
						Order Again
					</button>
				</div>
			</div>
		</div>
	);
};

export const OrdersList = () => {
	//Here you can add more cards to render
	//Aquí tu puedes añadir mas cards para que se muestren
	const cards = [
		{
			title: 'Sambal Fried Fish with Fresh Vegetables',
			date: '7 Dec, 16:10',
			imageSrc: sambal,
		},
		{
			title: 'Archipelago Noodles with Chicken Katsu',
			date: '7 Dec, 16:10',
			imageSrc: eggs,
		},
		{
			title: 'Salted Egg Chicken With Mayonnaise',
			date: '7 Dec, 16:10',
			imageSrc: noodles,
		},
	];

	// state to control the active state of the tabs
	// Estado para controlar la pestaña activa en la lista de pedidos
	const [activeTab, setActiveTab] = useState('Order');

	// function to handle the click in the tabs
	// Función para manejar el clic en las pestañas
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className='px-8 md:px-0'>
			{/* Tabs */}
			<div className='mt-10 flex'>
				<div className='flex md:space-x-20 w-full text-xl md:text-md md:w-1/2 justify-between md:justify-normal'>
					<button
						onClick={() => handleTabClick('Order')}
						className={`tab ease-linear transition-all duration-150 ${
							activeTab === 'Order'
								? 'underline underline-offset-8 font-medium decoration-2'
								: 'text-gray-400'
						}`}
					>
						Order
					</button>
					<button
						onClick={() => handleTabClick('Delivered')}
						className={`tab ease-linear transition-all duration-150 ${
							activeTab === 'Delivered'
								? 'underline underline-offset-8 font-medium decoration-2'
								: 'text-gray-400'
						}`}
					>
						Delivered
					</button>
					<button
						onClick={() => handleTabClick('Finished')}
						className={`tab ease-linear transition-all duration-150 ${
							activeTab === 'Finished'
								? 'underline underline-offset-8 font-medium decoration-2'
								: 'text-gray-400'
						}`}
					>
						Finished
					</button>
				</div>
				{/* Link to see all orders */}
				<div className='hidden md:flex justify-end w-1/2 hover:underline decoration-2 underline-offset-8 '>
					<a href='/' style={{ color: '#F85900' }}>
						See all
					</a>
				</div>
			</div>
			{/* Cards */}
			<div className='my-10'>
				{cards.map((el, index) => (
					<OrderCard key={index} {...el} />
				))}
			</div>
		</div>
	);
};
