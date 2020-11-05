import TransactionModel from '../models/Transaction.model';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: TransactionModel[];

  constructor() {
    this.transactions = [];
  }

  public all(): TransactionModel[] {
    // TODO
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({
    title,
    value,
    type,
  }: CreateTransactionDTO): TransactionModel {
    const newTransaction = new TransactionModel({ title, value, type });

    // validar o saldo
    const { total } = this.getBalance();
    if (type === 'outcome' && value >= total) {
      throw Error("you don't have enough money");
    }
    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
