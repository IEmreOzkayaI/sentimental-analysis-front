
const Loading = () => {
	return (
		<div className='fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-20'>
			<div className='spinner animate-spin rounded-full border-4 border-gray-200 border-t-black h-12 w-12'></div>
		</div>
	);
};

export default Loading;
