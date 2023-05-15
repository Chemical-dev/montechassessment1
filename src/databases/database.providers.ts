import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { UserMovie } from '../model/movie.model';
import { User } from 'src/model/user.model';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV as any) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      console.log(config);
      const sequelize = new Sequelize(config);
      sequelize.addModels([UserMovie, User]);

      // Establish the associations
      // User.hasMany(UserMovie, { foreignKey: 'userId', as: 'usermovies' });
      // UserMovie.belongsTo(User, { foreignKey: 'userId', as: 'movieUser' });
      // console.log(sequelize);
    //    await sequelize.sync();
      return sequelize;
    },
  },
];