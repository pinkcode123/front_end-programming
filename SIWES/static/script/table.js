

document.getElementById("submit").onclick=function(){
    let product = document.getElementById("opt").value;
    let costprice = document.getElementById("cp").textContent;
    let costprice2 = document.getElementById("cp2").textContent;
    let costprice3 = document.getElementById("cp3").textContent;
    let costprice4 = document.getElementById("cp4").textContent;
    let costprice5 = document.getElementById("cp5").textContent;
    let Quantity =parseInt(document.getElementById('txt').value);
    let sellingprice =parseInt(document.getElementById("sp").textContent);
    let sellingprice2 =parseInt(document.getElementById("sp2").textContent);
    let sellingprice3 =parseInt(document.getElementById("sp3").textContent);
    let sellingprice4 =parseInt(document.getElementById("sp4").textContent);
    let sellingprice5 =parseInt(document.getElementById("sp5").textContent);
   
    if (product=="Products1"){
       let Amount =sellingprice*Quantity;
        document.getElementById("display").textContent=Amount
        
    }
    else if (product=="Products2"){
        let Amount=sellingprice4*Quantity;
         document.getElementById("display").textContent=Amount
         
     }
    else if(product=="Products3"){
        let Amount =sellingprice2*Quantity;
         document.getElementById("display").textContent=Amount
         
     }
    else if(product=="Products4"){
        let Amount =sellingprice3*Quantity;
         document.getElementById("display").textContent=Amount
         
     }
    else if(product=="Products5"){
        let Amount =sellingprice5*Quantity;
         document.getElementById("display").textContent=Amount
         
     }
     else{
        inva="invalid product"
        document.getElementById("display").textContent= inva
     }

    }
    
    // for row 2
    document.getElementById("submit2").onclick=function(){
    let product = document.getElementById("opt2").value;
    let Quantity2 =parseInt(document.getElementById('txt2').value);
    let sellingprice =parseInt(document.getElementById("sp").textContent);
    let sellingprice2 =parseInt(document.getElementById("sp2").textContent);
    let sellingprice3 =parseInt(document.getElementById("sp3").textContent);
    let sellingprice4 =parseInt(document.getElementById("sp4").textContent);
    let sellingprice5 =parseInt(document.getElementById("sp5").textContent);
   
    if (product=="Products1"){
       let Amount =sellingprice*Quantity2;
        document.getElementById("display2").textContent=Amount
        
    }
    else if (product=="Products2"){
        let Amount=sellingprice4*Quantity2;
         document.getElementById("display2").textContent=Amount
         
     }
    else if(product=="Products3"){
        let Amount =sellingprice2*Quantity2;
         document.getElementById("display2").textContent=Amount
         
     }
    else if(product=="Products4"){
        let Amount =sellingprice3*Quantity2;
         document.getElementById("display2").textContent=Amount
         
     }
    else if(product=="Products5"){
        let Amount =sellingprice5*Quantity2;
         document.getElementById("display2").textContent=Amount
         
     } 
     else{
        inva="invalid product"
        document.getElementById("display2").textContent= inva
     }
        }
//row 3
document.getElementById("submit3").onclick=function(){
    let product = document.getElementById("opt3").value;
    let costprice = document.getElementById("cp").textContent;
    let costprice2 = document.getElementById("cp2").textContent;
    let costprice3 = document.getElementById("cp3").textContent;
    let costprice4 = document.getElementById("cp4").textContent;
    let costprice5 = document.getElementById("cp5").textContent;
    let Quantity3 =parseInt(document.getElementById('txt3').value);
    let sellingprice =parseInt(document.getElementById("sp").textContent);
    let sellingprice2 =parseInt(document.getElementById("sp2").textContent);
    let sellingprice3 =parseInt(document.getElementById("sp3").textContent);
    let sellingprice4 =parseInt(document.getElementById("sp4").textContent);
    let sellingprice5 =parseInt(document.getElementById("sp5").textContent);
    
    if (product=="Products1"){
        let Amount =sellingprice*Quantity3;
        document.getElementById("display3").textContent=Amount
        
    }
    else if (product=="Products2"){
        let Amount=sellingprice4*Quantity3;
            document.getElementById("display3").textContent=Amount
            
        }
    else if(product=="Products3"){
        let Amount =sellingprice2*Quantity3;
            document.getElementById("display3").textContent=Amount
            
        }
    else if(product=="Products4"){
        let Amount =sellingprice3*Quantity3;
            document.getElementById("display3").textContent=Amount
            
        }
    else if(product=="Products5"){
        let Amount =sellingprice5*Quantity3;
            document.getElementById("display3").textContent=Amount
            
        }
        else{
        inva="invalid product"
        document.getElementById("display3").textContent= inva
        }
        }
        //row 4
document.getElementById("submit4").onclick=function(){
    let product = document.getElementById("opt4").value;
    let costprice = document.getElementById("cp").textContent;
    let costprice2 = document.getElementById("cp2").textContent;
    let costprice3 = document.getElementById("cp3").textContent;
    let costprice4 = document.getElementById("cp4").textContent;
    let costprice5 = document.getElementById("cp5").textContent;
    let Quantity3 =parseInt(document.getElementById('txt4').value);
    let sellingprice =parseInt(document.getElementById("sp").textContent);
    let sellingprice2 =parseInt(document.getElementById("sp2").textContent);
    let sellingprice3 =parseInt(document.getElementById("sp3").textContent);
    let sellingprice4 =parseInt(document.getElementById("sp4").textContent);
    let sellingprice5 =parseInt(document.getElementById("sp5").textContent);
    
    if (product=="Products1"){
        let Amount =sellingprice*Quantity3;
        document.getElementById("display4").textContent=Amount
        
    }
    else if (product=="Products2"){
        let Amount=sellingprice4*Quantity3;
            document.getElementById("display4").textContent=Amount
            
        }
    else if(product=="Products3"){
        let Amount =sellingprice2*Quantity3;
            document.getElementById("display4").textContent=Amount
            
        }
    else if(product=="Products4"){
        let Amount =sellingprice3*Quantity3;
            document.getElementById("display4").textContent=Amount
            
        }
    else if(product=="Products5"){
        let Amount =sellingprice5*Quantity3;
            document.getElementById("display4").textContent=Amount
            
        }
        else{
        inva="invalid product"
        document.getElementById("display4").textContent= inva
        }
        }
//row 3
    document.getElementById("submit5").onclick=function(){
        let product = document.getElementById("opt5").value;
        let costprice = document.getElementById("cp").textContent;
        let costprice2 = document.getElementById("cp2").textContent;
        let costprice3 = document.getElementById("cp3").textContent;
        let costprice4 = document.getElementById("cp4").textContent;
        let costprice5 = document.getElementById("cp5").textContent;
        let Quantity3 =parseInt(document.getElementById('txt5').value);
        let sellingprice =parseInt(document.getElementById("sp").textContent);
        let sellingprice2 =parseInt(document.getElementById("sp2").textContent);
        let sellingprice3 =parseInt(document.getElementById("sp3").textContent);
        let sellingprice4 =parseInt(document.getElementById("sp4").textContent);
        let sellingprice5 =parseInt(document.getElementById("sp5").textContent);
    
    if (product=="Products1"){
        let Amount =sellingprice*Quantity3;
        document.getElementById("display5").textContent=Amount
        
    }
    else if (product=="Products2"){
        let Amount=sellingprice4*Quantity3;
            document.getElementById("display5").textContent=Amount
            
        }
    else if(product=="Products3"){
        let Amount =sellingprice2*Quantity3;
            document.getElementById("display5").textContent=Amount
            
        }
    else if(product=="Products4"){
        let Amount =sellingprice3*Quantity3;
            document.getElementById("display5").textContent=Amount
            
        }
    else if(product=="Products5"){
        let Amount =sellingprice5*Quantity3;
            document.getElementById("display5").textContent=Amount
            
        }
        else{
        inva="invalid product"
        document.getElementById("display5").textContent= inva
        }
    



}
document.getElementById("total").onclick=function(){
    dis1=parseInt(display.textContent);
    dis2=parseInt(display2.textContent);
    dis3=parseInt(display3.textContent);
    dis4=parseInt(display4.textContent);
    dis5=parseInt(display5.textContent);
    total= dis1+dis2+dis3+dis4+dis5
    document.getElementById("prx").textContent= total
    
}
document.getElementById("CHECKPT").onclick=function(){
    chk1=parseInt(sp.textContent)-parseInt(cp.textContent);
    chk2=parseInt(sp2.textContent)-parseInt(cp2.textContent);
    chk3=parseInt(sp3.textContent)-parseInt(cp3.textContent);
    chk4=parseInt(sp4.textContent)-parseInt(cp4.textContent);
    chk5=parseInt(sp5.textContent)-parseInt(cp5.textContent);
    qua1=parseInt(txt.value);
    qua2=parseInt(txt2.value);
    qua3=parseInt(txt3.value);
    qua4=parseInt(txt4.value);
    qua5=parseInt(txt5.value);
    profit1=parseInt(dis1-(chk1*qua1));
    profit2=parseInt(dis2-(chk2*qua2));
    profit3=parseInt(dis3-(chk3*qua3));
    profit4=parseInt(dis4-(chk4*qua4));
    profit5=parseInt(dis5-(chk5*qua5));
    let profit=parseInt(profit1+profit2+profit3+profit4+profit5)
    document.getElementById("prz").textContent=profit
   

    
    
}
