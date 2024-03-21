'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome to Our Website!</h1>
      <div>
        <p>Welcome to our website. We're excited to have you here!</p>
      </div>
      <div>
        <p>Click <a href="/cards">here</a> to go to the Cards Page.</p>
      </div>  
      <img src="/static/img/balloonicorn.jpg" alt="Balloonicorn" style={{ width: '100%', maxWidth: '600px', margin: '20px auto', display: 'block' }} />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));