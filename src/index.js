import lodash from 'lodash';

/**
 * Queries the whole Refract tree and finds a respective
 * element(s) which matches the query.
 */
function query(element, elementQuery) {
  if (!element.content) {
    return [];
  }

  if (!lodash.isArray(element.content)) {
    return [];
  }

  const results = lodash.where(element.content, elementQuery);

  return lodash
    .chain(element.content)
    .map((nestedElement) => {
      return query(nestedElement, elementQuery);
    })
    .flatten()
    .concat(results)
    .value();
}

export {query};
export default query;
