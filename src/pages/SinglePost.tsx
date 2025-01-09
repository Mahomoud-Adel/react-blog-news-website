import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import CarouselPosts from '@/components/widgets/CarouselPosts'
import Comments from '@/components/widgets/Comments'


const SinglePost = () => {
  return (
    <div className='px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto mt-4 '>
      <div className='flex flex-col lg:flex-row'>

        {/* left */}
        <div className='w-full lg:w-4/5 lg:px-2 mb-12'>
          <div className='h-screen'>
            <div className='lg:bg-gray-100 px-4 rounded-md lg:h-[70vh]'>
              <h3 className='text-2xl py-4'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
              <div className='w-full rounded-md overflow-hidden'><img src="./posts.png" alt="" /></div>

              <div className='flex justify-evenly items-center space-x-10 mt-4 text-gray-600 '>
                <div className='flex items-center gap-2'>
                  <span className='fa-regular fa-calendar'></span>
                  <span>July 8 , 2025</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="fa-regular fa-comment-dots"></span>
                  <span>Comments : 35</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="fa-regular fa-folder"></span>
                  <span>Category : sport</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='font-semibold text-lg my-3'>Don’t wait. The purpose of our lives is to be happy!</h3>
            <p className='text-gray-600'>
              Upon arrival, your senses will be rewarded with the pleasant scent of
              lemongrass oil used to clean the natural wood found throughout the room,
              creating a relaxing atmosphere within the space.
              A wonderful serenity has taken possession of my entire soul, like these
              sweet mornings of spring which I enjoy with my whole heart. I am alone,
              and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              I am so happy, my dear friend, so absorbed in the exquisite.
            </p>
            <div className='my-8 flex justify-end w-full '>

              <img src="./posts1.png" className='w-[80%] rounded-md' alt="" />
            </div>

            <h3 className='font-semibold text-lg my-3'>Not how long, but how well you have lived is the main thing.</h3>
            <p className='text-gray-600'>
              When you are ready to indulge your sense of excitement, check out the range of water- sports
              opportunities at the resort’s on-site water-sports center. Want to leave your stress on the
              water? The resort has kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment
              is available as well, so you can experience the ever-changing undersea environment.
              Not only do visitors to a bed and breakfast get a unique perspective on the place they are
              visiting, they have options for special packages not available in other hotel settings. Bed
              and breakfasts can partner easily with local businesses for a smoothly organized and highly
              personalized vacation experience. The Fife and Drum Inn offers options such as the Historic
              Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic
              Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance.
              Part of the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated
              to create a complete experience. For example, the Fife and Drum retains the colonial feel of
              the area in all its guest rooms. Special features include antique furnishings, elegant four
              poster beds in some guest rooms, as well folk art and artifacts from the restoration period
              of the historic area available for guests to enjoy.
            </p>
          </div>
        </div>

        {/**************************************/}
        {/*****************Right****************/}
        {/**************************************/}
        <div className='w-full lg:w-1/3 lg:px-2 flex flex-col-reverse md:flex-row lg:flex-col  gap-4'>
          {/* actions */}
          <div>

            <div className='flex items-center justify-between gap-1'>
              <Button className='text-gray-500 rounded-md ' variant={'secondary'}><i className="fa-regular fa-share-from-square"></i> Share</Button>
              <Button className='text-gray-500 rounded-md ' variant={'secondary'}><i className="fa-regular fa-bookmark"></i> Marking</Button>
              <Button className='text-gray-500 rounded-md ' variant={'secondary'}><i className="fa-regular fa-thumbs-up"></i> Like</Button>
            </div>
            {/* user */}
            <div className='p-4 bg-gray-100 rounded-md flex gap-2 w-full mt-4'>
              <div>
                <Avatar className='w-20 h-20 rounded-md'>
                  <AvatarImage
                    src="./user.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='flex flex-col justify-between flex-1 py-1'>
                <div className='flex items-center justify-between'>
                  <h4 className='font-semibold'>Louis Hoebregts</h4>
                  <span>27 posts</span>
                </div>
                <Button><i className="fa-solid fa-plus"></i> Follow</Button>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className='p-4 bg-gray-100 rounded-md flex gap-2 flex-col'>
            <h3 className='text-2xl font-semibold'>Tags</h3>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-2'>
              <span className='text-gray-500'>Montenegro</span>
              <span className='text-gray-500'>Montenegro</span>
              <span className='text-gray-500'>Montenegro</span>
              <span className='text-gray-500'>Montenegro</span>
              <span className='text-gray-500'>Montenegro</span>

            </div>
          </div>

          {/* Top posts */}

          <div className='p-4 bg-gray-100 rounded-md lg:flex gap-2 flex-col hidden'>
            <h3 className='text-2xl font-semibold my-3'>Top Post</h3>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <img src="./post2.png" className='w-20 h-20 object-cover rounded-md' alt="" />
                <div>
                  <h3 className='text-gray-800 line-clamp-2 font-semibold'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
                  <p className='text-sm text-gray-500'>Subhead</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <img src="./post3.png" className='w-20 h-20 object-cover rounded-md' alt="" />
                <div>
                  <h3 className='text-gray-800 line-clamp-2 font-semibold'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
                  <p className='text-sm text-gray-500'>Subhead</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <img src="./post2.png" className='w-20 h-20 object-cover rounded-md' alt="" />
                <div>
                  <h3 className='text-gray-800 line-clamp-2 font-semibold'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
                  <p className='text-sm text-gray-500'>Subhead</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <img src="./post2.png" className='w-20 h-20 object-cover rounded-md' alt="" />
                <div>
                  <h3 className='text-gray-800 line-clamp-2 font-semibold'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h3>
                  <p className='text-sm text-gray-500'>Subhead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comments />
      <div className='my-8'>
        <CarouselPosts title='Related Posts' />
      </div>
    </div>
  )
}

export default SinglePost