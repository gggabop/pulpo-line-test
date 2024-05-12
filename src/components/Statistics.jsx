// this component render the 2 col 2 row grid of statics
// este componente rendering el grid de 2 columnas y 2 filas de estadísticas
const Statistics = () => {
	return (
		<div className='w-full grid grid-cols-2 gap-1' style={{ height: '21%' }}>
			<div className='bg-white rounded-xl flex flex-col items-center justify-center p-6 md:p-0'>
				<span className=' text-gray-400'>Total visitors</span>
				<h3 className='text-2xl font-semibold'>300k</h3>
			</div>
			<div className='bg-white rounded-xl flex flex-col items-center justify-center p-6 md:p-0'>
				<span className=' text-gray-400'>Viewed</span>
				<h3 className='text-2xl font-semibold'>1k</h3>
			</div>
			<div className='bg-white rounded-xl flex flex-col items-center justify-center p-6 md:p-0'>
				<span className=' text-gray-400'>Order</span>
				<h3 className='text-2xl font-semibold'>25k</h3>
			</div>
			<div className='bg-white rounded-xl flex flex-col items-center justify-center p-6 md:p-0'>
				<span className=' text-gray-400'>Cancelled</span>
				<h3 className='text-2xl font-semibold'>20k</h3>
			</div>
		</div>
	);
};

export default Statistics;
