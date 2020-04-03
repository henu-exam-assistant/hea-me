import { CommonAjax } from '../commonAjax'

export const getTeacherList = () => {
  return new Promise(resolve => {
    CommonAjax({ path: '/api/admin/teacherlist' }).then(res => {
      console.log(res, 1)
      resolve(res)
    })
  })
}
