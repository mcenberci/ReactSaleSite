const messages = [
{sid:1,gid:0,message:"ProProPro"},
{sid:1,gid:0,message:"ProProProooo"},
{sid:0,gid:1,message:"ProProPro"},
{sid:0,gid:1,message:"ProProPros"}
]
if(JSON.parse(localStorage.getItem("messages"))===null) {localStorage.setItem("messages",JSON.stringify(messages));}
export default messages;