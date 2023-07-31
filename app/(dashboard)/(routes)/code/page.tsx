"use client";
import Heading from "@/components/Heading";
import { HeadingComponentProps } from "@/lib/types";
import { Code2Icon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "@/constants";
import { z } from "zod";
import { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import axios from "axios";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingState from "@/components/LoadingState";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Code = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((prevMsgs) => [...prevMsgs, response?.data]);
      form.reset();
    } catch (error) {}
  };

  const isLoading = form.formState.isSubmitting;
  const ConversationHeadingData: HeadingComponentProps = {
    description: "Take your coding skills to the next level with our AI",
    title: "Code Generation",
    icon: Code2Icon,
    iconColor: "text-[#43AEB9]",
    bgColor: "bg-[#BC6FF1]/30",
  };
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 mb-8 fl text-start lg:px-8 gap-x-3 justify-normal">
        <Heading data={ConversationHeadingData} />
        <div className="w-full px-5 mt-12 md:px-9">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm bg-[#892CDC]/50"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className="px-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Create a Login Page using React and Tailwindcss"
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
        {messages.length === 0 && !isLoading && (
          <>
            <EmptyState message={"No Conversion Found"} />
          </>
        )}
        <div className="flex flex-col px-3 gap-y-4">
          {messages.length > 0 &&
            messages?.map((message) => {
              return (
                <div
                  key={message.content}
                  className={cn(
                    "p-8  w-[25rem] md:w-[31rem] lg:w-[39.2rem] xl:w-[51rem] 2xl:w-full flex items-start mt-4 gap-x-8 rounded-lg overflow-hidden ",
                    message.role === "user"
                      ? "bg-white border-black/10"
                      : "bg-muted"
                  )}
                >
                  {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <div className="w-full">
                    <ReactMarkdown
                      components={{
                        pre: ({ node, ...props }) => (
                          <div className="w-full p-2 my-3  overflow-auto rounded-lg bg-[#070A52]/40 text-[#2C3639]">
                            <pre {...props} />
                          </div>
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            className="p-1 rounded-base bg-[#0E2954]/20"
                            {...props}
                          />
                        ),
                      }}
                      className="overflow-hidden text-base leading-6"
                    >
                      {message.content || " "}
                    </ReactMarkdown>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Code;
