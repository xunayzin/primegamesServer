import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um gênero'
  })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros'
  })
  findAll() {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Procurar um gênero pelo ID'
  })
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um gênero pelo ID'
  })
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genreService.update(id, updateGenreDto);
  }

  @Delete(':id')
  //@HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover um produto pelo ID',
  })
  delete(@Param('id') id: string) {
    this.genreService.delete(id);
  }
}
