import { Module } from '@nestjs/common';

import { DrivesModule } from './drives/drives.module';

@Module({
	imports: [DrivesModule],
})
export class AppModule {}
