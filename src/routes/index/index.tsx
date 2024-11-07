import GridLayout from "@/layout/GridLayout"
import Header from "@/layout/Header"
import LeftPanel from "@/layout/LeftPanel"
import RightPanel from "@/layout/RightPanel"
import { Flex, Layout } from "antd"

import { loadComps } from "@/materials"
import "./index.scss"

const { Content } = Layout

export default function () {
  loadComps()

  return (
    <>
      <Flex className="h-full">
        <Layout>
          <Header></Header>
          <Content className="content">
            <LeftPanel></LeftPanel>
            <GridLayout></GridLayout>
            <RightPanel></RightPanel>
          </Content>
        </Layout>
      </Flex>
    </>
  )
}
