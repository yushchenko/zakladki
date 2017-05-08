import React from 'react';
import { shallow } from 'enzyme';

import Bookmark from './bookmark';

const bookmark = {
  url: 'http://google.com',
  title: 'Google',
  description: 'Most popular search engine'
};

let component;

beforeEach(() => {
  component = shallow(
    <Bookmark bookmark={bookmark} />
  );
});

test('shows bookmark title', () => {
  expect(component.text()).toMatch(bookmark.title);
});

test('shows bookmark description', () => {
  expect(component.text()).toMatch(bookmark.description);
});

test('contains link with given url', () => {
  expect(component.find('a').prop('href')).toEqual(bookmark.url);
});
