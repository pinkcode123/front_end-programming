document.getElementById('popup').onclick=function() {
    let review=document.getElementById('show');
    review.style. display='flex';
    document.getElementById('hid').onclick=function(){
        review.style.display='none';
        let sub = document.getElementById('show2');
        sub.style.display='flex';
        document.getElementById('hid2').onclick=function(){
            sub.style.display='none';
            
        
        }

    }
    
    
}

document.getElementById('surpop').onclick=function() {
    let sub=document.getElementById('show2');
    sub.style. display='flex';
    document.getElementById('hid2').onclick=function(){
        sub.style.display='none';
        let review= document.getElementById('show');
        review.style.display='flex';
        document.getElementById('hid').onclick=function(){
            review.style.display='none';
            
        
        }

    }
    
    
}

