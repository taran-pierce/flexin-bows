import React from 'react';
import WorkoutList from '../components/WorkoutList';
import renderer from 'react-test-renderer';

test('Does WorkoutList render correctly?', () => {
  const links = [
    {
      name: 'Better Body',
      href: '/better-body'
    },
    {
      name: 'Advanced Conditioning',
      href: '/advanced-conditioning'
    },
    {
      name: 'Body Building',
      href: '/body-building'
    },
    {
      name: 'Strength Training',
      href: '/strength-training'
    },
    {
      name: 'Aerobic',
      href: '/aerobic'
    },
    {
      name: 'Upper Lower Body',
      href: '/upper-lower-body'
    },
    {
      name: 'Anaerobic',
      href: '/anaerobic'
    }
  ]
  
  const component = renderer.create(
    <WorkoutList links={links} />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
