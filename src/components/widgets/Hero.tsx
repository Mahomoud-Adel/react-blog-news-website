

const Hero = () => {
  return (
    <div className="flex gap-4 mt-12 items-center flex-col md:flex-row">
      {/*  */}
      <div className="flex gap-4">
        <div className="overflow-hidden rounded-md relative flex-1 ">
          <img src="./hero1.png" className="w-full" alt="" />
          <div
            className="absolute bottom-2 right-2 left-2   rounded-md p-2 bg-background/95 
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <h3 className="text-sm md:text-lg font-semibold mb-2 line-clamp-1">
              How to Drive a Car Safely
            </h3>
            <p className="text-sm line-clamp-2">
              Ah, the joy of the open road—it’s a good feeling. But if you’re
              new to driving, you may feel a little nervous about getting
              behind the wheel. Don’t worry. While it’s true that accidents
              can happen to anybody, there are things you can do to drive
              safely and do your best to avoid them.{" "}
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-md relative flex-1">
          <img src="./hero2.png" className="w-full" alt="" />
          <div
            className="absolute bottom-2 right-2 left-2   rounded-md p-2 bg-background/95 
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <h3 className="text-sm md:text-lg font-semibold mb-2 line-clamp-1">
              How to Make Dance Music
            </h3>
            <p className="text-sm line-clamp-2">
              Download torrents from verified or trusted uploaders. If you're
              a BitTorrent user looking for safety tips, use this method. Both
              of the big-name BitTorrent indexers (The Pirate Bay and
              KickAssTorrents) use symbols to highlight torrents uploaded by
              verified users.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="overflow-hidden rounded-md relative ">
        <img src="./hero3.png" alt="" />
        <div
          className="absolute bottom-2 right-2 left-2   rounded-md p-2 bg-background/95 
      backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <h3 className="text-sm md:text-lg font-semibold mb-2">
            How to Drive a Car Safely
          </h3>
          <p className="text-sm line-clamp-2">
            A Single Monitor Manifesto — Many developers believe multiple
            monitors improve productivity. Studies have proven it, right?
            Well, keep in mind, many of those studies are commissioned from
            monitor manufacturers like
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero