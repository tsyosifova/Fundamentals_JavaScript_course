function requiredReading(allPages, pagesPerHour, allDays) {
    let allHours = allPages / pagesPerHour;
    let hoursPerDay = allHours / allDays;

    console.log(hoursPerDay);

}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);