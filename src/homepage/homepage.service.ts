import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) { }

  async findById(profileId: string) {
    const profileData = await this.prisma.profile
      .findUnique({
        where: {
          id: profileId,
        },
        select: {
          title: true,
          imageURL: true,
          favorites: {
            include: {
              genre: true,
            },
          },
          // favorite: {
          //   select: {
          //     games: true,
          //   },
          // },
        },
      })
      .catch(handleError);
    const gameList = profileData.favorites;
    const gameOrdered = [];
    const allGenres = await this.prisma.genre.findMany();
    allGenres.map((genre) => {
      const genreGames = [];
      gameList.map((game) => {
        if (game.genre[0].name == genre.name) {
          genreGames.push(game.title);
        }
      });
      const genreObject = {
        genre: genre.name,
        title: genreGames,
      };
      if (genreGames.length !== 0) {
        gameOrdered.push(genreObject);
      }
    });
    return {
      favorites: gameOrdered,
    }
  }
}
