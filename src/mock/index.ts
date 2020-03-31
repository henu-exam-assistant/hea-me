/* eslint-disable @typescript-eslint/no-explicit-any */
import Mock from 'mockjs'

export default function initMock(): void {
  const rules: { [key: string]: object | (() => any) } = {
    'GET /api/test': {
      'result|10': '123',
    },
    'POST /api/fun': () => {
      return 0
    },
  }

  Object.keys(rules).forEach(key => {
    const [method, path] = key.split(' ')

    Mock.mock(path, method.toLowerCase(), {
      code: 0,
      msg: `${method} ${path} request:ok`,
      data: typeof rules[key] === 'function' ? (rules[key] as () => any)() : rules[key],
    })
  })
}
