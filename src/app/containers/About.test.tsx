import { renderComponent, chai } from '../helpers/TestHelper';
import { About } from './About';

describe('<About />', () => {

  const component = renderComponent(About);

  it('Renders header with text', () => {
    chai.expect(component.find('h4').text()).to.eql('About');
  });

});
