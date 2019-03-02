import React from 'react';
import Header from '../components/Header';
import renderer from 'react-test-renderer';

test('Does Header render correctly?', () => {
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
    <Header links={links} />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
