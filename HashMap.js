var keys = [];
var values = [];
put("1",1);
put(1,2);
console.log(get("1"));
console.log(get(1));
function put(key,value){
 for(var i =0;i<keys.length;i++){
   if(keys[i]==key){
      keys[i] = key;
     values[i] = value;
      return;
}
 }
  if(keys.length == 0 && values.length == 0){
     keys[0] =key;
  values[0]=value;
}else{
 keys[keys.length] = key;
values[values.length] = value;
}
}
function containsKey(key){
   for(var i = 0;i<keys.length;i++){
       if(keys[i]==key){
         return true;
}
}
return false;
}
function remove(key){
  var num= 0;
  if(keys.length ==1&&values.length==1){
      keys=[];
  values=[];
}
   for(var i =0;i<keys.length;i++){
       if(keys[i]==key){
             num = i;
           break;
      }
    }
    for(var i = num;i<keys.length-1;i++){
          keys[i] = keys[i+1];
    }
 for(var i = num;num<keys.length-1;i++){
          values[i] = values[i+1];
    }
}
function get(key){
   for(var i =0;i<keys.length;i++){
       if(keys[i] == key){
         return values[i];
}

}
return null;
}
