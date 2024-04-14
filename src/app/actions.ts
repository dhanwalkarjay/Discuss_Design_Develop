'use server';

import { deleteUser } from "@/src/data-access/users";
import { getSession } from "@/src/lib/auth";

export async function deleteAccountAction() {
    const session = await getSession();
    
    if(!session) {
        throw new Error("You must be logged in to delete your account");
    }

    await deleteUser(session.user.id);
}