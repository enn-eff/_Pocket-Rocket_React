import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class GroupedButtons extends React.Component {
    state = { counter: 0 };
    handleIncrement = () => {
        if(this.state.counter < this.props.limit){
            this.setState((state) => ({ counter: state.counter + 1 }), () => {
                this.props.handleQuantity(this.state.counter)
            });
        }
    };

    handleDecrement = () => {
        if((this.state.counter - 1) >=0){
            this.setState((state) => ({ counter: state.counter - 1 }), () => {
                this.props.handleQuantity(this.state.counter)
            });
        }
    };
    render() {
        const displayCounter = this.state.counter > 0;

        return (
            <ButtonGroup size='small' aria-label='small outlined button group'>
                <Button onClick={this.handleIncrement}>+</Button>
                {displayCounter && (
                    <Button disabled>{this.state.counter}</Button>
                )}
                {displayCounter && (
                    <Button onClick={this.handleDecrement}>-</Button>
                )}
            </ButtonGroup>
        );
    }
}

export default GroupedButtons;
