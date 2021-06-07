import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

const DatePicker = ({ name, label, value, onChangeHandler }) => {
  const convertEvent = (name, value) => ({ target: { name, value } });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        format="MM/dd/yyyy"
        name={name}
        label={label}
        value={value}
        onChange={(date) => onChangeHandler(convertEvent(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
