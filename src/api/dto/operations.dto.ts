import { IBaseMongooseModel } from '@/api/dto/base';

export interface IOperation extends IBaseMongooseModel {
  type: string;
  value: number;
  description: string;
}
