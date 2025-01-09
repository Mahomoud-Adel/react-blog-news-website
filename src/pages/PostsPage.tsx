import PostItem from "@/components/shared/PostItem"
import SideMenu from "@/components/shared/SideMenu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



const PostsPage = () => {

  return (
    <div className='px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto mt-4'>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6">
        <div className="md:w-1/4  px-2 flex flex-col space-y-8">
          <SideMenu />
        </div>
        <div className="md:w-10/12">

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

      </div>
    </div>
  )
}

export default PostsPage