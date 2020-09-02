import React from "react";
import {Modal} from "@material-ui/core";
import {Formik, Form} from "formik";
import CustomField from "../../../../constants/CustomField";
import {Button} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import {addAuthor, editAuthor} from "../../../../redux/authors/actions";

const AuthorEditorModal = ({modalFlag, handleCloseModal, selectedAuthor, clearSelectedAuthor}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendAuthor = (values) => {
    dispatch(addAuthor(auth.token, values));
    handleCloseModal();
  };
  const editAuthors = (values) => {
    dispatch(editAuthor(auth.token, values.fio, selectedAuthor.id));
    handleCloseModal();
    clearSelectedAuthor();
  };

  return (
    <Modal
      className="bookEditorModal-container"
      open={modalFlag}
      onClose={handleCloseModal}
    >
      <div className="bookEditorModal-paper">
        <Formik
          initialValues={selectedAuthor ?
            {
              fio: selectedAuthor.fio,
            } :
            {
              fio: "",
            }}
          onSubmit={selectedAuthor ? (values) => editAuthors(values) : (values) => sendAuthor(values)}
        >
          {({isSubmitting}) => (
            <Form className="bookEditorModal-form">
              <h3>Добавить автора</h3>
              <CustomField required name="fio" label="Автор" type="text"/>
              <Button
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
              >
                {selectedAuthor ? 'Сохранить' : 'Добавить'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};
export default AuthorEditorModal;
