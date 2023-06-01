import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DogsModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ucb.72286063',
      database: 'perros_db',
      synchronize: true,
      autoLoadEntities:true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
