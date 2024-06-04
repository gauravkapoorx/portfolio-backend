// contact.module.ts

import { Module } from '@nestjs/common';
import { ContactMeController } from '../controllers/contact-me/contact-me.controller';

@Module({
  controllers: [ContactMeController],
})
export class ContactModule {}
