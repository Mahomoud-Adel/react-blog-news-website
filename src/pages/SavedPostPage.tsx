import PostItem from '@/components/shared/PostItem'

const SavedPostPage = () => {
  return (
    <div className='mt-6'>
      <h3 className='mb-4 font-bold text-xl'>Saved Posts</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  )
}

export default SavedPostPage