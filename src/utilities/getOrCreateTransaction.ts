import { ethereum } from '@graphprotocol/graph-ts';
import isNull from 'lodash/isNull';

import { Transaction } from '../../generated/schema';

const getOrCreateTransaction = (event: ethereum.Event): Transaction => {
  const transactionHash = event.transaction.hash.toHexString();
  const existingTransaction = Transaction.load(transactionHash);

  if (!isNull(existingTransaction)) {
    return existingTransaction;
  }

  const transaction = new Transaction(transactionHash);

  transaction.blockNumber = event.block.number;
  transaction.timestamp = event.block.timestamp;
  transaction.gasPrice = event.transaction.gasPrice;
  transaction.save();

  return transaction;
};

export default getOrCreateTransaction;
