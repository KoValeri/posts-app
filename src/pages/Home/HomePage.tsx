import PostsList from '@/pages/Home/PostsList';
import Filter from '@/components/Filter/Filter';
import { useState } from 'react'

export default function HomePage() {
  const [tags, setTags] = useState<string[]>([])

  return (
    <>
      <Filter 
        tags={tags}
      />
      <PostsList 
      getTags={setTags}/>
    </>
  );
}
