import renderer from 'react-test-renderer';
import React from 'react';
import RocketItem from '../components/RocketItem';

test('Check for correct item rendering', () => {
  const clickReserve = jest.fn();

  const component = renderer.create(
    <RocketItem
      rocketId="rocketIdTest"
      rocketName="rocket Name"
      rocketDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam diam, ultricies quis maximus nec, maximus sit amet diam. Nam mollis faucibus eros, ut malesuada neque consequat in. Aenean in odio ut lectus varius dapibus quis et nulla. Suspendisse nibh augue, pharetra eget accumsan sed, sagittis vitae purus. In vehicula sem sit amet lorem consectetur, at aliquam lectus fermentum. Nunc volutpat vestibulum ante. Nulla justo est, malesuada et fermentum vitae, varius in felis. Phasellus dignissim justo a sapien iaculis, nec tempor dui congue."
      flickrImages="https://example.com/rocket.jpg"
      isReserved={false}
      onClick={clickReserve}
    />,
  );
  const treeRocketItem = component.toJSON();

  expect(treeRocketItem).toMatchSnapshot();
});
