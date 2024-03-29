import {config} from '../config.js'

const tips = {
    0 : "抱歉，出现了一个错误",
    1005 : "appkey无效",
    3000 : "期刊不存在"
}

class HTTP{
    request(params){
        //data  url  method
        if(!params.method){
            params.method = "GET"
        }
        wx.request({
            url : config.api_base_url + params.url,
            method : params.method,
            data : params.data,
            header : {
                'content-type' : 'application/json',
                'appkey' : config.appkey
            },
            success : (res)=>{
                let code = res.statusCode.toString();
                if(code.startsWith('0')){
                    params.success && params.success(res.data) 
                }else{
                    let error_code = res.data.error_code; 
                    this._show_error(error_code)
                }
            },
            fail : (err)=>{
                 this._show_error(0)
            }   
        })
    } 
    _show_error(error_code){
        if(!error_code){
            error_code = 0
        }
        wx.showToast({
            title : tips[error_code],
            icon : 'none',
            duration : 2000
        })
    }
}


export {HTTP}
