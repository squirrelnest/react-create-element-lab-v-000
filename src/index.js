import React from 'react';
import ReactDOM from 'react-dom';

const name = React.createElement( 'h1', {}, 'Mikka' )

const bio = React.createElement( 'p', {}, 'Serial career-changer' )

const interests = React.createElement( 'ul', { className: 'my-interests' },
    [
    React.createElement( 'li', {}, 'Coding' ),
    React.createElement( 'li', {}, 'Animation' ),
    React.createElement( 'li', {}, 'Acrobatics' ),
    React.createElement( 'li', {}, 'Sailing' )
    ]
)

const meInReact = React.createElement( 'div', { className: 'me' }, [name, bio, interests] )

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
