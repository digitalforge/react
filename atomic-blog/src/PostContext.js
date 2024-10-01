import { createContext, useContext, useState } from 'react'
import { faker } from '@faker-js/faker'

// This file can be used as a recipe to create a context for your app. You can copy and paste this file into your project and modify it to fit your needs. You can also use it as a reference to understand how contexts work.

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  }
}

//this starts with an uppercase letter because its a component
// by convention all components start with an uppercase letter
// 1. Create a context
const PostContext = createContext()

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  )
  const [searchQuery, setSearchQuery] = useState('')

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter(post =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts

  function handleAddPost(post) {
    setPosts(posts => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {' '}
      {children}
    </PostContext.Provider>
  )
}

// CUSTOM HOOK
function usePosts() {
  const context = useContext(PostContext)
  if (context === undefined) {
    throw new Error('Post context was used outsite of the post provider')
  }
  return context
}

export { PostProvider, usePosts, createRandomPost }
