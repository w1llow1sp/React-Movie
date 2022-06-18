import { Movie } from "./Movie";

function Movies(props) {
  // делаем деструкторизацию через props
  const { movies } = props;
  // Внутри себя он будет проходится по всем фильмам, которые у него есть
  // И через метод map для каждого фильма делать разметку что мы заготовили
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
// Внутри себя он вызывает компонент <Movie/>
// Внутри него много пропсов. imdbID нужен нам для указаания key
// Все остальные параметры мы будем выззывать через спред-оператор {...movie}

export { Movies };
