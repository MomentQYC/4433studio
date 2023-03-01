/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-21 09:42:29
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-02-24 10:06:23
 * @FilePath: \4433studio\src\api\request.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import axios from "axios";


const server = axios.create({
    baseURL: "http://chaichaisocute.top:8081/v1",
    responseType: "json",
    timeout: 60000
})
//请求拦截器
server.interceptors.response.use(resp => {
    return Promise.resolve(resp);
});
export default server;