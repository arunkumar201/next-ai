"use client";
import Heading from "@/components/Heading";
import { HeadingComponentProps } from "@/lib/types";
import { MessageSquare } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "@/constants";
import { z } from "zod";
import { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingState from "@/components/LoadingState";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

const Conversation = () => {
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
      const newMessages = [...messages,userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      setMessages((prevMsgs) => [...prevMsgs,userMessage, response?.data]);
      form.reset();
    } catch (error) {}
  };

  const isLoading = form.formState.isSubmitting;
  const ConversationHeadingData: HeadingComponentProps = {
    description: "Experience the power of conversation with AI",
    title: "Conversation",
    icon: MessageSquare,
    iconColor: "text-[#865DFF]",
    bgColor: "bg-[#060047]",
  };
  return (
    <>
      <div className="flex flex-col items-center w-full px-4 mb-8 fl text-start lg:px-8 gap-x-3 justify-normal">
        <Heading data={ConversationHeadingData} />
        <div className="w-full px-5 mt-12 md:px-9">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm bg-[#5C2A9D]/50"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className="px-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How to find Right angle?"
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
            <EmptyState message={"No Conversation Found"} />
          </>
        )}
        <div className="flex flex-col w-full px-4 mt-3 gap-y-4 md:px-9">
          {messages.length > 0 &&
            messages?.map((message) => {
              return (
                <div
                  key={message.content}
                  className={cn(
                    "p-6 w-full flex items-start justify-start gap-x-8 rounded-lg ",
                    message.role === "user"
                      ? "bg-white border-black/10"
                      : "bg-muted"
                  )}
                >
                  <p className="flex items-center justify-start w-full h-full text-lg gap-x-7">
                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <p className="leading-8 text-bold">{message.content}</p>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Conversation;
