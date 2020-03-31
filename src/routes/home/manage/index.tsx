import React from 'react'
import { Button, Table, Tag } from 'antd'
import { PageHeader } from '../../../components'
import { Config } from '../../../config'
import { usePagination } from '../../../context'

import './index.scss'

const { Column } = Table

export const Manage: React.FC = () => {
  const data: ExamRecord[] = [
    {
      coursename: '大学英语读写译(一)',
      courseid: 200005,
      major: '网络工程',
      grade: '2016',
      teacher: '郭念',
      tlist: ['白晨希', '李铁柱', '王趁平'],
      mlist: ['左方'],

      planinfo: {
        area: '明伦校区',
        room: '综合楼109',
        coursename: '大学英语读写译(一)',
        courseid: 200005,
        college: '软件学院',
        grade: '2016',
        major: '网络工程',
        examway: '机试',
        num: 79,
        seatleft: 79,
        day: '1月7日',
        start: '08:00',
        end: '09:40',
        examteacher: ['白晨希', '李铁柱', '王趁平'],
      },
    },
  ]

  const { pageSize, handleShowSizeChange } = usePagination()

  return (
    <section className='manage'>
      <PageHeader text='考试列表'>
        <Button type='primary' size='middle'>
          添加巡考
        </Button>
      </PageHeader>

      <section className='teacher__body-table'>
        {/* todo 移除mock数据 */}
        <Table
          dataSource={new Array(70).fill(data[0]).map((elem: ExamRecord, index) => ({
            ...elem,
            index: index + 1,
          }))}
          bordered={true}
          size='small'
          pagination={{
            pageSize: pageSize || Config.home.manage.table.pageSize,
            onShowSizeChange: handleShowSizeChange,
          }}
          rowKey='index'
        >
          <Column title='#' dataIndex='index' key='index' />
          <Column title='科目' dataIndex='coursename' key='coursename' colSpan={2} />
          <Column title='课程号' dataIndex='courseid' key='courseid' colSpan={0} />

          <Column title='专业' dataIndex='major' key='major' />
          <Column title='年级' dataIndex='grade' key='grade' />

          <Column title='任课教师' dataIndex='teacher' key='teacher' />

          <Column title='考试时间' dataIndex='planinfo' key='day' colSpan={3} render={elem => elem.day} />
          <Column title='开始时间' dataIndex='planinfo' key='start' colSpan={0} render={elem => elem.start} />
          <Column title='结束时间' dataIndex='planinfo' key='end' colSpan={0} render={elem => elem.end} />

          <Column title='考试教室' dataIndex='planinfo' key='room' render={elem => elem.room} />
          <Column title='考核方式' dataIndex='planinfo' key='examway' render={elem => elem.examway} />

          <Column
            title='监考老师'
            dataIndex='tlist'
            key='tlist'
            render={(elem: string[]) =>
              elem.map((key: string) => (
                <Tag color={'blue'} key={key}>
                  {key}
                </Tag>
              ))
            }
          />

          <Column
            title='巡考老师'
            dataIndex='mlist'
            key='mlist'
            render={(elem: string[]) =>
              elem.map((key: string) => (
                <Tag color={'blue'} key={key}>
                  {key}
                </Tag>
              ))
            }
          />
        </Table>
      </section>
    </section>
  )
}
