import React, {Component} from 'react';
import { FormField, TextInput, Label } from "./StyledComponents";

class Field extends Component {
    change = (evt) => {
        const val = evt.target.value;
        // ... validation ...
        this.props.update(this.props.name, val);
    }

    render() {
        return (
            <FormField>
                <Label htmlFor={this.props.name}>{this.props.caption}</Label>
                <TextInput
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.change}
                />
            </FormField>
        );
    }
}

export default Field;
