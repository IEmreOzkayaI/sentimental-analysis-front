import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonFamily from "../buttonFamily";
import { Button } from "../ui/button";
import useNavHide from "./useNavHide";

const Navbar = ({isOpen}) => {
	const hideNavbar = useNavHide(["/login", "/signup"]);
	if (hideNavbar) return null;
	return (
		<div>
			<header className='flex h-14 items-center justify-between  border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
				<Link to='/'>
					<div className='text-2xl font-wallpoet'>PURE</div>
				</Link>
				{!isOpen && <ButtonFamily ghost={"Sign Up"} ghostLink={"/signup"} primary={"Log In"} primaryLink={"/login"} />}
				{isOpen && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='secondary' size='icon' className='rounded-full'>
								<CircleUser className='h-5 w-5' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</header>
		</div>
	);
};

export default Navbar;
