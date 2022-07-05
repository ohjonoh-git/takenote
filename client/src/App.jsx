import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: [],
      showNote: false
    };
    this.addNote = this.addNote.bind(this);
  }

  changePage(page){
    this.setState({
      page: page
    })
  }

  componentDidMount() {
    // console.log('Notes:', axios.get('api/notes').then());
    axios.get('/api/notes')
      .then((response) => {
        console.log('RESPONSE', response)
        this.setState({notes: response.data});
      })
      .catch((err) => {
        console.log('erer', err);
      });

    // console.log
    // let notes2 = newNotes.data;
    // this.setState({notes: notes2})
  }

  addNote(data) {
    console.log('posting data', data);
    axios.post('/save', data)
    .then((response) => {
      console.log('Saving', response);
      //this.componentDidMount();
    })
    .catch((err) => {
      console.log('err', err);
    })
  }

  patchHS() {
    console.log('patching');
    axios.patch('/hs', data)
      .then((response) => {
        console.log('PATCHED', response);
      })
      .catch((err) => {
        console.log('err', err);
      })

  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes {...this.state}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote saveNote={this.addNote}/>
    }
  }

  selectedNote() {
    // show selected note when note is clicked
    //var selected = this.state.notes.filter(note => )
  }


  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
