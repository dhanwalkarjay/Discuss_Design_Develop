"use client";

import { ModeToggle } from "@/src/components/modeToggel";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/src/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/src/components/ui/alert-dialog"
import { useState } from "react";
import { deleteAccountAction } from "./actions";

function AccountDropdown() {
    const session = useSession();
    const [open, setOpen] = useState(false);
    return (

        <>
        <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently remove your account and any data your have.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={async() => {
                        await deleteAccountAction();
                        signOut({callbackUrl: "/"});
                    }}
                        >Yes, Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

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
            <DropdownMenuContent className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded mt-4">
                <DropdownMenuItem className="flex justify-between items-center my-3 hover:cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>
                <LogOutIcon className="mr-2" />
                    Sign Out
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={() => {setOpen(true);}} className="flex justify-between items-center mt-3 hover:cursor-pointer" >
                <DeleteIcon className="mr-2" />
                    Delete Account
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}

export function Header() {
    const session = useSession();
    const isLoggedIn = !!session.data;
    return (
        <header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
            <div className=" container mx-auto flex justify-between items-center">
                <Link href="/" className="flex gap-2 items-center text-xl hover:underline">
                <Image src="/icon.png" width={200} height={200} alt="logo" />
                </Link>
                <nav className="flex gap-8">
                    {isLoggedIn && (
                        <>
                            <Link className="hover:underline" href="/browse">
                                Browse
                            </Link>
                            <Link className="hover:underline" href="/your-rooms">
                                Your Room's
                            </Link>
                        </>
                    )}
                </nav>
                <div className="flex items-center gap-4">
                    {isLoggedIn && <AccountDropdown />}
                    {!isLoggedIn && (
                        <Button onClick={() => signIn()} variant="link">
                            <LogInIcon className="mr-2"/>
                            Sign In
                        </Button>
                    )}
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}