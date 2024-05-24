import { useParams } from '@remix-run/react'
import { MovieDates, OtherMoviesCarousel } from '~/components/movies/MovieDates'

export default function MovieDetails() {
  const { movieId } = useParams()

  return (
    <div className="min-h-page pt-32">
      <img
        className="absolute top-[57px] z-[-1] h-96 w-full object-cover blur-sm"
        src="https://image.tmdb.org/t/p/w1280/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
        alt="kung fu panda 4"
      />

      <div className="container z-50 flex w-dvw flex-col gap-4 md:flex-row">
        <div className="mx-auto flex w-fit flex-col gap-4">
          <figure className="flex aspect-[2/3] h-96 w-fit justify-center">
            <img
              className="aspect-[2/3] h-96 w-auto rounded-md object-cover shadow-xl"
              src="https://admin.cinemasroyalfilms.com/assets/images/movies-poster/1703626035495-Kung%20Fu%20Panda%204.png"
              alt=""
            />
          </figure>
          <h1 className="w-64 text-balance text-center text-2xl font-bold">
            Movie {movieId}
          </h1>
        </div>

        <div className="flex flex-col gap-4 md:mt-64 md:pt-2">
          <article className="z-50 flex flex-col gap-4">
            <h2 className="text-lg font-bold">Sinopsis</h2>
            <p className="text-pretty">
              Po se prepara para ser el líder espiritual del Valle de la Paz,
              buscando un sucesor como Guerrero Dragón. Mientras entrena a un
              nuevo practicante de kung fu, enfrenta al villano llamado el
              Camaleón, que evoca villanos del pasado, desafiando todo lo que Po
              y sus amigos han aprendido.
            </p>
            <hr />
            <div className="flex flex-col md:flex-row md:gap-4">
              <p className="font-bold text-gray-500">
                Fecha de lanzamiento:{' '}
                <span className="text-sm font-normal">12-03-2024</span>
              </p>
              <p className="font-bold text-gray-500">
                Calificación: <span className="text-sm font-normal">7.1</span>
              </p>
            </div>
          </article>

          <div className="w-full">
            <h2 className="text-xl font-bold">Funciones</h2>
          </div>

          <MovieDates />

          <h2 className="text-xl font-bold">Otras funciones</h2>

          <div>
            <OtherMoviesCarousel />
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
