import { categories } from "@/materials"
import { Category, Material } from "@/materials/material"
import type { CollapseProps, TabsProps } from "antd"
import { Collapse, Tabs } from "antd"
import DraggableItem from "./DraggableItem"

const MaterialPanel = () => {
  const items: CollapseProps["items"] = categories.map(({ name, items }: Category) => {
    return {
      key: name,
      label: name,
      children: items.map((item: Material) => {
        return <DraggableItem key={item.name} item={item} />
      }),
    }
  })

  const defaultActiveKey = categories.map(({ name }: Category) => name)

  const tabItems: TabsProps["items"] = [{ key: "material", label: "素材", children: <Collapse items={items} defaultActiveKey={defaultActiveKey} size="small" /> }]

  return (
    <div>
      <Tabs items={tabItems}></Tabs>
    </div>
  )
}

export default MaterialPanel
