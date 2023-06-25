import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import NotesView from './components/NotesView';

function App() {

  return (
    <>
      <Alert>Please do refresh few times if notes did not appear as backend is hosted on a free hosting service it is not up always</Alert>
      <Header />
      <NotesView />
    </>
  );
};

export default App;
