let alarmTime = null;
let alarmTimeout = null;

function setAlarm() {
    const input = document.getElementById('alarm-time');
    const time = input.value;
    if (!time) {
        alert('Iltimos, vaqtni tanlang!');
        return;
    }

    const currentTime = new Date();
    const [hours, minutes] = time.split(':');
    const alarmDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hours, minutes, 0, 0);

    if (alarmDate < currentTime) {
        alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - currentTime;

    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
    }

    alarmTimeout = setTimeout(() => {
        alert('Budilnik vaqti keldi!');
        const audio = document.getElementById('alarm-audio');
        audio.play();
    }, timeToAlarm);

    alert(`Budilnik o'rnatildi: ${alarmDate}`);
}

