import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <div>
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Toggle1</Button>
          <Button color="info" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Toggle2</Button>
          <Collapse isOpen={this.state.collapse}>
            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default Example;