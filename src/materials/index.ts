import type { ReactElement } from "react"

type ComponentModule = {
  default: () => ReactElement
}

interface MaterialInfo {
  name: string
  component: () => ReactElement
}

interface MaterialMap {
  [key: string]: MaterialInfo
}

const modules = import.meta.glob<ComponentModule>("./**/*", { eager: true })

export const materialMap: MaterialMap = {}

export const registryComponent = (): { materialMap: MaterialMap; components: any[] } => {
  const components: any[] = Object.keys(modules)
    .filter((item: any) => {
      return item.split("/").length === 3
    })
    .map((key) => {
      const name = key.match(/\.\/(.*)\//)![1]!.toLowerCase() as string

      materialMap[name] = {
        name,
        component: modules[key].default,
      }

      return {
        name,
        component: modules[key].default,
      }
    })

  console.log(components)

  return {
    materialMap,
    components,
  }
}
