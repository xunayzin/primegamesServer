import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService) { }

  findAll(): Promise<Game[]> {
    return this.prisma.games.findMany();
  }

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.games.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id)
  }

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);
    return undefined
;  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };

    return this.prisma.games.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id)
    const data: Partial<Game> = { ...dto };

    return this.prisma.games.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.games.delete({ where: { id } });
  }
}
