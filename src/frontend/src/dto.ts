// Data transfer objects.
// 用于前后端通信
// TODO:写后端的时候跟着改

export interface IFilm {
    id: number;
    name: string;
    description: string;
    releaseDate: Date;
    image: string;
}

export interface IUser {
    id: number;
    name: string;
    description: string;
    preference: string;
    phoneNumber:number;
    //orders:Array<IOrder>;
}

export interface IOrder {
    id: number;
    user:IUser;
    screening:IScreening;
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
}

export interface IScreening {
    id:number;
    //seatOccupation:Array<Boolean>;
    startTime:Date;
    endTime:Date;
    price:number;
    film:IFilm;
    //cinema:ICinema;
    hall:IHall;
}

export type SeatOccupation=Set<Boolean>;

export interface IHall {
    id:number;
    seats:Array<Array<ISeat|null>>;
}

export interface ISeat {
    id:number;
    name:string;
}
