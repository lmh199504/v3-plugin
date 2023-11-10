import request from "@/utils/request";



request({
  url: "/",
  method: "GET",
  baseURL: "https://www.baidu.com",
  data: {
    q: "你好",
    text: "7777"
  }
})