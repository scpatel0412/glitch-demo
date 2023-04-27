import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({})
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;
}
