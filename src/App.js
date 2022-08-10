
import Message from './components/messages/message';

function App(props) {
    const topPosition = '50px';
  return (
    <div className="App">
       {/* В поле стайл не нужно дробить каждое свойство как отдельный объект. 
       style принимает в качестве параметра 1 объект а не несколько
       Но если по какой то причине есть некий обджект который нужно передать в стили можно 
       использовать spread

       style = {{color:'#fff', ...obj}} */}
       <header className="App-header" style={{top: topPosition ,color: 'red'}}>
        My First React App!        
      </header>
      <body>
        <Message messageText='This message from  '/> {props.name}
      </body>
    </div>
  );
}

export default App;
