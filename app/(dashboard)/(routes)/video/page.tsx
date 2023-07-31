"use client";
import Heading from "@/components/Heading";
import { HeadingComponentProps } from "@/lib/types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "@/constants";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingState from "@/components/LoadingState";
import { VideoIcon } from "lucide-react";

const VideoPage = () => {
  const [video, setVideo] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const response = await axios.post("/api/video", values);
      setVideo(response.data[0]);
      form.reset();
    } catch (error) {}
  };

  const isLoading = form.formState.isSubmitting;
  const ConversationHeadingData: HeadingComponentProps = {
    description: "Unleash your creativity with AI-powered video generation",
    title: "Video Generation",
    icon: VideoIcon,
    iconColor: "text-[#FF78F0]",
    bgColor: "bg-[#263159]",
  };
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 mb-8 fl text-start lg:px-8 gap-x-3 justify-normal">
        <Heading data={ConversationHeadingData} />
        <div className="w-full px-5 mt-12 md:px-9">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm bg-[#540375]/50"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className="px-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Piano solo"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="w-full col-span-12 lg:col-span-2"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {isLoading && (
          <>
            <LoadingState message="AI Thinking..." />
          </>
        )}
        {!video && !isLoading && (
          <>
            <EmptyState message={"No video  Generated"} />
          </>
        )}
        <div className="w-full mt-4 mb-6">
          {video && (
            <>
              <video
                controls
                className="w-full mb-8 bg-black border shadow-sm aspect-video rounded-xl"
              >
                <source src={video} />
              </video>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoPage;
