class FishTableRow extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={() => this.setState({clicked: !this.state.clicked})}>
        <td className="fish-name">Nemo</td>
        <td>
          <img src="http://tinyurl.com/h8o5szh" />
        </td>
        {this.state.clicked ? <td className="fish-description">Does anyone know where my dad is?</td> : null}
      </tr>
    )
  }
}

// Using Babel means that free floating `var` declarations normally
// expected to be available in the global scope will not exist
// unless you explicitly define them on the `window` object.
window.FishTableRow = FishTableRow;
