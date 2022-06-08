import React, {Component} from 'react';
import { FormField, TextInput, Label } from "./StyledComponents";

class Field extends Component {

    render() {
        return (
            <FormField>
                <Label htmlFor={this.props.name}>{this.props.caption}</Label>
                <TextInput type={this.props.type} name={this.props.name} />
            </FormField>
        );
    }
}

export default Field;
