import salad from '../assets/images/salad.png';

// This component represents a promotional section highlighting a new menu item with a discount offer. It includes a title, description, and an image of a salad.
// Este componente representa una sección promocional que destaca un nuevo plato del menú con una oferta de descuento. Incluye un título, una descripción y una imagen de una ensalada.
const MainDiscount = () => {
	return (
		<div
			className='flex text-white mt-10 md:rounded-xl justify-between h-1/5'
			style={{ background: '#FFB74B' }}
		>
			{/* Title and Desc Section */}
			<div className='flex flex-col py-20 pl-10 md:p-10'>
				<h4 className='text-4xl hidden md:block'>Discount</h4>
				<h4 className='text-4xl'>New Menu!</h4>
				<p className='text-sm mt-2 sm:break-normal'>
					Get Free Shipping Every $30 <br className='sm:hidden' /> With No
					<br className='hidden md:flex' />
					Minimum Purchase
				</p>
			</div>
			{/* Image Section */}
			<div className='w-1/3 flex justify-end'>
				<img
					className='md:rounded-xl h-full object-cover object-left-bottom	md:object-center'
					src={salad}
					alt='Salad'
				/>
			</div>
		</div>
	);
};

export default MainDiscount;
