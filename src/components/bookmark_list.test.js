import React from 'react';
import { mount } from 'enzyme';

import BookmarkList from './bookmark_list';

const bookmarks = [
  {url: 'http://google.com', title: 'Google', description: 'search engine'},
  {url: 'http://yandex.ru', title: 'Yandex', description: 'another search engine'}
];

let component;

beforeEach(() => {
  component = mount(
    <BookmarkList bookmarks={bookmarks} />
  );
});

test('shows a message, when list is empty', () => {
  const empty = mount(<BookmarkList bookmarks={[]} />);
  expect(empty.text().length).toBeGreaterThan(0);
});

test('shows all bookmark titles', () => {
  bookmarks.forEach((bookmark) => {
    expect(component.text()).toMatch(bookmark.title);
  });
});

test('shows all bookmark descriptions', () => {
  bookmarks.forEach((bookmark) => {
    expect(component.text()).toMatch(bookmark.description);
  });
});
