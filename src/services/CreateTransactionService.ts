import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionModel from '../models/Transaction.model';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): TransactionDTO {
    const { total } = this.transactionsRepository.getBalance();
    // eslint-disable-next-line no-console

    if (type === 'outcome' && value >= total) {
      throw Error("you don't have enough money");
    }

    const newTransaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return newTransaction;
  }
}

export default CreateTransactionService;
