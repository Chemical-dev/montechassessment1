import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import * as moment from 'moment';

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
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      })
      rating: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    yearReleased: number;

    get yearReleasedFormatted(): string {
        const date = new Date(this.yearReleased, 0, 1); // assuming yearReleased is a 4-digit number
        return moment(date).format('YYYY');
      }
    
      set yearReleasedFormatted(value: string) {
        const date = moment(value, 'YYYY').toDate();
        this.yearReleased = date.getFullYear();
      }
}

