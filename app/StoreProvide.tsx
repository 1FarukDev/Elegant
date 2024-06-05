'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStore, AppStore, persistor } from '../lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor(storeRef.current)}>
        {children}
      </PersistGate>
    </Provider>
  );
}
