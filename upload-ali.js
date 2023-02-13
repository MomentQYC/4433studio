const fs = require("fs");
const path = require("path");
const colors = require("colors-console");
const AliOss = require("ali-oss");
const dotenv = require("dotenv");

dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
});

const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./ali-oss.config.json"), "utf-8"));
const oss = new AliOss(config);

// 打包目录
const buildSrc = path.resolve(__dirname, "./dist");
if (!isExist(buildSrc)) {
    console.log(colors("red", "打包目录不存在"));
    return;
}

const ossPutPromiseList = ossPut(buildSrc);

Promise.all(ossPutPromiseList).then((res) => {
    console.log("上传文件列表: ", ...res.map(r => r.url));
    console.log(colors("green", "文件上传成功，当前环境：" + process.env.NODE_ENV))
});

/**
 * oss 上传
 * @param {string} localBasePath
 * @param {string} uploadBasePath
 * @param {Promise[]} putList
 * @returns {Promise[]}
 */
function ossPut(localBasePath, uploadBasePath = process.env.UPLOAD_BASE_PATH, putList = []) {
    const files = fs.readdirSync(localBasePath);
    files.forEach(name => {
        const filePath = path.resolve(localBasePath, name);
        const fileType = getFileType(filePath);
        if (!fileType) {
            return false;
        }
        const uploadPath = path.join(uploadBasePath, name).replace(/\\/g, "/");
        if (fileType === "file") {
            putList.push(oss.put(uploadPath, filePath));
        } else {
            ossPut(filePath, uploadPath, putList);
        }
    });
    return putList;
}

/**
 * 文件是否存在
 * @param path
 * @returns {boolean}
 */
function isExist(path) {
    try {
        fs.accessSync(path);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * 获取文件类型
 * @param {string} path
 * @returns {"file"|"directory"|null}
 */
function getFileType(path) {
    try {
        const stats = fs.statSync(path);
        if (stats.isFile()) {
            return "file";
        } else {
            return "directory";
        }
    } catch (error) {
        return null;
    }
}

