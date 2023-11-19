import renderer from 'react-test-renderer';
import RocketBadge from '../components/RocketBadge';

test('Checks if the badge renders correctly', () => {
  const component = renderer.create(<RocketBadge />);
  const badgeTree = component.toJSON();
  expect(badgeTree).toMatchSnapshot();
});
