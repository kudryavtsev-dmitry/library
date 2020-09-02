import React from "react";
import { Modal } from "@material-ui/core";
import { Formik, Form } from "formik";
import CustomField from "../../../../constants/CustomField";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addGenre, editGenre } from "../../../../redux/genres/actions";

const GenresEditorModal = ({ modalFlag, handleCloseModal, selectedGenre, clearSelectedGenre }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendGenre = (values) => {
    dispatch(addGenre(auth.token, values));
    handleCloseModal();
  };
  const editGenres = (values) => {
    dispatch(editGenre(auth.token, values.title, selectedGenre.id));
    handleCloseModal();
    clearSelectedGenre()
  };

  return (
    <Modal
      className="bookEditorModal-container"
      open={modalFlag}
      onClose={handleCloseModal}
    >
      <div className="bookEditorModal-paper">
        <Formik
          initialValues={selectedGenre ? {
            title: selectedGenre.title,
          } : {
              title: "",
            }}
          onSubmit={selectedGenre ? (values) => editGenres(values) : (values) => sendGenre(values)}
        >
          {({ isSubmitting }) => (
            <Form className="bookEditorModal-form">
              <h3>Добавить жанры</h3>
              <CustomField required name="title" label="Жанр" type="text" />
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
              >
                Добавить
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
export default GenresEditorModal;
