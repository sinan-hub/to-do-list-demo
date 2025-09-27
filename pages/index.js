/* I want to create a To Do List
- add items to the To Do List
- delete items to the To Do List */

import React, { useState } from 'react';
import Head from 'next/head';
import link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
// create a state for To Do List items with deafult items like: learn react.js , learn next.js, learn copilot
  const [TodoList,setToDoList] = useState([
    { id: uuidv4(), text: 'Learn React.js' },
    { id: uuidv4(), text: 'Learn Next.js' },
    { id: uuidv4(), text: 'Learn Copilot' },
  ]);

  // create a state for to do items
  const [todoItem, setTodoItem] = useState('');
   // function that handles adding new items to the To Do List
    const handleAddItem = () => {
        //create new item object
        const newItem = {
            id: uuidv4(),
            text: todoItem
        };
        //update the state with the new item
        setToDoList([...TodoList, newItem]);
        setTodoItem('');
    }
    //function that handles deleting items from the To Do List
    const handleDeleteItem = (id) => {
        //filter out the item with the given id
        const filteredList = TodoList.filter(item => item.id !== id);
        //update the state with the new list
        setToDoList(filteredList);
    }
    //render input field and button, to add items and  list of items
    return (                
        <div className='container' >
            <Head>
                <title>To Do List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>   
            <main>
                <h1>To Do List</h1>
                <input 
                    type="text"
                    value={todoItem}
                    onChange={(e) => setTodoItem(e.target.value)}
                />
                <button onClick={handleAddItem}>Add Item</button>
                <ul>
                    {TodoList.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </main> 
        </div>  
    );

}

