import React from "react";

import {storiesOf} from "@storybook/react";

import '../rrui.css'
import '../style.css'
import PhoneInput from '../index';

// material ui related
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf("Phone Component", module)
    .add("with text", () => (
        <MuiThemeProvider>
            <PhoneInput
                onChange={_ => console.log('change')}
                inputComponent={TextField}
            />
        </MuiThemeProvider>
    ));