import NavBar from './components/NavBar';
import MainDiscount from './components/MainDiscount';
import Header from './components/Header';
import Statistics from './components/Statistics';
import { OrdersList } from './components/OrdersList';
import Categories from './components/Categories';
import { Cart } from './components/Cart';
function App() {
	return (
		<div className='flex' style={{ background: '#F4F5F8' }}>
			<NavBar />
			{/* Main Page Init */}
			<div className='flex items-center justify-center w-full'>
				<div className='flex-grow md:p-4 md:max-w-screen-2xl'>
					{/* Header */}
					<Header />
					{/* End Of Header */}
					<div className='flex flex-col md:flex-row'>
						{/* first column of content */}
						<div className='md:w-3/5'>
							<MainDiscount />
							<Categories />
							<OrdersList />
						</div>
						{/* second column of content */}
						<div className='md:w-1/3 md:mt-10 px-8 md:px-0 md:ml-10'>
							<Statistics />
							<Cart />
						</div>
					</div>
				</div>
			</div>
			{/* Main Page End */}
		</div>
	);
}

export default App;
