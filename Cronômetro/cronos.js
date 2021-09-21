window.onload = function () {

    var seconds = 00;
    var tens = 00;

    var pegaTens = document.getElementById("tens");
    var pegaSec = document.getElementById("seconds");
    var pegaInic = document.getElementById('button-start');
    var pegaPara = document.getElementById('button-stop');
    var pegaRese = document.getElementById('button-reset');
    var Interval;
    pegaInic.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    pegaPara.onclick = function () {
        clearInterval(Interval);
    }
    pegaRese.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        tens = "00";
        pegaTens.innerHTML = tens;
        pegaSec.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if(tens <= 9) {
            pegaTens.innerHTML = "0" + tens;
         }
        if(tens > 9) {
            pegaTens.innerHTML = tens;
        }
        if(tens > 99) {
            console.log("seconds");
            seconds++;
            pegaSec.innerHTML = "0" + seconds;
            tens = 0;
            pegaTens.innerHTML = "0" +  0;
        }
        if(seconds > 9) {
            pegaSec.innerHTML = seconds;
        }
    }

}