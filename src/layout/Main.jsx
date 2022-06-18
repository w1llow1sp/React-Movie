// На этом уровне мы будем получать фильмы

import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=5d733b0b&s=blade')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    // Функция для обновления State и отрисовке фильмов по запросу

    searchMovies = (str, type = 'all') => {
        fetch(
            `http://www.omdbapi.com/?apikey=5d733b0b&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        // Делаем прелоадер и деструкторизацию

        const { movies } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}

export { Main };
