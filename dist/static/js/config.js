export default {
    formData:function(json){
      var formdata = new FormData();
      for(var k in json){
      	
      	formdata.append(k,json[k])
      }
      return formdata;
    }
}