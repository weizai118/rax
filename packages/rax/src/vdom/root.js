import Component from '../component';

let rootCounter = 1;

class Root extends Component {
  state = {
    // Using fragment instead of null for avoid create a comment node when init mount
    element: []
  };
  rootID = rootCounter++;
  getPublicInstance() {
    return this.getRenderedComponent().getPublicInstance();
  }
  getRenderedComponent() {
    return this._internal._renderedComponent;
  }
  update(element) {
    this.setState({
      element
    });
  }
  render() {
    return this.state.element;
  }
}

export default Root;
