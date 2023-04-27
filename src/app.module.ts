import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'mel.db.elephantsql.com',
      port: 5432,
      database: 'jpkevrps',
      username: 'jpkevrps',
      password: 'jHuL4e54vRBB0LdZ_buC34b14XrpHUEn',
      autoLoadModels: true,
      synchronize: false,
      dialectOptions: {
        connectTimeout: 150000,
      },
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   context: ({ req }) => ({ req }),
    //   autoSchemaFile: 'schema.gql',
    //   playground: true,
    //   path: '/graphql',
    //   driver: ApolloDriver,
    //   // cors: {
    //   //   credentials: true,
    //   //   origin: true,
    //   // },
    // }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
