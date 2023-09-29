var num = prompt("Enter a number please");
var is_prime = true;
var primeNumber = "";
for(let j=2; j<= num; j++){
    is_prime = true;
    for(let i=2; i< j; i ++){
        if(j % i === 0){
            is_prime = false;
        } 
    }
     if(is_prime)  
        primeNumber += `${j} , `;
} 
alert(primeNumber)

