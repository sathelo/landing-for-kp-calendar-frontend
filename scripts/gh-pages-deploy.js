// eslint-disable-next-line import/no-extraneous-dependencies
import { publish } from 'gh-pages';

publish(
  'dist',
  {
    branch: 'gh-pages',
  },
  function () {}
);
