import './App.css';
import { Button, Divider, Form, Grid, Segment , Header} from 'semantic-ui-react'
import UserForm from './components/UserForm'
import React from "react";

function App() {
  return (
    <div className="App">
        <UserForm />
        <Divider vertical></Divider>
    </div>
  );
}

export default App;
