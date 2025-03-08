// responsável por gerir rotas, é com o que o user vai ter contato ao acessar a api
import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { DrivesService } from './drives.service';

import { UpdateDriveDto } from './dto/update-drive.dto';
import { DriveInterface } from './interface/drive.interface';
import { DriveEntity } from './dto/create-drive.dto';

@Controller('drives') // Decorador que define um prefixo de caminho de rota opcional, que ajuda a agrupar rotas relacionadas
export class DrivesController {
	constructor(private readonly drivesService: DrivesService) {}

	@Post()
	create(@Body() createDriveDto: DriveInterface) {
		return this.drivesService.create(createDriveDto);
	}

	@Get() // Decorador do método de solicitações HTTP
	// findAll é um método
	findAll(): DriveEntity[] {
		return this.drivesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.drivesService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateDriveDto: UpdateDriveDto) {
		return this.drivesService.update(+id, updateDriveDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.drivesService.remove(+id);
	}
}
