let { configure } = require('enzyme');
let Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
