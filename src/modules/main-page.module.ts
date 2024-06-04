// main-page.module.ts

import { Module } from '@nestjs/common';
import { MainPageController } from '../controllers/main-page/main-page.controller';

@Module({
  controllers: [MainPageController],
})
export class MainPageModule {}
