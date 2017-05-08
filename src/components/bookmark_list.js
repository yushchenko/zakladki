import React from 'react';

import Bookmark from './bookmark';

export default function({bookmarks}) {

  if (bookmarks.length === 0) {
    return <div>No bookmarks here!</div>
  }

  return (
    <div>
      {bookmarks.map(bookmark => {
        return <Bookmark bookmark={bookmark} key={bookmark.url} />
      })}
    </div>
  );
}
