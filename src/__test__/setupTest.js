import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-fetch-mock').enableFetchMocks();

configure({ adapter: new Adapter() });
