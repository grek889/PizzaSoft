import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Загрузка...</p>}>
        {component()}
      </React.Suspense>
    </BrowserRouter>
  );
};
