//Validating input principal value is postive, with ALERT BOX
function validateAmount(){
    var principal = document.getElementById("principal").value;
    var morethanZero = parseInt(principal)>0;
    //console.log(morethanZero)
    if(!morethanZero)
    {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    }
}

//Compute function
function compute()
{
    validateAmount()
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var totalamount = interest + principal

    document.getElementById("result").innerHTML="If you deposit "+"<span class='tagged'>"+principal+"</span>"+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+totalamount+",\<br\>in the year "+year+"\<br\>"

}
//Slider updates function
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
