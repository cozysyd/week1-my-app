import * as React from 'react';

const header = 'WebsiteName';

const list = [
  {
    title: 'Home',
    url: '/',
    author: 'me',
    num_comments: 0,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Page 1',
    url: '/page1',
    author: 'me',
    num_comments: 0,
    points: 4,
    objectID: 1,
  },
  {
    title: 'Page 2',
    url: '/page2',
    author: 'me',
    num_comments: 0,
    points: 4,
    objectID: 2,
  },
  {
    title: 'Page 3',
    url: '/page3',
    author: 'me',
    num_comments: 0,
    points: 4,
    objectID: 3,
  }
];

function App() {
  return (
    
    <Navbar />

  );
}

function Navbar() {
  return (
    <ul>
      {list.map(function(item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
