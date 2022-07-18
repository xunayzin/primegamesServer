import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um pedido',
  })
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os pedidos',
  })
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um pedido pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }
}
