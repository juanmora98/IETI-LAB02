import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    render() {
        const todos = this.props.items;
        const listItems = todos.map((item) =>
          <Todo text={item.text} key={item.priority} date={item.dueDate}></Todo>
        );

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}
