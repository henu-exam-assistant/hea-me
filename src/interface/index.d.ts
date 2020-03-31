// Home
declare interface LeftNavItem {
  name: string
  to: string
  icon: React.ReactElement
}

declare interface TeacherRecord {
  name: string
  workID: string
  tags: string[]
}

declare interface RoomRecord {
  /**
   * 校区
   */ area: string
  /**
   * 教室
   */ room: string

  /**
   * 课程名、课程号
   */
  coursename: string
  courseid: number
  /**
   * 学院、年级、专业
   */
  college: string
  grade: string
  major: string
  /**
   * 考核方式
   */ examway: string

  /**
   * 考场计划人数、剩余人数
   */
  num: number
  seatleft: number
  /**
   * 考试日期、开始、结束时间
   */
  day: string
  start: string
  end: string
  /**
   * 监考老师列表
   */
  examteacher: string[]
}
