type Timestamp = number | string

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

/**
 * 监考记录
 */ declare interface RoomRecord {
  /**
   * 记录ID
   */ planid?: number

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
   */ examteacher: string[]

  createtime?: Timestamp
}

/**
 * 巡考记录
 */ declare interface ExamRecord {
  /**
   * 记录ID
   */ examid?: number

  /**
   * 考试标题
   */ title?: string

  /**
   * 年级
   */ grade: string

  /**
   * 专业
   */ major: string

  /**
   * mark 未知标记
   */ remark?: string

  /**
   * 考试名/课程名 、课程号
   */ coursename: string
  courseid: number

  /**
   * 任课教师
   */ teacher: string

  /**
   * 监考教师列表
   */ tlist: string[]

  /**
   * 巡考教师列表
   */ mlist: string[]

  /**
   * 对应的考试信息
   */ planinfo?: RoomRecord
}
