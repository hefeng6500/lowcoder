import { registryComponent } from "@/materials"
import MaterialPanel from "./MaterialPanel"
import "./index.scss"

export default function () {
  const { components } = registryComponent()

  return (
    <div className="material-container">
      <div>Material</div>

      <hr />

      <MaterialPanel items={components} />
    </div>
  )
}
