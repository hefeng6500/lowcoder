import Canvas from "@/components/Canvas"
import { Flex, Layout } from "antd"

import "./index.scss"
import Material from "@/components/Material"
import Palette from "@/components/Palette"
import Header from "@/components/Header"

const { Content } = Layout

export default function () {
  return (
    <>
      <Flex className="h-full">
        <Layout>
          <Header></Header>
          <Content className="content">
            <Material></Material>
            <Canvas></Canvas>
            <Palette></Palette>
          </Content>
        </Layout>
      </Flex>
    </>
  )
}
