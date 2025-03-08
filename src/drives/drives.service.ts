// responsável pelo gerenciamento da lógica

import { Injectable } from '@nestjs/common';
import { UpdateDriveDto } from './dto/update-drive.dto';
import { drives } from 'src/dataBase/drivesDb';

import { DriveEntity } from './dto/create-drive.dto';
import { DriveInterface } from './interface/drive.interface';

@Injectable()
export class DrivesService {
	create(createDriveDto: DriveInterface) {
		let newDrive = new DriveEntity();
		const ID = Math.floor(Math.random() * 100) + 1;
		newDrive = {
			...createDriveDto,
			id: ID,
			createdAt: new Date(),
			updatedAt: null,
		};
		drives.push(newDrive);
		return `Motorista: ${newDrive.name} - id: ${newDrive.id} adicionado com sucesso!`;
	}

	findAll(): DriveEntity[] {
		return drives;
	}

	findOne(id: number): DriveEntity {
		console.log(`This action returns a #${id} drive`);
		return drives.filter((drive) => (drive.id = id))[0];
	}

	update(id: number, updateDriveDto: UpdateDriveDto) {
		const index = drives.findIndex((drive) => drive.id === id);
		if (index !== -1) {
			drives[index].name = updateDriveDto?.name;
			drives[index].document = updateDriveDto?.document;
			drives[index].updatedAt = new Date();
		}
		return console.log(updateDriveDto, `This action updates a #${id} drive`);
	}

	remove(id: number) {
		const index = drives.findIndex((drive) => drive.id === id);
		console.log(index, drives[index]);
		if (index !== -1) {
			drives.splice(index, 1);
		}
		return console.log(`This action removes a #${id} drive`);
	}
}
