"use client";

import { ModeToggle } from "@/components/modeToggel";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";

function AccountDropdown() {
    const session = useSession();
    const isLoggedIn = !!session.data;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"link"}>
                    <Avatar className="mr-2">
                        <AvatarImage src={session.data?.user?.image ?? ""} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {session.data?.user?.name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isLoggedIn ? (<DropdownMenuItem className="flex justify-between items-center" onClick={() => signOut()}><LogOutIcon className="mr-2" /> Sign Out</DropdownMenuItem>) : (<DropdownMenuItem className="flex justify-between items-center" onClick={() => signIn("google")}><LogInIcon className="mr-2"/>Sign In</DropdownMenuItem>)}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function Header() {
    return (
        <header className="bg-gray-100 py-2 dark:bg-gray-900 container mx-auto">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex gap-2 items-center text-xl hover:underline">
                <Image src="/icon.png" width={200} height={200} alt="logo" />
                </Link>
                <div className="flex items-center gap-4">
                    <AccountDropdown />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}