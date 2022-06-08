import members from "../Lists/member";
let LogCheck=false;
let currentName = null;
let currentSurname = null;
let currentEmail = null;
let currentImg = null;
let currentID = null;
let currentCity = null;
let currentTown = null;
function LoginCheck(props) {
    var membersss;
    if(JSON.parse(localStorage.getItem("memberlist"))===null){
        membersss = members
    }
    else{
        membersss = JSON.parse(localStorage.getItem("memberlist"))
    }
    LogCheck=false;
    currentID=null;
    for(let i = 0 ; i<membersss.length;i++){
        if(membersss[i].email===props.email && membersss[i].password===props.password){
            LogCheck=true;
            currentID= membersss[i].id;
            currentName = membersss[i].name;
            currentSurname = membersss[i].surname;
            currentEmail = membersss[i].email;
            currentImg = membersss[i].img;
            currentCity = membersss[i].city;
            currentTown = membersss[i].town;
            localStorage.setItem("id",JSON.stringify(currentID));
            localStorage.setItem("name",JSON.stringify(currentName));
            localStorage.setItem("surname",JSON.stringify(currentSurname));
            localStorage.setItem("email",JSON.stringify(currentEmail));
            localStorage.setItem("img",JSON.stringify(currentImg));
            localStorage.setItem("city",JSON.stringify(currentCity));
            localStorage.setItem("town",JSON.stringify(currentTown));
            localStorage.setItem("LogCheck",JSON.stringify(LogCheck));
        }
    }
    if(LogCheck===false){
        alert("Hatalı Giriş Yaptınız Bilgilerinizi Kontrol Ediniz !!!!");
        currentImg = "{Def}";
    }
    return(LogCheck);

}
export {LoginCheck,currentName,currentSurname,currentEmail,LogCheck,currentImg,currentID};
