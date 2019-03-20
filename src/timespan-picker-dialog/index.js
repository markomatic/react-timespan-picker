import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Edit from '@material-ui/icons/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import TimespanPicker from '../timespan-picker';
import {secondsToObject} from '../converters';

const timeInSecondsToTimeString = timeInSeconds => {
    const {
        days,
        hours,
        minutes,
        seconds
    } = secondsToObject(timeInSeconds);
    return days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';
};

class TimespanPickerDialog extends Component {
    state = {
        open: false,
        value: 0
    };

    handleClickOpen = () => this.setState({open: true});

    handleCancel = () => this.setState({
        open: false,
        value: this.props.value
    });

    handleOk = () => {
        this.props.onChange(this.state.value);
        this.setState({open: false});
    };

    handleTimeInSecondsChange = value => this.setState({value});

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    componentDidUpdate(prevProps) {
        prevProps.value !== this.props.value && this.setState({value: this.props.value});
    }

    render() {
        const {
            title
        } = this.props;

        const {
            open,
            value
        } = this.state;

        const formattedTime = timeInSecondsToTimeString(this.props.value);

        return (
            <div className="TimespanPickerDialogInput">
                <FormControl fullWidth={true}>
                    <InputLabel>{title}</InputLabel>
                    <Input fullWidth={true}
                        value={formattedTime}
                        onClick={this.handleClickOpen}
                        readOnly
                        endAdornment={
                            <InputAdornment position="end">
                                <Icon>
                                    <Edit/>
                                </Icon>
                            </InputAdornment>
                        }/>
                </FormControl>
                <Dialog className="TimespanPickerDialog"
                        open={open}
                        PaperProps={{className: 'TimespanPickerDialog-body'}}>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        <TimespanPicker value={value}
                                        onChange={this.handleTimeInSecondsChange}>
                        </TimespanPicker>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCancel}
                                color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleOk}
                                color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

TimespanPickerDialog.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default TimespanPickerDialog;
