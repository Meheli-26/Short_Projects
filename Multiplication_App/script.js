function multiplication(){
    var num1=parseInt(document.getElementById("prothom").value);
    var num2=parseInt(document.getElementById("ditiyo").value);
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
      }
      else{
    var ans = num1*num2;
    document.getElementById("result").innerText = "Result = "+ans;
      }
    

}
document.getElementById("mul").addEventListener("click",multiplication);
