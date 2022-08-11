import { UiKit } from 'pages';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../Layout/Layout';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UiKit />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default Routing;
