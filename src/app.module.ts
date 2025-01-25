import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrivesModule } from './drives/drives.module';

@Module({
	imports: [DrivesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
