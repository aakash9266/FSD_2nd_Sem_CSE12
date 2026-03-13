function calculateResult(){
    let n=document.getElementById("subject").value;
    let total=0;
    for(let i=0;i<n;i++){
        // prompt fn return string
        let marks=parseFloat(prompt("Enter marks of subject "+i));
        total=total+marks;

    }
    let avg=total/n;
    let grade;
    let pass;
    if(avg>=90){
        grade="A+";
    }
    else if(avg>=75){
        grade="A";
    }
    else if(avg>=60){
        grade="B";
    }
    else if(avg>=50){
        grade="C";
    }
    else{
        grade="D";
    }

    if(avg>=40){
        result="pass";
    }
    else{
        result="fail";
    }
    if(avg>=40){
        pass="Pass";
    }
    else{
        pass="Fail"
    }

    document.getElementById("result").innerHTML =
    "Total Marks :"+ total + "<br>" +
    // "Average Marks: " +avg(tofixed)
    "Average Marks: " +avg + "<br>"+"Result :"+pass;

    



}