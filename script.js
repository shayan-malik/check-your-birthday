function check(){
    let userInput = document.getElementById("userDate").value;

    let currentDate = new Date();
    let secCurDate = currentDate.getTime();
    
    let userDate = new Date(userInput);
    let secUserInput = userDate.getTime();
    
    let remaining = secUserInput - secCurDate;

    let finalremainingdays = Math.round(remaining / (1000 * 60 * 60 *24));
    

    if(secUserInput > secCurDate){
        document.getElementById("result").innerHTML = `Remaining Days of Your Birthday is: ${finalremainingdays}`;
        
    }
    else{
        document.getElementById("result").innerHTML = `Your Bithday Passed ${(finalremainingdays)} Days Ago`;

    }
}