import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionModel from '../models/Transaction.model';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionModel {
    // TODO
  }
}

export default CreateTransactionService;
