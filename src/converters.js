export const secondsToObject = timeInSeconds => {
    let minutes = Math.floor(timeInSeconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours -= days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    const seconds = timeInSeconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return {
        days,
        hours,
        minutes,
        seconds
    };
};

export const objectToSeconds = objectTime => {
    return objectTime.days * 24 * 60 * 60 + objectTime.hours * 60 * 60 + objectTime.minutes * 60 + objectTime.seconds;
};
