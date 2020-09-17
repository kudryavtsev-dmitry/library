import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import "./GenresEditor.css";
import GenresEditorModal from "./GenresEditorModal/GenresEditorModal";
import GenresTable from "./GenresTable/GenresTable";
import { deleteGenre } from "../../../redux/genres/actions";

class GenresEditor extends Component {
  state = {
    modalFlag: false,
    selectedGenre: null,
  };

  handleOpenModal = () => () => {
    this.setState({ modalFlag: true });
  };

  handleDeliteGenre = (id) => () => {
    this.props.deleteGenre(this.props.auth.token, id);
  };

  handleChangeMode = (genre) => () => {
    this.setState({ modalFlag: true });
    this.setState({ selectedGenre: genre });
  };

  handeleClearGenre = () => {
    this.state({ selectedGenre: null });
  };

  handleCloseModal = () => {
    this.setState({ modalFlag: false });
  };
  render() {
    const { genres } = this.props;

    return (
      <div className="GenresEditor-container">
        <div className="GenresEditor-wrapper">
          <GenresTable
            genres={genres}
            onClick={this.handleDeliteGenre}
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
        <GenresEditorModal
          clearSelectedGenre={this.handeleClearGenre}
          selectedGenre={this.state.selectedGenre}
          modalFlag={this.state.modalFlag}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteGenre: (token, id) => dispatch(deleteGenre(token, id)),
  };
};

const mapStateToProps = (state) => ({
  genres: state.genres,
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresEditor);
