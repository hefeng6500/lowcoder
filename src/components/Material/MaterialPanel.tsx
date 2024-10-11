import DraggableItem from "./DraggableItem"

const MaterialPanel = ({ items }: any) => {
  return (
    <div className="material-panel">
      {items.map((item: any, index: any) => {
        return <DraggableItem key={index} item={item} />
      })}
    </div>
  )
}

export default MaterialPanel
