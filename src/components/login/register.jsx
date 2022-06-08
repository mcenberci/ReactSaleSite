import members from "../Lists/member"
function Register(props){
    members[members.length] = {id:members.length,name:props.name,surname:props.surname,email:props.email,password:props.password,img:"https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",city:"unknown",town:"unknown"}
    var memberss = JSON.parse(localStorage.getItem("memberlist"));
    if (JSON.parse(localStorage.getItem("memberlist"))===null){
        localStorage.setItem("memberlist", JSON.stringify(members));
    }
    else{
        memberss[memberss.length] = members[members.length-1];
        memberss[memberss.length-1].id = memberss.length-1;
        memberss[memberss.length-1].img = "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
        localStorage.setItem("memberlist",JSON.stringify(memberss));    
    }
}

export default Register;