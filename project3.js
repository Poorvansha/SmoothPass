function maskPassword(pass){
    let str="";
    for(let index=0;index<pass.length;index++){
str+="*";
    }
  return str;
}
function copyText(txt) {
    navigator.clipboard.writeText(txt)
      .then(() => {
        alert("Copied the text: " + txt);
      })
      .catch(err => {
        console.error('Failed to copy text:', err);
        // Optional: Display an error message to the user
      });
  }
const deletePassword=(website)=>{  //3
    let data=localStorage.getItem("passwords");
let arr=JSON.parse(data);
arrUpdated=arr.filter((e)=>{
return e.website!=website;
})
localStorage.setItem("passwords",JSON.stringify(arrUpdated));
alert(`Successfully deleted ${website}'s password`)
showPasswords();
}
const showPasswords=()=>{  //2
//logic to fill the table
let tb=document.querySelector("table");
let data=localStorage.getItem("passwords");
if(data===null){
    tb.innerHTML="No data To Show";
}else{
    tb.innerHTML= `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`
    let arr=JSON.parse(data);
    str="";
    for(let index=0;index<arr.length;index++){
        const element=arr[index];
    
str+=`<tr>
<td>${element.website} <i class="fas fa-copy copy-icon" data-text="${element.website}"  onclick="copyText('${element.website.value}')"></i></td>
<td>${element.username} <i class="fas fa-copy copy-icon" data-text="${element.username}" onclick="copyText('${element.username.value}')"></i></td>
<td>${maskPassword(element.password)} <i class="fas fa-copy copy-icon" data-text="${element.password}" onclick="copyText('${element.password.value}')"></i></td>
    <td><button class="btnsn" onclick="deletePassword('${element.website}')">Delete</button></td>
     </tr>`
    }
    tb.innerHTML=tb.innerHTML+str;
}
website.value="";  //to reset these fiels once we fill them all  to enter new enteries
username.value="";
password.value="";
}
   showPasswords();  
document.querySelector(".btn").addEventListener("click",(e)=>{  //1
    e.preventDefault();
    console.log("clicked...");
    console.log(username.value,password.value);    
    let passwords=localStorage.getItem("passwords");
    console.log(passwords)
    if(passwords===null){
    let json=[] //we created an empty json to store passwords
    json.push({website:website.value,username:username.value,password:password.value});
     alert("Password Saved");
     localStorage.setItem("passwords",JSON.stringify(json));
    }else{
        let json=JSON.parse(localStorage.getItem("passwords"));
        json.push({website:website.value,username:username.value,password:password.value});
     alert("Password Saved");
     localStorage.setItem("passwords",JSON.stringify(json));
    }
    showPasswords();
}) ;

