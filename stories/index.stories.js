import React from "react";

import { storiesOf } from "@storybook/react";

import '../rrui.css'
import '../style.css'
import PhoneInput from '../index';

storiesOf("Phone Component", module)
    .add("with text", () => (
        <PhoneInput onChange={_ => console.log('change')}/>
    ));