export interface IMovie {
  _id: string
  fullplot?: string
  plot: string
  title: string
  genres: string[]
  cast: string[]
  languages: string[]
  poster: string
  writers?: string[]
  directors?: string[]
  imdb: {
    rating: number
    votes: number
    id: number
  }
}
