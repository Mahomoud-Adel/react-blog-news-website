import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const PostItem = () => {
  return (
    <div className="rounded-md shadow-lg p-2 w-full">
      <div className="rounded-md overflow-hidden">
        <img src="./post2.png" className="w-full" alt="" />
      </div>
      <Link to={""} className="px-1 py-3">
        <h2 className="line-clamp-1 text-lg font-semibold">
          How to choose the right laptop for programming
        </h2>
        <p className="line-clamp-2 text-sm text-gray-600">
          Choosing the right laptop for programming can be a tough process. It’s
          easy to get confused while researching the various options. There are
          many different laptop models out there, each with a different set of
          trade-offs
        </p>
      </Link>
      <div className="bg-gray-100 rounded-md p-2 flex items-center justify-between">
        <Link to={''} className="flex items-center gap-3">
          <div>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" className="rounded-2xl" width={50} height={50} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col text-sm">
            <span className="font-semibold">James</span>
            <span className="text-gray-500">August 18 , 2022</span>
          </div>
        </Link>
        <Button size={"icon"} variant={"ghost"}>
          <i className="fa-regular fa-bookmark"></i>
        </Button>
      </div>
    </div>
  )
}

export default PostItem