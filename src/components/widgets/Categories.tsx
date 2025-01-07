import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categoryData } from '@/utils/demoData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ICategory {
  id: number;
  name: string;
  image: string;
}

const Categories = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full bg-gray-100 shadow-inner rounded-md p-1 "
    >
      <CarouselContent className=''>
        {categoryData.map((category: ICategory) => (
          <CarouselItem key={category.id} className="basis-30">
            <Link to={`/category/${category.id}`}>
              <Button >
                #{category.name}
              </Button>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0 h-full rounded-md' />
      <CarouselNext className='right-0 h-full rounded-md' />
    </Carousel>
  )
}

export default Categories