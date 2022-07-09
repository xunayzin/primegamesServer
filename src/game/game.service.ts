import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]>{
    return this.prisma.games.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.games.findUnique({ where: { id }});
  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };

    return this.prisma.games.create({ data });
  }
}
