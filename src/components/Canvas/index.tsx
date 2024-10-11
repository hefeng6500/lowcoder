import "./index.scss"
import { useDispatch, useSelector } from "react-redux"
import { removeItem, addItem } from "@/store/features/canvasSlice"
import { useDrop } from "react-dnd"
import { RootState } from "@/store"

export default function () {
  const dispatch = useDispatch()
  const canvasItems = useSelector((state: RootState) => state.canvas.items)

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item: { name: string }) => {
      dispatch(addItem(item.name))
    },
  })

  const handleRemoveItem = (name: any) => {
    dispatch(removeItem(name))
  }

  return (
    <div className="canvas-container">
      <div className="grid-container">
        <div ref={drop} className="grid-box">
          {canvasItems.map((name, index) => {
            return (
              <div key={index} className="canvas-item">
                {name}
                <button onClick={() => handleRemoveItem(name)}>移除</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
