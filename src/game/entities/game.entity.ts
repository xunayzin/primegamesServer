import { Genre } from 'src/genre/entities/genre.entity';

export class Game {
  id?: string;
  title: string;
  description: string;
  year: number;
  genres?: Genre[];
  createdAt?: Date;
  updatedAt?: Date;
}
