import { useDrag } from "react-dnd"

const DraggableItem: React.FC<{ item: string }> = ({ item }: any) => {
  const { component: MaterialComponent } = item
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div ref={drag} className="material-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {<MaterialComponent />}
    </div>
  )
}

export default DraggableItem
