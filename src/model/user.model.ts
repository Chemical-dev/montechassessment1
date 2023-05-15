import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserMovie } from './movie.model';

@Table({ tableName: 'Users' })
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @HasMany(() => UserMovie)
    movies: UserMovie[];
}
