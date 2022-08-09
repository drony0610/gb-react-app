
import Message from './components/messages/message';

function App(props) {
    const topPosition = '50px';
  return (
    <div className="App">
       <header className="App-header" style={{top: topPosition} ,{color: 'red'}}>
        My First React App!        
      </header>
      <body>
        <Message messageText='This message from  '/> {props.name}
      </body>
    </div>
  );
}

export default App;
