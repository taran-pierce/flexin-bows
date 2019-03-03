import React from 'react';
import Layout from '../components/Layout';
import renderer from 'react-test-renderer';

test('Does Layout render correctly?', () => {
  
  const component = renderer.create(
    <Layout />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  // TODO Layout has two ways to render
  // only one is being tested
});
