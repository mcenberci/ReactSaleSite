const members = [
    {id:0,name:"Mustafa",surname:"Çenberci",email:"admin@admin.com",password:"admin", img:"https://cdnb.artstation.com/p/assets/images/images/011/917/129/original/hunter-mortenson-gif-hex.gif?1532076522",city:"İstanbul",town:"Sarıyer"},
    {id:1,name:"Eralp",surname:"Özten",email:"keladmin@admin.com",password:"admin", img:"https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg",city:"Kırklareli",town:"Alpullu"}  
];
if(JSON.parse(localStorage.getItem("memberlist"))===null){ localStorage.setItem("memberlist",JSON.stringify(members));}
export default members;