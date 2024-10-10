import Canvas from "@/components/Canvas"
import { Flex, Layout } from "antd"
const { Header, Content } = Layout
import "./index.scss"
import Material from "@/components/Material"
import Palette from "@/components/Palette"

export default function () {
  return (
    <>
      <Flex className="h-full">
        <Layout>
          <Header className="header">Lowcoder</Header>
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
