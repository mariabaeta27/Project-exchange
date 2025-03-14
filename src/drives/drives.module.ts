import { Module } from '@nestjs/common';
import { DrivesService } from './drives.service';
import { DrivesController } from './drives.controller';

@Module({
	controllers: [DrivesController],
	providers: [DrivesService],
	exports: [DrivesService],
})
export class DrivesModule {}
