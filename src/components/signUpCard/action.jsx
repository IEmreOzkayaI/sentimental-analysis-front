import { toast } from "@/components/ui/use-toast";

export const onSubmit = (data, e) => {
    if (e) {
        e.preventDefault();
    }
    toast({
        title: "You submitted the following values:",
        description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
    });
};

export const onError = (errors) => {
    toast({
        title: "Error",
        description: (
            <pre className='mt-2 w-[350px] rounded-md bg-slate-950 p-4'>
                <code className='text-white'>{Object.values(errors)[0].message}</code>
            </pre>
        ),
    });
};
