import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'O título do jogo',
    example: 'God Of War',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A descrição do jogo',
    example:
      'Baseada em distintas mitologias, a história segue Kratos, um guerreiro espartano que foi levado a matar sua família por seu antigo mestre, o deus da guerra Ares.',
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O ano do jogo',
    example: 2018,
  })
  year: number;


  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Gênero dos jogos',
    example: 'Aventura',
  })
  genre: string;
}
