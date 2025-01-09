import CommentForm from "../shared/CommentForm"
import { AvatarFallback, AvatarImage, Avatar } from "../ui/avatar"
import { Button } from "../ui/button"


const Comments = () => {

  return (
    <div>
      <CommentForm />

      <div>
        <section className="">
          <div className="flex gap-4 my-4">
            <Avatar>
              <AvatarImage src="./user.png" alt="user" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Shadman</h4>
                  <span className="text-gray-600">2 days ago</span>
                </div>
                <p className="text-gray-800 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
              </div>
              <div className="space-x-4 mt-2 text-gray-600">
                <Button variant="ghost"><i className="fa-regular fa-heart"></i> 0</Button>
                <Button variant="ghost"><i className="fa-regular fa-comment"></i> Reply</Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 my-4 border-l-2 pl-6 ml-12">
            <Avatar>
              <AvatarImage src="./user.png" alt="user" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Shadman</h4>
                  <span className="text-gray-600">2 days ago</span>
                </div>
                <p className="text-gray-800 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                </p>
              </div>
              <div className="space-x-4 mt-2 text-gray-600">
                <Button variant="ghost"><i className="fa-regular fa-heart"></i> 0</Button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Comments