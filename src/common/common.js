import Vue from 'vue';
import {isObject} from '../util/util';


const ajax = function (url, options,backUrl) {
  options = options || {};
  options.url = url;
  console.log('url: '+ url)
  //mock
  // if(options.jsonParams && process.env.NODE_ENV !== 'development'){
  if(options.jsonParams ){
    let strParam = '';
    if(typeof options.jsonParams == 'string'){
      strParam = options.jsonParams;
    }else if(isObject(options.jsonParams)){
      strParam = JSON.stringify(options.jsonParams);
    }
    strParam = encodeURIComponent(strParam);
    options.url += strParam;
    if(backUrl){
      options.url+=backUrl;
    }
  }
  let defaultErrorMsg = '出错啦!';
  return new Promise((resolve, reject)=>{
    Vue.http(options).then(res=>{

      if(!res.ok) reject({message: defaultErrorMsg});
      res.json().then(json=>{

        if (json.returnInfo) {
          //java  接口
          if (json.returnInfo.code === 200) {
            //statis('ajaxRequest',encodeURIComponent(opts.url), '1').clickV();
            resolve(json);
            //成功后的业务处理
          }else if(json.returnInfo.code === 302){
            // debugger;
            if(!options.useHooker) {
              if(json.returnInfo.message != ''){
                alert(json.returnInfo.message,{
                  callback: () => {
                    window.location.href = json.returnInfo.data;
                  }
                })
              }else{
                window.location.href = json.returnInfo.data;
              }
            }else{
              reject(json);
            }
          }
          else {
            //statis('ajaxRequest',encodeURIComponent(opts.url), json.returnInfo.code).clickV();
            reject(json.returnInfo);
          }
        } else {
          //php  接口
          if(typeof json.error !== 'undefined' && json.error == 0){
            resolve(json);
            //statis('ajaxRequest',encodeURIComponent(opts.url), 1).clickV();
            //成功后的业务处理
          }else if(typeof json.code !== 'undefined' && json.code == 200){
            resolve(json);
          }
          else if(json.code === 302){

            // debugger;
            if(!options.useHooker) {
              if (json.message != '') {
                alert(json.message, {
                  callback: () => {
                    window.location.href = json.data;
                  }
                })
              } else {
                window.location.href = json.data;
              }
            }else{
              reject(json);
            }

          }
          else{
            //statis('ajaxRequest',encodeURIComponent(opts.url), json.error).clickV();
            reject(json);
          }
        }
      }).catch(err=>{
        reject({message: defaultErrorMsg});
      })
    }).catch(err=>{
      reject({message: defaultErrorMsg});
    })
  });
};

export {
  ajax
}
