import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, name: "Posts", to: "/profile" },
  { id: 2, name: "Marked", to: "/saved" },
  { id: 3, name: "SendPost", to: "/write" },
]

const ProfilePage = () => {
  const isUser = true;
  const { pathname } = useLocation()

  return (
    <div className="px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto mt-4">
      <div className="bg-gray-100 rounded-md">
        <div className="h-28 overflow-hidden rounded-md ">
          <img src="./buner.png" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="p-2 flex justify-between md:items-center">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20 rounded-md">
              <AvatarImage src="./user.png" alt="user" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-between">
              <h4 className="font-semibold">Shadman</h4>
              <div className="flex items-center gap-4 md:hidden">
                {!isUser ? (
                  <>
                    <div className="text-gray-600 flex items-center gap-2">
                      <i className="fa-regular fa-star"></i>
                      <span><p className="hidden md:block">Rate:</p> 3.5</span>
                    </div>
                    <div className="text-gray-600 flex items-center gap-2">
                      <i className="fa-regular fa-user"></i>
                      <span><p className="hidden md:block">Follower:</p> 1.2 k</span>
                    </div>
                    <div className="text-gray-600 flex items-center gap-2">
                      <i className="fa-regular fa-copy"></i>
                      <span><p className="hidden md:block">Posts:</p> 25</span>
                    </div>
                  </>
                ) : (
                  navLinks.map((link) => {
                    const isActive = pathname === link.to;
                    return (
                      <>
                        <Link className={`font-semibold ${isActive && 'border-b-2 border-red-500'}`} key={link.id} to={link.to}>{link.name}</Link>
                      </>
                    )
                  })

                )}
              </div>
            </div>
          </div>
          <div>

            <div className="md:flex items-center gap-8 hidden">
              {!isUser ? (
                <>
                  <div className="text-gray-600 flex items-center gap-2">
                    <i className="fa-regular fa-star"></i>
                    <span>Rate: 3.5</span>
                  </div>
                  <div className="text-gray-600 flex items-center gap-2">
                    <i className="fa-regular fa-user"></i>
                    <span>Follower: 1.2 k</span>
                  </div>
                  <div className="text-gray-600 flex items-center gap-2">
                    <i className="fa-regular fa-copy"></i>
                    <span>Posts: 25</span>
                  </div>
                </>
              ) : (
                navLinks.map((link) => {
                  const isActive = pathname === link.to;

                  return (
                    <>

                      <Link className={`font-semibold ${isActive && 'border-b-2 border-red-500'}`} key={link.id} to={link.to}>{link.name}</Link>

                    </>
                  )
                })

              )}
            </div>

          </div>
          <div>
            {isUser ? <Button><i className="fa-solid fa-user-pen"></i>Edit Profile</Button> :
              <Button> <i className="fa-solid fa-plus"></i>Follow</Button>
            }
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
