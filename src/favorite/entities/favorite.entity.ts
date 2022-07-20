import { Game } from 'src/game/entities/game.entity';
import { Profile } from 'src/profile/entities/profile.entity';

export class Favorite {
  id?: string;
  game: Game[];
  profile: Profile[];
  createdAt?: Date;
  updatedAt?: Date;
}
