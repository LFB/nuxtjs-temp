import request from '@/utils/request'

// 获取文章
export function detail(id) {
  return request({
    url: '/v1/article/' + id,
    method: 'get'
  })
}
