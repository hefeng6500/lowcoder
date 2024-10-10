import { Button, Layout } from "antd"
import "./index.scss"
import { Left, Middle, Right } from "@/icons"

export default function () {
  return (
    <Layout.Header className="header">
      <div>Lowcoder</div>
      <div className="w-[120px] flex items-center justify-between operate-icon">
        <Left></Left>
        <Middle></Middle>
        <Right></Right>
      </div>
      <div>
        <Button size="small">Share</Button>
        <Button size="small" type="primary" className="ml-2">
          Publish
        </Button>
      </div>
    </Layout.Header>
  )
}
