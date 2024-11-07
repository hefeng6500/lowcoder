import { Material } from "@/materials/material"
import { DragPreviewImage, useDrag } from "react-dnd"

const DraggableItem: React.FC<{ item: Material }> = ({ item }: { item: Material }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "ITEM",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <>
      <DragPreviewImage src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" connect={preview} />
      <div ref={drag} className="material-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
        {item.name}
      </div>
    </>
  )
}

export default DraggableItem
