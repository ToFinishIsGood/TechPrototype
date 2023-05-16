export interface IFilm {
  id: number;
  name: string;
  description: string;
  releaseDate: Date;
  price: number;
  image: string;
}

export interface IUser {
    id: number;
    name: string;
    description: string;
}

export interface IOrder {
    id: number;
    userId:number;
    screeningId:number;
    seats:Array<ISeat>;
    customText:Map<number,string>;
    price:number;
}
export interface ICinema {
    id:number;
    name:string;
    location:string;
    screenings:Array<IScreening>;
    rating:number;
    image:string;
    phone:string;
}
export interface IScreening {
    id:number;
    seatOccupation:Set<number>;
    startTime:Date;
    endTime:Date;
    price:number;
    filmId:number;
    filmTitle:string;
    filmImage:string;
    cinemaId:number;
    cinemaName:string;
    hallId:number;
    hallName:string;
}

export interface IHall {
    id:number;
    name:string;
    seats:Array<Array<ISeat|null>>;
}

export interface ISeat {
    id:number;
    name:string;
}
