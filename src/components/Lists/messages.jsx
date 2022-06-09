const messages = [
{sid:1,gid:0,message:"Son kaça olur ?"},
{sid:0,gid:1,message:"Malesef ürün fiyatında indirim yoktur."}
]
if(JSON.parse(localStorage.getItem("messages"))===null) {localStorage.setItem("messages",JSON.stringify(messages));}
export default messages;