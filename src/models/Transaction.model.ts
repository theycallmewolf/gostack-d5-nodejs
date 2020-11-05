import { v4 as uuid } from 'uuid';

class TransactionModel {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<TransactionModel, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default TransactionModel;
