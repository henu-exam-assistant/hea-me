import React from 'react'
import { Input, Button, Table, Avatar } from 'antd'
import { PageHeader, Space } from '../../../components'

import './index.scss'

const { Search } = Input
const { Column } = Table

export const Teacher: React.FC = () => {
  const data: TeacherRecord[] = [
    {
      name: 'John Brown',
      workID: '10250001',
      tags: ['nice', 'developer'],
    },
  ]

  return (
    <section className='teacher'>
      <PageHeader text='教师列表'>
        <Search placeholder='搜索' onSearch={value => console.log(value)} style={{ width: 200 }} size='middle' />
        <Button type='primary' size='middle'>
          添加
        </Button>
        <Button type='primary' size='middle'>
          批量导入
        </Button>
      </PageHeader>

      <section className='teacher__body-table'>
        {/* todo 移除mock数据 */}
        <Table
          dataSource={new Array(60).fill(data[0]).map((elem: TeacherRecord, index) => ({
            ...elem,
            index: index + 1,
          }))}
          bordered={true}
          size='small'
          pagination={{ pageSize: 20 }}
          rowKey='index'
        >
          <Column title='#' dataIndex='index' key='index' />
          <Column
            title='姓名'
            dataIndex='name'
            key='name'
            render={elem => (
              <span className='teacher__body-table-item-name'>
                <Space>
                  <Avatar src='https://baibai-mine.oss-cn-shanghai.aliyuncs.com/tb6501982-tinfied.jpg' />
                  <span>{elem}</span>
                </Space>
              </span>
            )}
          />
          <Column title='工号' dataIndex='workID' key='workID' />
          {/* https://baibai-mine.oss-cn-shanghai.aliyuncs.com/tb6501982-tinfied.jpg */}
          <Column
            title='操作'
            key='action'
            render={() => (
              <Button type='danger' size='small'>
                删除
              </Button>
            )}
          />
        </Table>
      </section>
    </section>
  )
}
