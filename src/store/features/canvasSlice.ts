// features/canvasSlice.ts
import { UICompType } from "@/materials/material"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

interface Item {
  id: string | number
  name: UICompType
}

interface CanvasState {
  items: Item[]
}

const initialState: CanvasState = {
  items: [],
}

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<any>) {
      state.items.push({
        id: uuidv4(),
        name: action.payload,
      })
    },
    removeItem(state, action: PayloadAction<any>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

// 导出 actions
export const { addItem, removeItem } = canvasSlice.actions

// 导出 reducer
export default canvasSlice.reducer
