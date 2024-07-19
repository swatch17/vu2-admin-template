import request from '@/utils/request';

export const test = (data) =>
  request({
    url: 'hello/123',
    method: 'post',
    data,
  });
