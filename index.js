function addStudent()
{

    var name=document.getElementById("name").value;
    var website=document.getElementById("website").value;
    var email=document.getElementById("email").value;
    var skills=document.getElementsByClassName('skills');
    var str='';
    for( i=0;i<skills.length;i++)
    {
        if(skills[i].checked)
        {
            str += skills[i].value+" ";
        }
    }

    var gender=document.getElementsByName("gender");
    var gender1="";
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked)
        {
            gender1=gender[i].value;
        }
    }

    
    
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
   


    td1.innerHTML=name;
    td2.innerHTML=website;
    td3.innerHTML=email;
    td4.innerHTML=gender1;
    td5.innerHTML=str;
   
    document.getElementById("t1").appendChild(tr);
}