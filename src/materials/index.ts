import { capitalize } from "lodash-es"
import { Category, Material, Registry, UICompCategory, UICompManifest, UICompType } from "./material"

const componentModules: Record<string, any> = import.meta.glob("./**/index.tsx", { eager: true })

const getComponent = (name: UICompType) => componentModules[`./${capitalize(name)}/index.tsx`].default

export const uiCompCategoryNames: UICompCategory[] = ["form", "dashboards"]

export const uiCompMap: Registry = {
  button: {
    name: "按钮组件",
    enName: "Button",
    description: "Button Component",
    categories: ["form", "dashboards"],
    icon: "",
    comp: getComponent("button"),
    keywords: "form, button",
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  input: {
    name: "输入框组件",
    enName: "Input",
    description: "Input Component",
    categories: ["form", "dashboards"],
    icon: "",
    comp: getComponent("input"),
    keywords: "form, Input",
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  image: {
    name: "图片组件",
    enName: "Image",
    description: "Image Component",
    categories: ["dashboards"],
    icon: "",
    comp: getComponent("image"),
    keywords: "form, image",
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
  modal: {
    name: "模态框组件",
    enName: "Modal",
    description: "Modal Component",
    categories: ["dashboards"],
    icon: "",
    comp: getComponent("modal"),
    keywords: "form, modal",
    layoutInfo: {
      w: 12,
      h: 40,
    },
  },
}

export const uiCompRegistry = {} as Record<UICompType, UICompManifest>

export function registerComp({ compType, manifest }: { compType: UICompType; manifest: UICompManifest }) {
  uiCompRegistry[compType] = {
    ...manifest,
    keywords: [manifest.name, manifest.enName, manifest.keywords].join(",").replace(/[\s]+/g, "").toLowerCase(),
  }
}

export let categories: Category[] = []

export function createCategories(uiCompCategoryNames: UICompCategory[], uiCompMap: Registry): Category[] {
  const catsMap: Record<UICompCategory, Material[]> = {} as Record<UICompCategory, Material[]>

  Object.keys(uiCompMap).forEach((key: string) => {
    uiCompMap[key as UICompType]?.categories.forEach((cat: string) => {
      catsMap[cat as UICompCategory] = catsMap[cat as UICompCategory] || []

      catsMap[cat as UICompCategory].push({
        name: key as UICompType,
        manifest: uiCompMap[key as UICompType]!,
      })
    })
  })

  return uiCompCategoryNames.map((name: UICompCategory) => {
    return {
      name,
      items: catsMap[name],
    }
  })
}

export function loadComps() {
  const entries = Object.entries(uiCompMap)

  for (const [compType, manifest] of entries) {
    registerComp({
      manifest,
      compType: compType as UICompType,
    })
  }

  categories = createCategories(uiCompCategoryNames, uiCompMap)

  console.log(categories)

  return {
    uiCompRegistry,
    uiCompCategoryNames,
    categories,
  }
}
