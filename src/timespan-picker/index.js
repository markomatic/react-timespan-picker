import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import NumberPicker from '../number-picker';
import {
    objectToSeconds,
    secondsToObject
} from '../converters';

class TimespanPicker extends Component {
    handleDaysChange = days => {
        const {
            hours,
            minutes,
            seconds
        } = secondsToObject(this.props.value);
        const timeInSeconds = objectToSeconds({
            days,
            hours,
            minutes,
            seconds
        });
        this.props.onChange(timeInSeconds);
    };

    handleHoursChange = hours => {
        const {
            days,
            minutes,
            seconds
        } = secondsToObject(this.props.value);
        const timeInSeconds = objectToSeconds({
            days,
            hours,
            minutes,
            seconds
        });
        this.props.onChange(timeInSeconds);
    };

    handleMinutesChange = minutes => {
        const {
            days,
            hours,
            seconds
        } = secondsToObject(this.props.value);
        const timeInSeconds = objectToSeconds({
            days,
            hours,
            minutes,
            seconds
        });
        this.props.onChange(timeInSeconds);
    };

    handleSecondsChange = seconds => {
        const {
            days,
            hours,
            minutes
        } = secondsToObject(this.props.value);
        const timeInSeconds = objectToSeconds({
            days,
            hours,
            minutes,
            seconds
        });
        this.props.onChange(timeInSeconds);
    };

    render() {
        const {
            value
        } = this.props;

        const {
            days,
            hours,
            minutes,
            seconds
        } = secondsToObject(value);

        return (
            <div>
                <NumberPicker value={days}
                              onChange={this.handleDaysChange}
                              label="Days"
                              max={31}>
                </NumberPicker>
                <NumberPicker value={hours}
                              onChange={this.handleHoursChange}
                              label="Hours"
                              max={24}>
                </NumberPicker>
                <NumberPicker value={minutes}
                              onChange={this.handleMinutesChange}
                              label="Minutes"
                              max={60}>
                </NumberPicker>
                <NumberPicker value={seconds}
                              onChange={this.handleSecondsChange}
                              label="Seconds"
                              max={60}>
                </NumberPicker>
            </div>

        );
    }
}

TimespanPicker.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TimespanPicker;
