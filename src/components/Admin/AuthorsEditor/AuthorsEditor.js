import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import "./AuthorsEditor.css";
import AuthorEditorModal from "./AuthorEditorModal/AuthorsEditorModal";
import AuthorsTable from "./AuthorsTable/AuthorsTable";
import {deleteAuthor} from "../../../redux/authors/actions";

const AuthorsEditor = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const authors = useSelector((state) => state.authors);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const handleOpenModal = () => () => {
    setModalFlag(true);
  };

  const handleDeliteAuthor = (id) => () => {
    dispatch(deleteAuthor(auth.token, id))
  }

  const handleChangeMode = (authors) => () => {
    setModalFlag(true);
    setSelectedAuthor(authors)
  }

  return (
    <div className="AuthorsEditor-container">
      <div className="AuthorsEditor-wrapper">
        <AuthorsTable authors={authors} onClick={handleDeliteAuthor} handleChangeMode={handleChangeMode}/>
        <div className='button-wrapper'>
          <Button onClick={handleOpenModal()} color="primary" variant="contained">
            Добавить
          </Button>
        </div>
      </div>
      <AuthorEditorModal
        clearSelectedAuthor={() => setSelectedAuthor(null)}
        modalFlag={modalFlag}
        handleCloseModal={() => setModalFlag(false)}
        selectedAuthor={selectedAuthor}/>
    </div>
  );
};

export default AuthorsEditor;
