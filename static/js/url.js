// const baseUrl = 'http://screenservice.umbrella4365.com/api/bigs'; //测试服务器
// const baseUrl = 'http://screenservice.qianxisaas.net/api/bigs'; 

const baseUrl = 'http://jinwang4.umessage.com.cn/api/bigs'; //线上
// const baseUrl = 'http://172.16.29.15:56765/api/bigs'; //测试


// const baseUrl = 'http://172.16.29.15:13002/api/bigs'; 


export default {
    "login": baseUrl+'/user/login',  //登录
    
    "p_mem_face_pay": baseUrl+'/p_mem_face_pay',  //今日客流转化情况
    "p_mem_face_age": baseUrl+"/p_mem_face_age" , //进店分析
    "p_mem_face_hour": baseUrl+"/p_mem_face_hour" , //今日门店客流分析
    "sevendayflow": baseUrl+"/sevendayflow" , //进七日内客流趋势
    "p_mem_realtime_buy": baseUrl+"/p_mem_realtime_buy" , //到店记录
    "p_mem_realtime_buy_age": baseUrl + "/p_mem_realtime_buy_age", //中心
    "p_mem_realtime_buy_blk": baseUrl + "/p_mem_realtime_buy_blk"    //黑名单
}