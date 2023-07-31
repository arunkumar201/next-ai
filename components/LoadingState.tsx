import { Loader2 } from "lucide-react";

interface Props {
	message: string;
}
const LoadingState =({ message }:Props) => {
	return (
		<div
			className={`flex flex-col items-center justify-center h-full mt-8 ${message==='no matching NFTs were found' && 'mb-5'}`}
		>
			<Loader2 className="w-16 h-16 mb-4 text-[#5C2A9D] animate-spin s" />
			<h1 className="text-3xl font-bold text-[#29C7AC]">{message}...</h1>
		</div>
	);
}
export default LoadingState;