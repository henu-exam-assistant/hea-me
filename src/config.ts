import { DashboardOutlined, TeamOutlined, TableOutlined, SolutionOutlined } from '@ant-design/icons'

export const apiBaseUrl = 'https://gchenu.leezx.cn/'

export const Config = {
  apiUrl: 'https://gchenu.leezx.cn/',
  // apiUrls: {
  //   login: `${apiBaseUrl}/index/login/login`,
  //   teacherlist: `${apiBaseUrl}/api/admin/teacherlist`,
  //   roomlist: `${apiBaseUrl}/api/admin/roomlist`,
  //   examlist: `${apiBaseUrl}/api/admin/examlist`,
  // },
  home: {
    routes: [
      {
        name: '管理中心',
        to: '/home/console',
        Icon: DashboardOutlined,
      },
      {
        name: '教师管理',
        to: '/home/teacher',
        desc: '教师管理描述',
        Icon: TeamOutlined,
      },
      {
        name: '排考管理',
        to: '/home/room',
        desc: '排考管理描述',
        Icon: TableOutlined,
      },
      {
        name: '监考管理',
        to: '/home/manage',
        desc: '监考管理描述',
        Icon: SolutionOutlined,
      },
    ],
    manage: {
      table: { pageSize: 20 },
    },
    room: {
      table: { pageSize: 20 },
    },
    teacher: {
      table: { pageSize: 20 },
    },
  },
  footer: {
    content: '© 2020 软件学院排考系统',
  },
}

export const ossBaseUrl = 'https://pics.leezx.cn'
