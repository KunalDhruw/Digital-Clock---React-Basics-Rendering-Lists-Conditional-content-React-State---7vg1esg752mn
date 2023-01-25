Implementation Details:

Create a Digital Clock with React.
When Digital Clock is mounted, the Digital Clock should update the state variable time with the current time.
This Digital Clock should update the time variable regularly at an interval of 1 sec.
When the component is unmounted then Digital Clock should be terminated to free up resources.


Acceptance Criteria:

->Date time should be displayed inside div with classname "date-time"
->Use JavaScript class Date.
->Update Digital Clock in every second.
->Terminate Digital Clock on unmounting.


Time Format:

use toLocaleString method on date object to display date-time
It should be displayed like this: - "12/2/2021, 3:17:23 PM" (without double quotes)
On some OS/browsers , toLocaleString may or may not show AM/PM at the end, but the solution will still be acceptable


Test Case:
On mount, displays the current date time in locale string
After one second time changes by one second
After two second time changes by two second

Implement above project in this code below:-
import React from 'react'
import '../styles/App.css';
const App = () => {

  return (
    <div id="main">
      <div className="date-time"></div>
    </div>
  )
}


export default App;

*/

import React, { Component } from 'react'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div id="main">
        <div className="date-time">{this.state.time}</div>
      </div>
    )
  }
}

export default App;
