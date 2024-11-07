// store.ts
import { configureStore } from "@reduxjs/toolkit"
import canvasReducer from "@/store/features/canvasSlice"
import designReducer from "@/store/features/designSlice"

const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    design: designReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
