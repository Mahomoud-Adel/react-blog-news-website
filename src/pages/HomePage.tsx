import Categories from "@/components/widgets/Categories"
import Hero from "@/components/widgets/Hero"
import NewPosts from "@/components/widgets/NewPosts";
import CarouselPosts from "@/components/widgets/CarouselPosts";

const HomePage = () => {

  return (
    <>
      <div className='px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto mt-4'>
        {/* Main Category */}
        <Categories />

        {/* Hero Section */}
        <Hero />

        {/* popular posts */}
        <CarouselPosts title="Popular Posts " />
  
        {/* New Posts */}
        <NewPosts />
      </div>

      <div className="my-10 h-[70vh] match flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-4 text-center w-96">
          <h2 className="text-xl font-bold mb-2">The Final Round</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div>
              <img src="./manb.png" alt="" />
              <div className="text-lg font-bold">Manchester City</div>
            </div>
            <span className="text-2xl">VS</span>
            <div>
              <img src="./i3.png" alt="" />
              <div className="text-lg font-bold">Liverpool</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Sunday, August 8th</p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">00</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">00</button>
          </div>
        </div>
      </div>

      <div className="px-4 md:p-0 w-full md:w-11/12 lg:w-[87%] m-auto mt-4">
        {/* Trendy posts */}
        <CarouselPosts title="Trendy Posts" />
      </div>
    </>
  )
}

export default HomePage