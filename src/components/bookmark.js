import React from 'react';

export default function({ bookmark }) {
  return (
    <div>
      <div><a href={bookmark.url}>{bookmark.title}</a></div>
      <div>{bookmark.description}</div>
    </div>
  );
}
