import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {


  return (
    <div className={`fixed top-0 ${open ? "left-0" : 'left-[-250px]'} w-[250px] shadow 
    bg-white h-screen p-2 delay-300 transition-all ease-in-out z-50`}>
      <div className='flex items-center justify-between gap-4 '>
        <div className='w-20 md:w-24 '>
          <img src="./logo.png" className='w-full' alt="" />
        </div>
        <Button size="icon" variant="ghost" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>

      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className='border-none'>
            <AccordionTrigger className='hover:bg-gray-100 rounded-md px-2'>Categories</AccordionTrigger>
            <AccordionContent className='ml-3 px-1 border-l'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className='border-none'>
            <AccordionTrigger className='hover:bg-gray-100 rounded-md px-2'>Pages</AccordionTrigger>
            <AccordionContent className='ml-3 px-1 border-l'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>


          <AccordionItem value="item-3" className='border-none'>
            <AccordionTrigger className='hover:bg-gray-100 rounded-md px-2'>Contact Us</AccordionTrigger>

          </AccordionItem>

          <AccordionItem value="item-4" className='border-none'>
            <AccordionTrigger className='hover:bg-gray-100 rounded-md px-2'>About Us</AccordionTrigger>

          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Sidebar