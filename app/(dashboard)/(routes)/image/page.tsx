"use client";
import Heading from "@/components/Heading";
import { HeadingComponentProps } from "@/lib/types";
import { Download, ImageIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import EmptyState from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingState from "@/components/LoadingState";
import { amountOptions, formSchema, imageResolutionOptions } from "./constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Conversation = () => {
  const [images, setImages] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image",values);
      const urls = response.data.map((image: { url: string }) => image.url);
      setImages(urls);
      form.reset();
    } catch (error) {}
  };

  const isLoading = form.formState.isSubmitting;
  const ConversationHeadingData: HeadingComponentProps = {
    description: "Unlock the potential of images Creation with AI",
    title: "Image Generation",
    icon: ImageIcon,
    iconColor: "text-[#6D67E4]",
    bgColor: "bg-[#86A3B8]",
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-4 mb-8 text-start lg:px-8 gap-x-3">
        <Heading data={ConversationHeadingData} />
        <div className="w-full px-5 mt-12 md:px-9">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm bg-[#E9A6A6]/70"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6 md:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className="px-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A picture of a cat on moon?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value.toString()}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={"field.value"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {imageResolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <LoadingState message="AI Creating best Images..." />
          </>
        )}
        {images.length === 0 && !isLoading && (
          <>
            <EmptyState message={"No Images conversation Found"} />
          </>
        )}
        <div className="flex flex-row flex-wrap justify-center h-full gap-2 mt-3 md:justify-start">
          {images &&
            images.length > 0 &&
            images.map((src) => (
              <Card key={src} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-[18rem] aspect-square p-2">
                  <Image src={src} alt="image"  fill
                  />
                </div>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full mt-2 text-ellipsis"
                    onClick={() => window.open(src)}
                  >
                    <Download className="w-5 h-4 mr-3" />
                    Download
                  </Button>
                </CardFooter>
               
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default Conversation;
