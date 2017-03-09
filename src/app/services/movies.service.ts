import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable()
export class MoviesService {
  private movies = [
    new Movie(
        'Rogue One',
        2016,
        '133 min',
        'Action, Adventure, Sci-Fi',
        'All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success.',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'
        ),
      new Movie(
        'Goodfellas',
        1990,
        '146 min',
        'Biography, Crime, Drama',
        'Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners\' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
      ),
      new Movie(
        'Saving Private Ryan',
        1998,
        '169 min',
        'Drama, War',
        'Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
      ),
      new Movie(
        'L.A. Confidential',
        1997,
        '138 min',
        'Crime, Drama, Mystery',
        'As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMDBlYzAwZDktNzM2MS00YzBlLWI4ODQtZTlkNmMxZDc3NGRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
      )];
  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  removeMovie(index): void {
    this.movies.splice(index, 1);
  }

}