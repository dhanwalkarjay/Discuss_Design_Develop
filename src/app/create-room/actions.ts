'use server';

import { createRoom } from "@/src/data-access/rooms";
import { Room } from "@/src/db/schema";
import { getSession } from "@/src/lib/auth";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
    const session = await getSession();
    console.log(session)
    if(!session) {
        throw new Error("You must be logged in to create this room");
    }

    const room = await createRoom(roomData, session.user.id);
    
    revalidatePath("/browse");

    return room;
}