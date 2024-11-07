export type UICompType = "button" | "text" | "input" | "image" | "modal"

export type UICompCategory = "form" | "dashboards"

// TODO: 类型定义待完善
export interface UICompManifest {
  name: string
  enName: string
  description?: ReactNode
  categories: readonly UICompCategory[]
  keywords: string
  icon: any
  comp: any
  layoutInfo?: Record<string, any>
}

type Registry = {
  [key in UICompType]?: UICompManifest
}

export interface Material {
  name: UICompType
  manifest: UICompManifest
}

export interface Category {
  name: UICompCategory
  items: Material[]
}
