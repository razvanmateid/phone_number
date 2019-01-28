import React from "react";

import {storiesOf} from "@storybook/react";

import '../rrui.css'
import '../style.css'
import PhoneInput from '../index';

// material ui related
import TextField from '@material-ui/core/TextField';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf("MUI Phone Component", module)
    .add("Basic", () => (
        <PhoneInput
            onChange={_ => console.log('change')}
            inputComponent={TextField}
            displayInitialValueAsLocalNumber={true}
        />
    ));
