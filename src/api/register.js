/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 08:38:05
 * @LastEditors: Chai chai 2787922490@qq.com
 * @LastEditTime: 2023-03-08 09:09:52
 * @FilePath: \4433studio\src\api\register.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import axios from "axios";
import serve from "./request"

/**
 * @description: 
 * @param {*} return 上传文件
 * @param {*} method
 * @return {*}
 */
export function registerR(data) {
    return serve({
        url: '/user/register',
        method: 'post',
        data: data
    })
}

