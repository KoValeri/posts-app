import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Reactions {
  likes: number
  dislikes: number
  isLiked: boolean
  isDisliked: boolean
  views: number
}

interface ReactionsState {
  [postId: number]: Reactions
}

const initialState: ReactionsState = {}

function ensurePost(state: ReactionsState, postId: number, likes: number, dislikes: number, views: number) {
  if (!state[postId]) {
    state[postId] = {
      likes,
      dislikes,
      isLiked: false,
      isDisliked: false,
      views
    }
  }
}

const reactionsSlice = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    toggleLikes(state, action: PayloadAction<{ postId: number; likes: number; dislikes: number; views: number }>) {
      const { postId, likes, dislikes, views } = action.payload
      ensurePost(state, postId, likes, dislikes, views)
      const reactions = state[postId]

      if (reactions.isLiked) {
        reactions.likes--
        reactions.isLiked = false
      } else {
        reactions.likes++
        reactions.isLiked = true
        if (reactions.isDisliked) {
          reactions.dislikes--
          reactions.isDisliked = false
        }
      }
    },

    toggleDislikes(state, action: PayloadAction<{ postId: number; likes: number; dislikes: number; views: number }>) {
      const { postId, likes, dislikes, views } = action.payload
      ensurePost(state, postId, likes, dislikes, views)
      const reactions = state[postId]

      if (reactions.isDisliked) {
        reactions.dislikes--
        reactions.isDisliked = false
      } else {
        reactions.dislikes++
        reactions.isDisliked = true
        if (reactions.isLiked) {
          reactions.likes--
          reactions.isLiked = false
        }
      }
    },

    toggleViews(state, action: PayloadAction<{ postId: number; likes: number; dislikes: number; views: number }>) {
      const { postId, likes, dislikes, views } = action.payload
      ensurePost(state, postId, likes, dislikes, views)
      state[postId].views++
    },
  },
})

export const reactionsActions = reactionsSlice.actions
export default reactionsSlice.reducer
