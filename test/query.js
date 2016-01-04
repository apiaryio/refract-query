import lodash from 'lodash';
import {assert} from 'chai';

import query from '../src/index';

describe('#query', () => {
  describe('Query a request element', () => {
    let results = [];

    before(() => {
      const fixture = lodash.cloneDeep(require('./fixtures/refract/param-no-response.json'));

      results = query(fixture, {
        element: 'httpRequest',
      });
    });

    it('There\'s 1 result', () => {
      assert.strictEqual(results.length, 1);
    });

    it('Result matches the element', () => {
      assert.deepEqual(results[0], {
        element: 'httpRequest',
        meta: {},
        attributes: {
          method: 'POST',
        },
        content: [
          {
            element: 'asset',
            meta: {
              classes: [
                'messageBodySchema',
              ],
            },
            attributes: {
              contentType: 'application/schema+json',
            },
            content: '{"type":"string"}',
          },
        ],
      });
    });
  });

  describe('Query a request element', () => {
    let results = [];

    before(() => {
      const fixture = lodash.cloneDeep(require('./fixtures/refract/params.json'));

      results = query(fixture, {
        element: 'httpRequest',
      });
    });

    it('There are 2 results', () => {
      assert.strictEqual(results.length, 2);
    });

    it('Result matches the elements', () => {
      assert.deepEqual(results, [
        {
          element: 'httpRequest',
          meta: {},
          attributes: {
            method: 'GET',
          },
          content: [],
        },
        {
          element: 'httpRequest',
          meta: {},
          attributes: {
            method: 'POST',
          },
          content: [
            {
              element: 'asset',
              meta: {
                classes: [
                  'messageBodySchema',
                ],
              },
              attributes: {
                contentType: 'application/schema+json',
              },
              content: '{"type":"string"}',
            },
          ],
        },
      ]);
    });
  });
});
