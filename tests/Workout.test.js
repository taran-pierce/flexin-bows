import React from 'react';
import Workout from '../components/Workout';
import renderer from 'react-test-renderer';
import data from '../data/programs/better-body.json'

test('Does Workout render correctly?', () => {
  const component = renderer.create(
    <Workout data={data} />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
