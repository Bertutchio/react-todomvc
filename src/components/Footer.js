import React from 'react';

export default class Footer extends React.Component
{
    render() {

        let button = '';
        let classAll = '';
        let classActive = '';
        let classCompleted = '';

        if(this.props.activeFilter === 'active')
            classActive = 'selected';
        else if(this.props.activeFilter === 'completed')
            classCompleted = 'selected';
        else
            classAll = 'selected';

        if(this.props.countLeftItems !== this.props.countAllItems)
            button = <button onClick={this.props.onClickClearCompleted} className="clear-completed">Clear completed</button>;

        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.countLeftItems}</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a onClick={this.props.onClickAll} className={classAll} href="#/">All</a>
                    </li>
                    <li>
                        <a onClick={this.props.onClickActive} className={classActive} href="#/active">Active</a>
                    </li>
                    <li>
                        <a onClick={this.props.onClickCompleted} className={classCompleted} href="#/completed">Completed</a>
                    </li>
                </ul>
                {button}

            </footer>
        );
    }
}
