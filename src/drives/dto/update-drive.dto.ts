import { BaseDriveEntityDto } from './create-drive.dto';
import { DriveInterface } from '../interface/drive.interface';
export class UpdateDriveDto
	extends BaseDriveEntityDto
	implements DriveInterface
{
	name: string;
	document: number;
}
