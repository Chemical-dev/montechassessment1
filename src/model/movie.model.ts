import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import * as moment from 'moment';
import { User } from './user.model';

@Table({ tableName: 'UserMovie' })
export class UserMovie extends Model<UserMovie> {
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    category: string;

    @Column({
      type: DataType.TEXT,
      allowNull: false,
    })
      rank: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
        defaultValue: 0,
    })
    rating: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    yearReleased: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User, 'id')
    user: User;

    get yearReleasedFormatted(): string {
        const date = new Date(this.yearReleased, 0, 1);
        return moment(date).format('YYYY');
    }

    set yearReleasedFormatted(value: string) {
        const date = moment(value, 'YYYY').toDate();
        this.yearReleased = date.getFullYear();
    }
}
