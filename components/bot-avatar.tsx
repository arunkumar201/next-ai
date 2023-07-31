import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export const BotAvatar = () => {
  return (
    <>
      <Avatar className="flex items-start float-left mt-3 -mr-5 md:-mr-4">
        <AvatarImage src={"https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-4-filled-outline-45/512/Basic_UI_Elements_2.4_-_Filled_Outline_-_45-36-512.png"}
      className="h-10 w-15"
    />
        <AvatarFallback>
          {"bot"}
        </AvatarFallback>
      </Avatar>
    </>
  );
};
