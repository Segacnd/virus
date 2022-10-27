
   
// ПОИСК IP
async function currentIp () { 
    const ip =  await fetch("https://api.ipify.org/?format=json")
        .then(response => response.json())
        .then(result =>  result.ip)
    finderIP(ip)
}

const message = document.querySelector('.virusMessage')

// ИНФА ПО IP
async function finderIP(ip) { 
    dataresult = await fetch(`https://ipinfo.io/${ip}?token=08dd2bd392ee83`).then(
      (response) => response.json()
    ).then(
      (jsonResponse) => jsonResponse )
      console.log(dataresult)
      virusMessage(dataresult)      
}

function virusMessage (dataresult) {
     message.innerText = `ВНИМАНИЕ ВАС ВЗЛОМАЛИ 


     ВАШ IP ${dataresult.ip}, ВЫ ЖИВЕТЕ В ${dataresult.city}, ${dataresult.region}
     ВАШЕ МЕСТОПОЛОЖЕНИЕ ${dataresult.loc}
     ПЕРЕВЕДИТЕ ДЕНЬГИ НА СЧЕТ 1488 2288 0000 0161 ИЛИ НА ВАС УПАДЕТ РАКЕТА `

}


const dialog = document.querySelector('dialog');
   document.querySelector('.open').onclick = () => {
    dialog.show(); // Показываем диалоговое окно
    currentIp()
   }


// document.querySelector('.open').addEventListener('click', currentIp);



function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      let t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000); 
  initializeClock('countdown', deadline);