export class Movie {
  static parseMovie(apiObject) {
    return new Movie(
      apiObject.Title,
      apiObject.Year,
      apiObject.Runtime,
      apiObject.Genre,
      apiObject.Plot,
      apiObject.Poster
    );
  }

  constructor(
    public title: string,
    public year: number,
    public duration: string,
    public genre: string,
    public plot: string,
    public poster?: string,
  ) {}
}
