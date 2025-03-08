import { DriveInterface } from '../interface/drive.interface';

export class BaseDriveEntityDto {
	id: number;
	createdAt: Date;
	updatedAt: Date | null;
}

export class DriveEntity extends BaseDriveEntityDto implements DriveInterface {
	name: string;
	document: number;
}
