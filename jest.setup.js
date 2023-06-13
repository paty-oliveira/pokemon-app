import '@testing-library/jest-dom/extend-expect';
// cross-fetch/polyfill package added due an warning during testing execution when using RTK query with jest
// https://stackoverflow.com/questions/71174029/fetchmock-error-on-testing-rtk-query-with-jest-react-vite-js
import 'cross-fetch/polyfill';
