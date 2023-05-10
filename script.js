const btn = document.getElementById("button");
btn.addEventListener("click",()=>{
    let input=Number(document.getElementById("input").value);
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    console.log(typeof input);
    var result;
    if (from=="Fahrenheit" && to=="Celsius") {
        result=(input-32)*(5/9);
    }
    else if (from=="Fahrenheit" && to=="Kelvin"){
        result=((input-32)*(5/9))+273.15;
    }
    else if (from=="Celsius" && to=="Fahrenheit"){
        result=(input*(9/5))+32;
    }
    else if (from=="Celsius" && to=="Kelvin"){
        result=input+273.15;
    }
    else if (from=="Kelvin" && to=="Fahrenheit"){
        result=((input-273.15)*(9/5))+32;
    }
    else if (from=="Kelvin" && to=="Celsius"){
        result=input-273.15;
    }else{
         result=input;
    }
    document.getElementById("result").value=result;

})