
import React from 'react';

export default class Header extends React.Component
{
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    value={this.props.newValue}
                    onKeyDown={this.props.onKeyDown}
                    onChange={this.props.onChange}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    autoFocus />
            </header>
        );
    }
}
