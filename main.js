// CLOCK
const hour = document.getElementById('clock-hour')
const minutes = document.getElementById('clock-minutes')
const seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()
    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() *6

    // add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}

setInterval(clock, 1000) //1000 = 1s

// CLOCK & DATE TEXT
const textHour = document.getElementById('text-hour')
const textMinutes = document.getElementById('text-minutes')
const textAmPm = document.getElementById('text-ampm')
const dateDay = document.getElementById('date-day')
const dateMonth = document.getElementById('date-month')
const dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()
    let hh = date.getHours(),
        ampm, 
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

//change the hours from 24 to 12 hours and establish whether it is AM or PM
if(hh>=12){
    hh = hh - 12
    ampm = 'PM'
} else{
    ampm = 'AM'
}

// detect when it's 0AM and transform to 12 AM
if(hh == 0){
    hh= 12
}

//Show a zero before hours
if(hh < 10){hh = `0${hh}`}

// Show time
textHour.innerHTML = `${hh}:`

// Szhow a zero before the minutes
if(mm < 10){mm = `0${mm}`}

// Show minutes
textMinutes.innerHTML = mm

// Show am or pm
textAmPm.innerHTML = ampm

// get the months of the year and show it
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// get show the day, the month and the year
dateDay.innerHTML = day
dateMonth.innerHTML = `${months[month]},`
dateYear.innerHTML = year
}

setInterval(clockText, 1000) //1000 = 1s

// DARK/LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// previously selection topic (ifuser selected)
const selectedTheme = localStorage.getItem('selested-theme')
const selectedIcon = localStorage.getItem('selested-icon')

// obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// validate if the user previously chose a topic
if(selectedTheme){
// If the validation is fulfilled, we ask what the issue was to know if we activetion
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})