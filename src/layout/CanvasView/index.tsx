import { uiCompRegistry } from "@/materials"
import { Material } from "@/materials/material"
import { RootState } from "@/store"
import { addItem, removeItem } from "@/store/features/canvasSlice"
import { useDrop } from "react-dnd"
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"

export default function () {
  const dispatch = useDispatch()
  const canvasItems = useSelector((state: RootState) => state.canvas.items)

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: ({ name }: Material) => {
      dispatch(addItem(name))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeItem(id))
  }

  return (
    <div className="canvas-container">
      <div className="grid-container">
        <div ref={drop} className="grid-box">
          {canvasItems.map(({ id, name }, index) => {
            const Component = uiCompRegistry[name].comp

            return (
              <div key={index} className="canvas-item">
                <Component />
                <button onClick={() => handleRemoveItem(id)}>移除</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
