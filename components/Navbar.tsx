import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react"
import MobileSidebar from "./MobileSidebar"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between w-full p-4 item-center ">
        <div className='flex md:hidden'>
        <MobileSidebar/>
        </div>
       <div className="flex justify-end w-full">
         <UserButton afterSignOutUrl="/"/>
       </div>

    </div>
    </>
  )
}

export default Navbar