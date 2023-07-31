import Image from "next/image";
import EmptyStateImg from "./../public/empty-state.webp";
interface Props {
  message: string;
}
const EmptyState = ({ message }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full mt-8 ${
        message === "no matching NFTs were found" && "mb-5"
      }`}
    >
      <Image src={EmptyStateImg} alt={"Not Found"} 
	  className="w-full h-full shadow-sm rounded-xl "
	  />
      <h1 className="text-xl font-bold text-gray-500 text-muted-foreground">{message}</h1>
    </div>
  );
};
export default EmptyState;
