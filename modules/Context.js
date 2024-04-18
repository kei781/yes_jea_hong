import { createContext } from 'react';

const template = {
  loading: false,
  setLoading: (loading) => {},
};

const context = createContext(template);
export default context;
