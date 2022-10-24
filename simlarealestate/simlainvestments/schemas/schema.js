import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import houses from './houses';
import land from './land';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([houses, land]),
});
