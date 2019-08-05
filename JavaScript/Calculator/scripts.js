var num1 = document.getElementById('numField1');
var num2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var Solution = document.getElementById('Solution');
var resultWay = document.getElementById('resultWay');
var form= document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit',function(event){
    
    if(!num1.value || !num2.value)
        alert("You forgot to enter numbers")
    else{
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        var result = x/y;
        var percent=(result*100).toFixed(2);
        resultField.innerHTML="Answer: "+ percent +"%";
        Solution.innerHTML= resultWay(x,y);
        randomizePic(result);
        event.preventDefault();
        
        
        
    }
    
    function resultWay(x,y){
        return '1. You begin with dividing ' + x +' with '+y+" = "+(x/y).toFixed(2) + '<br> 2. Next, multiply the result by 100 = ' + (x/y).toFixed(2)*100+'<br> 3. just add the symbol: '+(x/y).toFixed(2)*100+'%';
        
    }
    
    function randomizePic(result){
        var folder = 'Cats';
        var animal ='cat';
        if  (result*100 > 50){
            folder = 'Dogs';            
            animal = 'dog';
        }
        var number = Math.floor((Math.random() * 4) + 1);

        var img = ' <img src=Pictures/'+folder+'/'+animal+number+'.jpg>';
        var doc = document.getElementById('imageContainer');
        doc.innerHTML = '';
        doc.innerHTML += img;
            
    }
      
})