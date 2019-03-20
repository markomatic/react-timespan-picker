"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions/DialogActions"));

var _timespanPicker = _interopRequireDefault(require("../timespan-picker"));

var _converters = require("../converters");

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

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

var timeInSecondsToTimeString = function timeInSecondsToTimeString(timeInSeconds) {
  var _secondsToObject = (0, _converters.secondsToObject)(timeInSeconds),
      days = _secondsToObject.days,
      hours = _secondsToObject.hours,
      minutes = _secondsToObject.minutes,
      seconds = _secondsToObject.seconds;

  return days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';
};

var TimespanPickerDialog =
/*#__PURE__*/
function (_Component) {
  _inherits(TimespanPickerDialog, _Component);

  function TimespanPickerDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimespanPickerDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimespanPickerDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false,
      value: 0
    };

    _this.handleClickOpen = function () {
      return _this.setState({
        open: true
      });
    };

    _this.handleCancel = function () {
      return _this.setState({
        open: false,
        value: _this.props.value
      });
    };

    _this.handleOk = function () {
      _this.props.onChange(_this.state.value);

      _this.setState({
        open: false
      });
    };

    _this.handleTimeInSecondsChange = function (value) {
      return _this.setState({
        value: value
      });
    };

    return _this;
  }

  _createClass(TimespanPickerDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      prevProps.value !== this.props.value && this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var _this$state = this.state,
          open = _this$state.open,
          value = _this$state.value;
      var formattedTime = timeInSecondsToTimeString(this.props.value);
      return _react.default.createElement("div", {
        className: "TimespanPickerDialogInput"
      }, _react.default.createElement(_FormControl.default, {
        fullWidth: true
      }, _react.default.createElement(_InputLabel.default, null, title), _react.default.createElement(_Input.default, {
        fullWidth: true,
        value: formattedTime,
        onClick: this.handleClickOpen,
        readOnly: true,
        endAdornment: _react.default.createElement(_InputAdornment.default, {
          position: "end"
        }, _react.default.createElement(_Icon.default, null, _react.default.createElement(_Edit.default, null)))
      })), _react.default.createElement(_Dialog.default, {
        className: "TimespanPickerDialog",
        open: open,
        PaperProps: {
          className: 'TimespanPickerDialog-body'
        }
      }, _react.default.createElement(_DialogTitle.default, null, title), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_timespanPicker.default, {
        value: value,
        onChange: this.handleTimeInSecondsChange
      })), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        onClick: this.handleCancel,
        color: "primary"
      }, "Cancel"), _react.default.createElement(_Button.default, {
        onClick: this.handleOk,
        color: "primary"
      }, "Ok"))));
    }
  }]);

  return TimespanPickerDialog;
}(_react.Component);

TimespanPickerDialog.propTypes = {
  value: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired,
  title: _propTypes.default.string
};
var _default = TimespanPickerDialog;
exports.default = _default;