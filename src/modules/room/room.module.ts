import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { MulterModule } from '@nestjs/platform-express';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        DatabaseModule,
        CacheModule.register(),
        MulterModule.register({ dest: './uploads' }),
    ],
    controllers: [RoomController],
    providers: [RoomService],
    exports: [RoomService]
})
export class RoomModule { }