import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // Import AppService
import { MainPageModule } from './modules/main-page.module';
import { AboutMeModule } from './modules/about-me.module';
import { ProjectsModule } from './modules/projects.module';
import { ContactModule } from './modules/contact.module';

@Module({
  imports: [MainPageModule, AboutMeModule, ProjectsModule, ContactModule],
  controllers: [AppController],
  providers: [AppService], // Provide AppService
})
export class AppModule {}
