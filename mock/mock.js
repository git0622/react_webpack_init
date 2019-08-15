
import Mock from 'mockjs';
import score from './mock-reponses/score.js';
import student from './mock-reponses/student.js';

const domain = 'http://guanwang/api' // 设置默认请求的url
// 设置请求延时时间
Mock.setup({
    timeout: 1000 //方式一 直接设置值
    // timeout: '2000 - 5000' // 方式二 设置区间 注意这个是一个字符串形式
})
// Mock.mock(`/${domain}/student`, "get", student);//不带参数
// Mock.mock(`${domain}/score`, "post", score);//不带参数

Mock.mock(eval(`/\/${domain}\/student(|\?\S*)$/`), "get", student);//带参数
Mock.mock(eval(`/\/${domain}\/score(|\?\S*)$/`), "post", score);//带参数


/***正则 */
// * 匹配前面元字符0次或多次，/ba*/将匹配b,ba,baa,baaa 
// + 匹配前面元字符1次或多次，/ba*/将匹配ba,baa,baaa 
// ? 匹配前面元字符0次或1次，/ba*/将匹配b,ba 
// \s 匹配一个空白字符，包括\n,\r,\f,\t,\v等 
// \S 匹配一个非空白字符，等于/[^\n\f\r\t\v]/ 