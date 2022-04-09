import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatesPicker = ({ chosenDate, setChosenDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Chose a date for pic of the day"
        value={chosenDate}
        onChange={(newValue) => {
          setChosenDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        maxDate={new Date()} //maxDate
      />
    </LocalizationProvider>
  );
};

export default DatesPicker;
