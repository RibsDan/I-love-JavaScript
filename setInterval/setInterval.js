let counter = 0;

let test = setInterval(function(){
    console.log('God is good!')
    counter++;

   if(counter === 5) {
        clearInterval(test);
    };
},1000);