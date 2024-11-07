import { UICompCategory, UICompManifest, UICompType } from "@/materials/material"
import { createSlice } from "@reduxjs/toolkit"

interface DesignState {
  uiCompRegistry: Record<UICompType, UICompManifest>
  uiCompCategoryNames: UICompCategory[]
  categories: any[]
}

const initialState: DesignState = {
  uiCompRegistry: {} as Record<UICompType, UICompManifest>,
  uiCompCategoryNames: [],
  categories: [],
}

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {
    loadMaterials: () => {},
  },
})

// 导出 actions
export const { loadMaterials } = designSlice.actions

// 导出 reducer
export default designSlice.reducer
