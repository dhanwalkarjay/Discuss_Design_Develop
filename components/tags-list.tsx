'use client';

import { useRouter } from "next/navigation";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";

export function TagsList({ languages }: {languages: string[] }){
    const router = useRouter();
    return (
        <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => (
                <button 
                    className={cn(badgeVariants())}
                    key={lang}
                    onClick={() => {
                        router.push(`/?search=${lang}`);
                    }}>
                    {lang}
                </button>
            ))}
        </div>
    )
}   