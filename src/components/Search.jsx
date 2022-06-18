import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    //

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    //Добавим фильтрацию по типу

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='Search'
                        type='search'
                        value={this.state.search}
                        onChange={(event) =>
                            this.setState({ search: event.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn search-btn blue-grey darken-4'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        <i className='small material-icons '>search</i>
                        search
                    </button>
                </div>
                <div>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies Only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series Only</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}

export { Search };
