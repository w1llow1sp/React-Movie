import React, { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    //

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    };

    //Добавим фильтрацию по типу

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    className='validate'
                    placeholder='Search'
                    type='search'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className='btn search-btn blue-grey darken-4'
                    onClick={() => searchMovies(search, type)}
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
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </p>
            </div>
        </div>
    );
};

export { Search };
