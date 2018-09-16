import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';

const routers = [
  { name: 'shouye', path: '/' },
  { name: 'file', path: '/file' },
  { name: 'file1', path: '/' },
];
export default () => (
  <div className="nav">
    {routers.map(i => (
      <div className="nav-item">
        <Link to={`${i.path}`}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#icon-${i.name}`} />
          </svg>
        </Link>
      </div>
    ))}
  </div>
);
