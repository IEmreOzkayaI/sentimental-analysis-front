import {toast} from "../ui/use-toast";

const showToast = (title,message) => {
	toast({
		title: title || "Error",
		description: (
			<pre className='mt-2 w-[320px] rounded-md bg-slate-950 p-4 overflow-auto'>
				<code className='text-white'>{message}</code>
			</pre>
		),
		
	});
};

export default showToast;
