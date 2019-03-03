import React from 'react';
import WorkoutTable from '../components/WorkoutTable';
import renderer from 'react-test-renderer';
import data from '../data/programs/better-body.json'

test('Does WorkoutTable render correctly?', () => {
  const plans = data.workout
  
  const component = renderer.create(
    <WorkoutTable plans={plans} />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
