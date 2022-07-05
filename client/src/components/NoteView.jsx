import React from 'react';

// show full note when clicked

//const Note = (props) => {

class NoteView extends React.Component {
  //console.log('Note props', props.notes);
  constructor(props) {
    super(props);
    this.state = {
      showNote: false
    }
  }

  render() {
    return(
      <div className="noteView">
            <div className="noteViewTitle" onClick={() => this.setState({showNote : true})}>
              <h1>{this.props.notes.title}</h1>
            </div>
            <div className="noteViewCategory">
              <h3>{this.props.notes.category}</h3>
            </div>
            <div className="noteDesc">
              {this.props.notes.tagline}
            </div>
            <div>
              {this.state.showNote && <div className="note">
                <h3>{this.props.notes.note}</h3>
              </div>}
            </div>
            <button>Hidden</button>
            <button>Starred</button>
      </div>
    )
  }

};

export default NoteView;
