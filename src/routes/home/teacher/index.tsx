import React from 'react'
import { Input, Button } from 'antd'
import { PageHeader } from '../../../components'

import './index.scss'

const { Search } = Input

export const Teacher: React.FC = () => {
  return (
    <section className="teacher">
      <PageHeader text="教师列表">
        <Search
          placeholder="搜索"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          size="large"
        />
        <Button type="primary" size="large">
          添加
        </Button>
        <Button type="primary" size="large">
          批量导入
        </Button>
      </PageHeader>
    </section>
  )
}
