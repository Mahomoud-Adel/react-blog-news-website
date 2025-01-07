import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PostItem from "../shared/PostItem"

interface IcarouselPosts {
  title: string
}

const CarouselPosts = ({ title }: IcarouselPosts) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full rounded-md mt-16"
      >
        <div className="">

          <h2 className='text-2xl font-bold my-6'>{title}</h2>
          <div className="absolute right-12 top-5 ">
            <CarouselPrevious className="rounded-md" />
            <CarouselNext className="rounded-md" />
          </div>
        </div>
        <CarouselContent className="p-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <PostItem />
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  )
}

export default CarouselPosts