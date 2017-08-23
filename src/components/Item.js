import React from 'react';

export default class Item extends React.Component
{
    render() {

        let classCompleted = '';
        let checked        = '';

        if(this.props.item.completed)
        {
            classCompleted = 'completed';
            checked        = 'checked';
        }

        return (
            <li className={classCompleted} >
                <div className="view">
                    <input onChange={this.props.onChange} className="toggle" type="checkbox" checked={checked} />
                    <label>{this.props.item.name}</label>
                    <button className="destroy" onClick={this.props.onDestroy} ></button>
                </div>
                <input className="edit" defaultValue={this.props.item.name} />
            </li>
        );
    }
}
