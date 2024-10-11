// features/canvasSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CanvasState {
  items: any[]
}

const initialState: CanvasState = {
  items: [],
}

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {
      state.items.push(action.payload)
    },
    removeItem(state, action: PayloadAction<any>) {
      state.items = state.items.filter((item) => item !== action.payload)
    },
  },
})

// 导出 actions
export const { addItem, removeItem } = canvasSlice.actions

// 导出 reducer
export default canvasSlice.reducer
