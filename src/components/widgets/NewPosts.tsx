import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const newPosts = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];


const NewPosts = () => {
  return (
    <div className="my-12">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold ">New posts</h3>
        <Button className="bg-gray-50" variant={"ghost"}>
          Show all
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newPosts?.map((item) => (
          <section
            key={item.id}
            className="rounded-md shadow-lg p-2 w-full flex gap-4"
          >
            <div className="rounded-md overflow-hidden border w-1/2">
              <img
                src="./post2.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="flex w-1/2 flex-col justify-between">
              <Link to={""} className="px-1 py-3">
                <h2 className="line-clamp-1 text-sm md:text-lg font-semibold">
                  How to choose the right laptop for programming
                </h2>
                <p className="line-clamp-2 text-sm mt-3 text-gray-600">
                  Choosing the right laptop for programming can be a tough
                  process. It’s easy to get confused while researching the
                  various options. There are many different laptop models out
                  there, each with a different set of trade-offs
                </p>
              </Link>
              <div className="bg-gray-100 rounded-md p-2 flex items-center justify-between">
                <Link to={""} className="flex items-center gap-3">
                  <div>
                    <Avatar className="cursor-pointer ">
                      <AvatarImage
                        className="rounded-2xl" width={40} height={40}
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col text-sm">
                    <span className="font-semibold">James</span>
                    <span className="text-gray-500 ">August 18 , 2022</span>
                  </div>
                </Link>
                <Button size={"icon"} variant={"ghost"}>
                  <i className="fa-regular fa-bookmark "></i>

                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default NewPosts