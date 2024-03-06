function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valuemulti = document.getElementById("multi").value;
    let valueRES = (valueF01+valueF02) * valuemulti;
    let valuetole = document.getElementById("tole").value;
    let valuetole1 = valueRES-valuetole;
    let valuetole2 = valueRES+valuetole;
    valuetole = (valuetole1 + "e" + valuetole2)
    alert(valuetole1 +"e" + valuetole2)
    alert(valueRES);
    document.getElementById("result").value = valueRES;
    document.getElementById("result2").value=valuetole;                                                                                   
   
} 