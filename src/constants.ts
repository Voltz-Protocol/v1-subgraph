import { BigInt, BigDecimal } from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const ZERO_BI = BigInt.fromI32(0);
export const ONE_BI = BigInt.fromI32(1);
export const ZERO_BD = BigDecimal.fromString('0');
export const ONE_BD = BigDecimal.fromString('1');
export const BI_18 = BigInt.fromI32(18);

export const FIXED_TAKER = BigInt.fromI32(1);
export const VARIABLE_TAKER = BigInt.fromI32(2);
export const LIQUIDITY_PROVIDER = BigInt.fromI32(3);
