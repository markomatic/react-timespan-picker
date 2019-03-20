"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _numberPicker = _interopRequireDefault(require("../number-picker"));

var _converters = require("../converters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimespanPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimespanPicker, _Component);

  function TimespanPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimespanPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimespanPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleDaysChange = function (days) {
      var _secondsToObject = (0, _converters.secondsToObject)(_this.props.value),
          hours = _secondsToObject.hours,
          minutes = _secondsToObject.minutes,
          seconds = _secondsToObject.seconds;

      var timeInSeconds = (0, _converters.objectToSeconds)({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      _this.props.onChange(timeInSeconds);
    };

    _this.handleHoursChange = function (hours) {
      var _secondsToObject2 = (0, _converters.secondsToObject)(_this.props.value),
          days = _secondsToObject2.days,
          minutes = _secondsToObject2.minutes,
          seconds = _secondsToObject2.seconds;

      var timeInSeconds = (0, _converters.objectToSeconds)({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      _this.props.onChange(timeInSeconds);
    };

    _this.handleMinutesChange = function (minutes) {
      var _secondsToObject3 = (0, _converters.secondsToObject)(_this.props.value),
          days = _secondsToObject3.days,
          hours = _secondsToObject3.hours,
          seconds = _secondsToObject3.seconds;

      var timeInSeconds = (0, _converters.objectToSeconds)({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      _this.props.onChange(timeInSeconds);
    };

    _this.handleSecondsChange = function (seconds) {
      var _secondsToObject4 = (0, _converters.secondsToObject)(_this.props.value),
          days = _secondsToObject4.days,
          hours = _secondsToObject4.hours,
          minutes = _secondsToObject4.minutes;

      var timeInSeconds = (0, _converters.objectToSeconds)({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      _this.props.onChange(timeInSeconds);
    };

    return _this;
  }

  _createClass(TimespanPicker, [{
    key: "render",
    value: function render() {
      var value = this.props.value;

      var _secondsToObject5 = (0, _converters.secondsToObject)(value),
          days = _secondsToObject5.days,
          hours = _secondsToObject5.hours,
          minutes = _secondsToObject5.minutes,
          seconds = _secondsToObject5.seconds;

      return _react.default.createElement("div", null, _react.default.createElement(_numberPicker.default, {
        value: days,
        onChange: this.handleDaysChange,
        label: "Days",
        max: 31
      }), _react.default.createElement(_numberPicker.default, {
        value: hours,
        onChange: this.handleHoursChange,
        label: "Hours",
        max: 24
      }), _react.default.createElement(_numberPicker.default, {
        value: minutes,
        onChange: this.handleMinutesChange,
        label: "Minutes",
        max: 60
      }), _react.default.createElement(_numberPicker.default, {
        value: seconds,
        onChange: this.handleSecondsChange,
        label: "Seconds",
        max: 60
      }));
    }
  }]);

  return TimespanPicker;
}(_react.Component);

TimespanPicker.propTypes = {
  value: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = TimespanPicker;
exports.default = _default;