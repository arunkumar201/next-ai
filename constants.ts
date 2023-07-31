import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { HeadingComponentProps } from "./lib/types";
export const ConversationHeadingData: HeadingComponentProps = {
  description: "lorem ipsum dolor sit consectetur ds",
  title: "Conversation",
  icon: MessageSquare,
  iconColor: "text-[#865DFF]",
  bgColor: "bg-[#060047]",
};
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});