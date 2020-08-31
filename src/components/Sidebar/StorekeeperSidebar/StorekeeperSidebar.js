import React from "react";
import { Button } from "@material-ui/core";

const StorekeeperSidebar = ({
    openAuthorEditor,
    openBookEditor,
    openGenresEditor,

}) => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">Данные</div>
            <div className="sidebar-adminButtons">
                <Button onClick={openBookEditor} variant="contained">
                    Книги
        </Button>
                <Button onClick={openAuthorEditor} variant="contained">
                    Авторы
        </Button>
                <Button onClick={openGenresEditor} variant="contained">
                    Жанры
        </Button>
            </div>
        </div>
    );
};
export default StorekeeperSidebar;
