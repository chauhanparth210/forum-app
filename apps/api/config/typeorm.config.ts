import { DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config({ path: '.env.local' });

export const typeormConfig: DataSourceOptions = {
    type: 'postgres',
    host: `${process.env.DATABASE_HOST}`,
    port: parseInt(process.env.DATABASE_PORT),
    username: `${process.env.DATABASE_USERNAME}`,
    database: `${process.env.DATABASE_NAME}`,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/**/migration/*.js'],
    migrationsTableName: 'migration',
    migrationsRun: false,
    synchronize: false,
    logging: true,
}