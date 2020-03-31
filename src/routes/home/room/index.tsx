import React from 'react'
import { Button, Table, Tag } from 'antd'
import { PageHeader } from '../../../components'
import { Config } from '../../../config'
import { usePagination } from '../../../context'

import './index.scss'

const { Column } = Table

export const Room: React.FC = () => {
  const data: RoomRecord[] = [
    {
      area: '明伦校区',
      room: '综合楼109',
      coursename: '大学英语读写译(一)',
      courseid: 200005,
      college: '',
      grade: '',
      major: '',
      examway: '',
      num: 79,
      seatleft: 79,
      day: '1月7',
      start: '08:00',
      end: '09:40',
      examteacher: ['白晨希', '李铁柱', '王趁平'],
    },
  ]

  const { pageSize, handleShowSizeChange } = usePagination()

  return (
    <section className='room'>
      <PageHeader text='考场列表'>
        <Button type='primary' size='middle'>
          批量导入
        </Button>
        <Button type='primary' size='middle' disabled>
          监考查重
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
          pagination={{
            pageSize: pageSize || Config.home.room.table.pageSize,
            onShowSizeChange: handleShowSizeChange,
          }}
          rowKey='index'
        >
          <Column title='#' dataIndex='index' key='index' />
          <Column title='校区' dataIndex='area' key='area' />
          <Column title='教室' dataIndex='room' key='room' />

          <Column title='科目' dataIndex='coursename' key='coursename' colSpan={2} />
          <Column title='课程号' dataIndex='courseid' key='courseid' colSpan={0} />

          <Column title='年级' dataIndex='grade' key='grade' />
          <Column title='专业' dataIndex='major' key='major' />
          <Column title='考核方式' dataIndex='examway' key='examway' />
          <Column title='考场计划人数' dataIndex='num' key='num' />
          <Column title='考场剩余人数' dataIndex='seatleft' key='seatleft' />

          <Column title='考试时间' dataIndex='day' key='day' colSpan={3} />
          <Column title='开始时间' dataIndex='start' key='start' colSpan={0} />
          <Column title='结束时间' dataIndex='end' key='end' colSpan={0} />

          <Column
            title='监考老师'
            dataIndex='examteacher'
            key='examteacher'
            render={(elem: string[]) =>
              elem.map((key: string) => (
                <Tag color={'blue'} key={key}>
                  {key}
                </Tag>
              ))
            }
          />

          <Column
            title='操作'
            key='action'
            render={() => (
              <Button type='primary' size='small'>
                修改
              </Button>
            )}
          />
        </Table>
      </section>
    </section>
  )
}
