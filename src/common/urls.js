const API = {
  production: '',
  development: '/rest/'
};
let apiUrl='',token='';

const urls = {
  production:{
    detail : apiUrl + '/rest/' + token + '/Java/item/queryItemDetailInfo/',
  },
  development: {
    detail: 'detail',
  }
}

const expUrl = urls[process.env.NODE_ENV];

if(process.env.NODE_ENV == 'development'){
  for (var key in urls.production){
    if(!expUrl[key]){
      expUrl[key] = urls.production[key];
    }else{
      expUrl[key] = API[process.env.NODE_ENV]+expUrl[key];
    }
  }
}
export default {
  ...expUrl
}
