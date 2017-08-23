import React from 'react';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import MainSection from './components/MainSection';


export default class App extends React.Component
{
    constructor(props) {

        super(props);

        this.state = {
            activeFilter : 'all',
            allCompleted : false,
            items : [
                { name : 'Do the edit a todo thing', completed : false },
                { name : 'Buy a unicorn', completed : false },
                { name : 'Learn React', completed : true },
                { name : 'And Justice for all', completed : false },
                { name : 'Make a single speed bike', completed : true },
            ],
            newItem : '',
        };
    }

    handleChangeNewItem(event) {
        this.setState({newItem : event.target.value});
    }

    addTodo(event) {

        if(event.keyCode !== 13)
            return true;

        event.preventDefault();

        if(this.state.newItem === '')
            return true;

        let items = this.state.items;
        items.push({name: this.state.newItem, completed : false});

        this.setState({items : items, newItem : ''});
    }

    clearCompleted() {

        let items = this.state.items.filter(function(element){
            return !element.completed;
        });

        this.setState({items : items});
    }

    toggleAllCompleted() {
        let items = this.state.items;

        items.forEach(function(item) {
            item.completed = !this.state.allCompleted;
        }, this);

        this.setState({allCompleted : !this.state.allCompleted, items : items});
    }

    toggleFilter(filterValue) {
        this.setState({activeFilter : filterValue});
    }

    toggleChange(key) {
        let items = this.state.items;
        items[key].completed = !items[key].completed;
        this.setState({items : items});
    }

    destroy(key) {
        let items = this.state.items;
        items.splice(key, 1);
        this.setState({items : items});
    }

    render() {

        let itemLeft = this.state.items.filter(function(element){
            return !element.completed;
        });

        let filteredItems = this.state.items.filter(function(element, index){

            //register position to use it and target the right elemnt on actions
            element.position = index;

            switch (this.state.activeFilter) {

            case 'active':
                return !element.completed;

            case 'completed':
                return element.completed;

            default:
                return true;
            }

        }, this);

        let rows = filteredItems.map(function(item){
            return (
                <Item
                    item={item}
                    onDestroy={this.destroy.bind(this, item.position)}
                    onChange={this.toggleChange.bind(this, item.position)}
                    key={item.position} />
            );
        }, this);

        return (
            <section className="todoapp" >
                <Header
                    onKeyDown={this.addTodo.bind(this)}
                    onChange={this.handleChangeNewItem.bind(this)}
                    className={'new-todo'}
                    placeholder={'What needs to be done ?'}
                    newValue={this.state.newItem} />
                <MainSection
                    onChange={this.toggleAllCompleted.bind(this)}
                    textMarkAllComplete={'Mark all as complete'}
                    items={rows} />
                <Footer
                    countAllItems={this.state.items.length}
                    countLeftItems={itemLeft.length}
                    activeFilter={this.state.activeFilter}
                    onClickAll={this.toggleFilter.bind(this, 'all')}
                    onClickActive={this.toggleFilter.bind(this, 'active')}
                    onClickCompleted={this.toggleFilter.bind(this, 'completed')}
                    onClickClearCompleted={this.clearCompleted.bind(this)} />
            </section>
        );
    }
}
