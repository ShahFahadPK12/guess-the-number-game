/*
1. Generate a number
2. Input Box and button
3. Main Logic check each digit and match
*/

function checkNumber(){
    var answer=document.getElementById("answer").value;
    var attempt=document.getElementById("attempts").value;
    var userinput=document.getElementById("user-input").value;
    var msg=document.getElementById("msg");
    var result=document.getElementById("result");
    console.log(userinput);
    if(!answer){
        answer=generateRandomAnswer();
        document.getElementById("answer").value=answer;
    }
    console.log(answer);
    if(!attempt){
        attempt=0;
    }
    if(!valideNumber(userinput)){
        msg.innerHTML="<p class='text-danger'>Number should be 4 digit long</p>";
        return;

    }
       
    else{
       
        msg.innerHTML="";
        attempt++;
        document.getElementById("attempts").value=attempt;

    }
        var correctDigit=0;
        var html='<tr><td>'+ userinput + '</td><td>'    
            for(let i=0;i<userinput.length;i++){
                if(userinput[i]==answer[i]){
                    html = html + '<i class="fa-solid fa-check text-success" style="padding:3px"></i>';
                    correctDigit++;
                }
                else if(answer.indexOf(userinput[i]) >-1){
                    html = html + '<i class="fa-solid fa-arrow-right-arrow-left text-warning" style="padding:3px"></i>';
                }
                else {
                    html = html + '<i class="fa-solid fa-xmark text-danger" style="padding:3px"></i>';
                }

            }
        
        html=html + '</td></tr>';
        result.innerHTML += html;
        if(correctDigit===userinput.length){
            //Winner
            msg.innerHTML="<p class='msg-success'>You are Winner</p>";
            document.getElementById("btn-guess").style='display:none';
            document.getElementById("btn-play").style='display:block';
        }
        else if(attempt>=10){
            //stop the guessing
            msg.innerHTML="<p class='text-danger'>Sorry, you lost. Please play again to win</p>";
            document.getElementById("btn-guess").style='display:none';
            document.getElementById("btn-play").style='display:block';
        }
        else{
            msg.innerHTML="<p class='text-primary'>Incorrect guess. Try again!</p>";
            
        }
    }




function generateRandomAnswer(){
    var num=(Math.floor(Math.random()*8900)+1000).toString();
    return num;
}
function valideNumber(str){
    if(str.length==4)
        return true;
    else
    return false;
}