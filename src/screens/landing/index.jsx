import Arrow from "../../assets/arrow.png";

const Landing = () => {
	return (
		<div className='w-screen h-screen text-black flex flex-col items-center justify-center text-2xl font-bold bg-white relative'>
			<div>Welcome To Pure</div>
			<div>Future Of The Form App For Start Discussion</div>
			<div>Under The Sentiment Control</div>
			<img src={Arrow} alt='' className='rotate-180 absolute top-[200px] right-[400px]' width={200} />
		</div>
	);
};

export default Landing;
