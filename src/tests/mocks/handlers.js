// mocks.js
import { rest } from 'msw';

const handlers = [
  rest.get('https://api.api-ninjas.com/v1/quotes', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        rocket_id: 'rocket1',
        rocket_name: 'Rocket 1',
        description: 'Description of Rocket 1',
        flickr_images: ['https://example.com/rocket1.jpg'],
      },
    ]),
  )),
];

export default handlers;
