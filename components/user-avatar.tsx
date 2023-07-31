import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <>
      <Avatar className="flex items-start w-10 h-12 mt-3 -mr-5 md:-mr-4">
        <AvatarImage src={user?.profileImageUrl}  className="rounded-lg"/>
        <AvatarFallback>
          {user?.firstName?.charAt(0)} {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </>
  );
};
