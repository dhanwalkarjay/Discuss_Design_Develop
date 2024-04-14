import { TagsList } from "@/src/components/tags-list";
import { Badge } from "@/src/components/ui/badge"
import { getRoom } from "@/src/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { VideoPlayer } from "./video-player";
import { splitTags } from "@/src/lib/utils";
import { unstable_noStore } from "next/cache";

export default async function RoomPage(props: {
    params: {roomId: string};
}) {
    unstable_noStore();
    const roomid = props.params.roomId; 

    const room  = await getRoom(roomid);
    
    if(!room) {
        return <div>No room of this ID found</div>
    }

    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3 p-4 pr-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                    <VideoPlayer room={room} />
                </div>
            </div>
            <div className="col-span-1 p-4 pl-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                    <h1 className="text-base">{room?.name}</h1>
                    {room.githubRepo && (
                        <Link href={room.githubRepo} className="flex items-center gap-2 text-center text-sm" target="_blank" rel="noopener noreferrer"><GithubIcon />Github Project</Link>
                    )}
                    <p className="text-base text-gray-600">{room?.description}</p>
                    <TagsList languages={splitTags(room.language)} />
                </div>
            </div>
        </div>
    );
}