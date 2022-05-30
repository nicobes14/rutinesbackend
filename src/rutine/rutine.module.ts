import { Module } from '@nestjs/common';
import { RutineService } from './rutine.service';
import { RutineController } from './rutine.controller';
import { DatabaseModule } from 'src/database/database.module';
import { rutinesProvider } from './rutine.provider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, JwtModule],
  controllers: [RutineController],
  providers: [RutineService, ...rutinesProvider],
})
export class RutineModule {}
