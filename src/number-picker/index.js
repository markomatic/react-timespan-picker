import React, {
    Component
} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import map from 'lodash/map';
import range from 'lodash/range';
import PropTypes from 'prop-types';

class NumberPicker extends Component {
    handleSelectorChange = event => this.props.onChange(+event.target.value);

    render() {
        const {
            label,
            value,
            max
        } = this.props;

        const numberOptions = range(0, max);

        return (
            <FormControl className="NumberPicker">
                <InputLabel>{label}</InputLabel>
                <NativeSelect value={value}
                        onChange={this.handleSelectorChange}>
                    {map(numberOptions, item =>
                        <option key={item}
                                  value={item}>
                            {`${item}`}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>
        );
    }
}

NumberPicker.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    max: PropTypes.number.isRequired
};

export default NumberPicker;
