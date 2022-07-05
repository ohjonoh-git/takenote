import React from 'react';

class AddNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
      tagline: '',
      note: ''
    }

    // this.addNote = this.addNote.bind(this);

  }



  render() {
    return (
      <div>
        <h1>New Note</h1>

          Title:
          <br/>
          <input className="note-label" type="text" placeholder="Title" onChange={(e) => {this.setState({title: e.target.value})}}/>
          <br/>
          Category:
          <br/>
          <input className="note-label" type="text" placeholder="Category" onChange={(e) => {this.setState({category: e.target.value})}}/>
          <br/>
          Tagline:
          <br/>
          <input className="note-label" type="text" placeholder="Tagline" onChange={(e) => {this.setState({tagline: e.target.value})}}/>
          <br/>
          <input className="note-input" height="700px" type="text" placeholder="Write your note here!" onChange={(e) => {this.setState({note: e.target.value})}}/>
          <br/>
          <button className="button" onClick={() => this.props.saveNote(this.state)}>SAVE IT</button>

      </div>
    )
  }
};

export default AddNote;
