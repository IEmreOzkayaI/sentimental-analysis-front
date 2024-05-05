import React from "react";
import ButtonFamily from "../buttonFamily";
import {DropdownMenu} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {Button} from "../ui/button";
import {CircleUser} from "lucide-react";
import {DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuLabel} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuSeparator} from "@radix-ui/react-dropdown-menu";
import {DropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import useNavHide from "./useNavHide";
import { Link } from "react-router-dom";

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
