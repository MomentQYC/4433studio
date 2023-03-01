/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-15 08:38:05
 * @LastEditors: fengyuanyao fengyuanyao@fanyu.com
 * @LastEditTime: 2023-02-24 14:01:29
 * @FilePath: \4433studio\src\api\upload.js
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
export function upLoadR(data) {
    return serve({
        url: '/file/upload',
        method: 'post',
        data: data
    })
}

