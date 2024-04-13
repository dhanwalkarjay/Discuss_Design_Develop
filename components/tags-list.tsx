import { Badge } from "./ui/badge";

export function splitTags(language: string) {
    return language.split(",").map((lang) => lang.trim());
}

export function TagsList({ languages }: {languages: string[] }){
    return (
        <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => (
                <Badge className="w-fit" key={lang}>{lang}</Badge>
            ))}
        </div>
    )
}   