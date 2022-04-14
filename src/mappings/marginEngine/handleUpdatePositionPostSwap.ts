import { BigInt } from '@graphprotocol/graph-ts';

import { PositionPostSwapUpdate } from '../../../generated/templates/MarginEngine/MarginEngine';
import {
  createPositionSnapshot,
  getAMMFromMarginEngineAddress,
  getOrCreatePosition,
  getOrCreateTick,
} from '../../utilities';

function handleUpdatePositionPostSwap(event: PositionPostSwapUpdate): void {
  const owner = event.params.owner.toHexString();
  const marginEngineAddress = event.address.toHexString();
  const amm = getAMMFromMarginEngineAddress(marginEngineAddress);

  if (amm === null) {
    return;
  }

  const tickLower = getOrCreateTick(amm, BigInt.fromI32(event.params.tickLower));
  const tickUpper = getOrCreateTick(amm, BigInt.fromI32(event.params.tickUpper));
  const position = getOrCreatePosition(
    marginEngineAddress,
    owner,
    tickLower,
    tickUpper,
    event.block.timestamp,
  );

  position.updatedTimestamp = event.block.timestamp;
  position.amm = amm.id;
  position.owner = owner;
  position.tickLower = tickLower.id;
  position.tickUpper = tickUpper.id;
  position.margin = event.params.margin;
  position.isLiquidityProvider = false;
  position.isSettled = false;
  position.fixedTokenBalance = event.params.fixedTokenBalance;
  position.variableTokenBalance = event.params.variableTokenBalance;

  createPositionSnapshot(position, event.block.timestamp);

  position.save();
}

export default handleUpdatePositionPostSwap;
