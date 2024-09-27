import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CostsService } from './costs.service';
import { CostsController } from './costs.controller';
import { Cost, CostsSchema } from 'src/shemas/costs.shema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule
  ],
  controllers:[CostsController],
  providers: [CostsService],

})
export class CostsModule {}
