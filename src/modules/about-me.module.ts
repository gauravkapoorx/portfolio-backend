// about-me.module.ts

import { Module } from '@nestjs/common';
import { AboutMeController } from '../controllers/about_me/about-me.controller';

@Module({
  controllers: [AboutMeController],
})
export class AboutMeModule {}
