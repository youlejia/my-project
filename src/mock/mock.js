import Mock from 'mockjs';

Mock.mock('/login', {
    status: '200',
    data:{ token: 'eyJ0eXAiOiJKV1QiLCJhbGc',},
    msg:'登录成功'
});
Mock.mock('/register', {
    status:200
});