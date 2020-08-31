import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import "./GenresEditor.css";
import GenresEditorModal from "./GenresEditorModal";
import GenresTable from "./GenresTable";
import { deleteGenre } from "../../../redux/genres/actions";

const GenresEditor = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const genres = useSelector((state) => state.genres);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleOpenModal = () => () => {
    setModalFlag(true);
  };

  const handleDeliteGenre = (id) => () => {
    dispatch(deleteGenre(auth.token, id));
  };

  const handleChangeMode = (genre) => () => {
    setModalFlag(true);
    setSelectedGenre(genre)
  }
  return (
    <div className="GenresEditor-container">
      <div className="GenresEditor-wrapper">
        <GenresTable genres={genres} onClick={handleDeliteGenre} handleChangeMode={handleChangeMode} />
        <div className="button-wrapper">
          <Button
            onClick={handleOpenModal()}
            color="primary"
            variant="contained"
          >
            Добавить
          </Button>
        </div>
      </div>
      <GenresEditorModal
        clearSelectedGenre={() => setSelectedGenre(null)}
        selectedGenre={selectedGenre}
        modalFlag={modalFlag}
        handleCloseModal={() => setModalFlag(false)}
      />
    </div>
  );
};

export default GenresEditor;
