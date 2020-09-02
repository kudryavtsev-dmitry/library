import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import "./AuthorsEditor.css";
import AuthorEditorModal from "./AuthorEditorModal/AuthorsEditorModal";
import AuthorsTable from "./AuthorsTable/AuthorsTable";
import { deleteAuthor } from "../../../redux/authors/actions";

class AuthorsEditor extends Component {
  state = {
    modalFlag: false,
    selectedAuthor: null,
  };

  handleOpenModal = () => () => {
    this.setState({ modalFlag: true });
  };

  handleCloseModal = () => () => {
    this.setState({ modalFlag: false });
  };

  handleClearAuthor = () => () => {
    this.setState({ selectedAuthor: null });
  };

  handleDeleteAuthor = (id) => () => {
    console.log(id);
    const { deleteAuthor, auth } = this.props;
    deleteAuthor(auth.token, id);
  };

  handleChangeMode = (author) => () => {
    this.setState({ modalFlag: true, selectedAuthor: author });
  };

  render() {
    const { authors } = this.props;
    return (
      <div className="AuthorsEditor-container">
        <div className="AuthorsEditor-wrapper">
          <AuthorsTable
            authors={authors}
            onClick={this.handleDeleteAuthor}
            handleChangeMode={this.handleChangeMode}
          />
          <div className="button-wrapper">
            <Button
              onClick={this.handleOpenModal()}
              color="primary"
              variant="contained"
            >
              Добавить
            </Button>
          </div>
        </div>
        <AuthorEditorModal
          clearSelectedAuthor={this.handleClearAuthor}
          modalFlag={this.state.modalFlag}
          handleCloseModal={this.handleCloseModal()}
          selectedAuthor={this.state.selectedAuthor}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authors, auth }) => ({
  authors,
  auth,
});

const mapDispatchToProps = {
  deleteAuthor,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsEditor);
