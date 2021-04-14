
var bal;


function getBalance(){
    bal = document.getElementById('Balance').value;
}

var doc = document.getElementsByClassName('operations');
var operations = doc.innerHTML;

console.log(bal);

document.getElementById('Balance').innerHTML = bal;
console.log(bal);

var price = document.getElementById('operationPrice');
var pri = price.value;
console.log(pri);
if(operations == 'c' && bal>0){
    bal = bal-pri;
    console.log(bal + 'sdshfhs');
}

console.log(bal);
