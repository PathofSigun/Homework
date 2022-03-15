let welcomeName = prompt("Adınız Nedir?");

let welcomeText = document.querySelector("#myName");

welcomeText.innerHTML = welcomeName

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    const gunler = ["Pazar","Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const d = new Date ();
    let gun = gunler[d.getDay()]
    

    document.getElementById("myClock").innerHTML = `${h}:${m}:${s} ${gun}`;
    setInterval(showTime, 1000);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

showTime();
