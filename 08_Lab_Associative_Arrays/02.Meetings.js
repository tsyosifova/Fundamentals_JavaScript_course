function meetingsData(arr) {
    let meetings = {};

    for (let entry of arr) {
        let [weekday, name] = entry.split(' ');

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}

meetingsData(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);