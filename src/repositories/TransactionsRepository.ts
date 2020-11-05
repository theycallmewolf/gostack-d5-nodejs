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
    return this.transactions;
  }

  public getBalance(): Balance {
    let incomeTotal = 0;
    let outcomeTotal = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const transaction of this.transactions) {
      if (transaction.type === 'income') {
        incomeTotal += transaction.value;
      }

      if (transaction.type === 'outcome') {
        outcomeTotal += transaction.value;
      }
    }

    const balance: Balance = {
      income: incomeTotal,
      outcome: outcomeTotal,
      total: incomeTotal - outcomeTotal,
    };
    return balance;
  }

  public create({
    title,
    value,
    type,
  }: CreateTransactionDTO): TransactionModel {
    const newTransaction = new TransactionModel({ title, value, type });
    this.transactions.push(newTransaction);
    return newTransaction;
  }
}

export default TransactionsRepository;
