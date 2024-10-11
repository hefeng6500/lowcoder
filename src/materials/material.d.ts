import React from "react"

export interface Material {
  name: string
  component: React.Component
}

export interface MaterialComponent {
  config: Material
}
