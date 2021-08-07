
class Calculator{
    constructor(curdis,predis)
    {
        this.curdis=curdis;
        this.predis=predis;
        this.clear();
    }
    clear()
    {
        this.curoprd=''
        this.preoprd=''
        this.opr=undefined;
    }
    allclear(){

    }
    appendopd(data){
        if(data==='.' && this.curoprd.includes('.')) return
        
        this.curoprd+=data;
    }
    updatedis(data){
        this.curdis.innerText=this.curoprd;
        this.predis.innerText=this.preoprd;
        oprator.textContent=this.opr;
    }
    delete()
    {
        this.curoprd=this.curoprd.toString().slice(0,-1);
    }
    equate(){
        let result;
        if(this.curoprd=='')
        return 
        if(this.preoprd!='')
        {
            this.curoprd=parseFloat(this.curoprd);
            this.preoprd=parseFloat(this.preoprd);
        switch(this.opr)
        {
            case '+':
                {
                    result=this.preoprd+this.curoprd;
                    break;
                }
            case '-':
                   {
                        result=this.preoprd-this.curoprd;
                        break;
                   }
            case '/':
                {
                    result=this.preoprd/this.curoprd;
                    break;
                }
            
            case '*':
                {
                    result=this.preoprd*this.curoprd;
                    break;
                }            
        }
        this.preoprd=this.curoprd;
        this.curoprd=result;
        this.opr=undefined;
        console.log(result);
        }
    }
    
    chooseopr(operation){
        this.opr=operation;
        this.preoprd=this.curoprd;
        this.curoprd='';
    }

}

var numbtn=document.querySelectorAll('.num');
var oprbtn=document.querySelectorAll(".opr");
var eqlbtn=document.querySelector(".eql");
var acbtn=document.querySelector(".ac");
var cbtn=document.querySelector(".c");
var curdis=document.querySelector(".new");
var predis=document.querySelector(".previous");
var oprator=document.querySelector(".oprator");
var creditbtn=document.querySelector(".credit");
creditbtn.addEventListener('click',()=>{
    document.querySelector(".display").innerHTML=`<div class="flex inline bg-green-500">
    <div class="previous flex items-end" style=" font-family: 'Orbitron', sans-serif; font-size: medium; padding-right: 5px; ">
        <img style="width:100px;height:100px;" class="mr-5" src="https://www.animatedimages.org/data/media/202/animated-dog-image-0048.gif"/>
    </div>

    <div class="oprator flex justify-end pr-28" style=" font-family: 'Orbitron', sans-serif; font-size: medium; padding-right: 5px;height:120px; margin-left:90px"><img " src="https://c.tenor.com/INtDIEtFM3MAAAAj/independence-day-india-gifs.gif"/></div>
</div>

<div class="new flex justify-center   pr-3 " style=" font-family: 'Orbitron', sans-serif; font-size: large;">
made by Abhishek jha
</div>`
})
const calc=new Calculator(curdis,predis);
numbtn.forEach(btn => {
    btn.addEventListener("click",()=>{
     
      calc.appendopd(btn.innerText);
      calc.updatedis();
    })
})
oprbtn.forEach(btn => {
    btn.addEventListener("click",()=>{
     
      calc.chooseopr(btn.innerText);
      calc.updatedis();
    })
})
eqlbtn.addEventListener('click',()=>{
    calc.equate();
    calc.updatedis();
})
acbtn.addEventListener("click",()=>{
    calc.clear();
    calc.updatedis();
})
cbtn.addEventListener("click",()=>{
    calc.delete();
    calc.updatedis();
})