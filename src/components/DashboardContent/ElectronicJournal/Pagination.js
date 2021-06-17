import React, { Component } from "react";
import Pagination from "react-js-pagination";
import {connect} from "react-redux";
import Login from "../../Login/Login";

class JournalPagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        const filterJournal = this.props.filterJournal
        return (
            <div>
                <p className={"paginationP"}>Страница: {this.state.activePage}</p>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={30}
                    pageRangeDisplayed={5}
                    firstPageText={false}
                    lastPageText={false}
                    activeClass={'active'}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const {filterJournal} = state.electronicJournalReducer
    return {
        filterJournal: filterJournal,
    }
}
export default connect(mapStateToProps,{})(JournalPagination)