const today = new Date();
const hour = today.getUTCHours();
const minute = today.getUTCMinutes();
const dayCode = today.getDay();

const time = `${hour}:${minute < 10 ? 0 : ''}${minute}`;
const day = getDay();


function getDay() {
    switch(dayCode) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';

        default: return 'Everyday Italawa'
    }
}

document.querySelector('.time').textContent += time;
document.querySelector('.day').textContent += day;
