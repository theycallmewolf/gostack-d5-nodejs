import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
// import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

// GET
transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();
    return response.json(transactions);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

// POST
transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const newTransaction = transactionsRepository.create({
      title,
      value,
      type,
    });
    return response.json(newTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
