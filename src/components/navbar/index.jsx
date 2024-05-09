import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonFamily from "../buttonFamily";
import PostDrawer from "../postDrawer";
import { Button } from "../ui/button";
import useLogOut from "./useLogout";
import useNavHide from "./useNavHide";

const Navbar = ({isOpen}) => {
	const hideNavbar = useNavHide(["/login", "/signup"]);
	const user = JSON.parse(localStorage.getItem("user"));
	const {logOut} = useLogOut();

	if (hideNavbar) return null;

	return (
		<div>
			<header className='flex h-14 items-center justify-between  border-b bg-muted/40 px-4 lg:h-[80px] lg:px-6'>
				<Link to='/home'>
					<div className='text-2xl font-wallpoet'>PURE</div>
				</Link>
				{isOpen && <PostDrawer />}
				{!isOpen && <ButtonFamily ghost={"Sign Up"} ghostLink={"/signup"} primary={"Log In"} primaryLink={"/login"} />}
				{isOpen && (
					<DropdownMenu className='relative'>
						<DropdownMenuTrigger asChild>
							<Button variant='secondary' size='icon' className='rounded-full'>
								<CircleUser className='h-5 w-5' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end' className='p-3 w-[250px] flex absolute top-[-50px] right-10 justify-between items-center'>
							<DropdownMenuLabel className='order-2'>
								{user.name.toLocaleUpperCase()} {user.surname.toLocaleUpperCase()}
							</DropdownMenuLabel>
							<DropdownMenuItem className='order-1'>
								<Button size='sm' onClick={logOut}>
									Log Out
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</header>
		</div>
	);
};

export default Navbar;
