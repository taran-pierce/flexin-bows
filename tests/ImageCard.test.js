import React from 'react';
import ImageCard from '../components/ImageCard';
import renderer from 'react-test-renderer';

test('Does ImageCard render correctly?', () => {
  const imgSrc = 'https://placekitten.com/200/300'
  
  const component = renderer.create(
    <ImageCard image={imgSrc} />,
  );
  
  // verify component compiles correctly
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
