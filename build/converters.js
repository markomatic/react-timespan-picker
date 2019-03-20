"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectToSeconds = exports.secondsToObject = void 0;

var secondsToObject = function secondsToObject(timeInSeconds) {
  var minutes = Math.floor(timeInSeconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  hours -= days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  var seconds = timeInSeconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

exports.secondsToObject = secondsToObject;

var objectToSeconds = function objectToSeconds(objectTime) {
  return objectTime.days * 24 * 60 * 60 + objectTime.hours * 60 * 60 + objectTime.minutes * 60 + objectTime.seconds;
};

exports.objectToSeconds = objectToSeconds;