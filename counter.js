 const days    = document.getElementById('days');
 const hours   = document.getElementById('hours');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');

const newMonth = '1 Jan 2022' ;

function CounterTimer () {
    const nextMonth = new Date(newMonth)
    const currenDate = new Date()
     const totalSeconds = (nextMonth - currenDate) / 1000 ;

    const daysLeft = Math.floor(totalSeconds / (60*60*24)) ;
    const hoursLeft = Math.floor(totalSeconds/ (60 *60)) % 24 ;
    const minLeft = Math.floor(totalSeconds / 60) % 60 ;
    const secondsLeft = Math.floor(totalSeconds) % 60 ;
    
    days.innerHTML = daysLeft
    hours.innerHTML = hoursLeft
    minutes.innerHTML = formatTime(minLeft)
    seconds.innerHTML = formatTime(secondsLeft)
}

function formatTime (time) {
    return (time < 10) ? `0${time}` : time
}

CounterTimer()

setInterval(CounterTimer, 1000)