"use client";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { editRoomAction } from "./actions";
import { useParams } from "next/navigation";
import { Room } from "@/db/schema";
import { toast, useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(1).max(250),
    githubRepo: z.string().min(1).max(50),
    language: z.string().min(1).max(50),
  });
  
export function EditRoomForm({room}: {room: Room}) {
  const params = useParams();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: room.name,
          description: room.description ?? "",
          githubRepo: room.githubRepo ?? "",
          language: room.language,
        },
    })

  async function onSubmit(values: z.infer<typeof formSchema>) {
        await editRoomAction({
          id: params.roomId as string,
          ...values,
        });
        toast({
          title: "Room Updated",
          description: "Your room was successfully updated",
        });
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your project name." />
                  </FormControl>
                  <FormDescription>
                    This is your public room name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="I'm working on side project, come join me." />
                  </FormControl>
                  <FormDescription>
                    Describe your room. 
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubRepo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Repo</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://github.com/"/>
                  </FormControl>
                  <FormDescription>
                    Please put a link to the project you are working on. 
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="javascript, typescript, react." />
                  </FormControl>
                  <FormDescription>
                    List your programming language, frameworks, libraries, etc. your are working with.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
    )
}