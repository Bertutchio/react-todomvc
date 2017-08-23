import React from 'react';

export default class MainSection extends React.Component
{
    render() {
        return(
            <section className="main">
                <input onChange={this.props.onChange} id="toggle-all" className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">{this.props.textMarkAllComplete}</label>
                <ul className="todo-list">
                    {this.props.items}
                </ul>
            </section>
        );
    }

}
