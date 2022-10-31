import React, { lazy, Suspense } from 'react';

const LazyTheory = lazy(() => import('./Theory'));

const Theory = props => (
  <Suspense fallback={null}>
    <LazyTheory {...props} />
  </Suspense>
);

export default Theory;
