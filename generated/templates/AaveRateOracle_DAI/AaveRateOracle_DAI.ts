// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MinSecondsSinceLastUpdate extends ethereum.Event {
  get params(): MinSecondsSinceLastUpdate__Params {
    return new MinSecondsSinceLastUpdate__Params(this);
  }
}

export class MinSecondsSinceLastUpdate__Params {
  _event: MinSecondsSinceLastUpdate;

  constructor(event: MinSecondsSinceLastUpdate) {
    this._event = event;
  }

  get _minSecondsSinceLastUpdate(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OracleBufferUpdate extends ethereum.Event {
  get params(): OracleBufferUpdate__Params {
    return new OracleBufferUpdate__Params(this);
  }
}

export class OracleBufferUpdate__Params {
  _event: OracleBufferUpdate;

  constructor(event: OracleBufferUpdate) {
    this._event = event;
  }

  get blockTimestampScaled(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get source(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get index(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get blockTimestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get observedValue(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get cardinality(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get cardinalityNext(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RateCardinalityNext extends ethereum.Event {
  get params(): RateCardinalityNext__Params {
    return new RateCardinalityNext__Params(this);
  }
}

export class RateCardinalityNext__Params {
  _event: RateCardinalityNext;

  constructor(event: RateCardinalityNext) {
    this._event = event;
  }

  get observationCardinalityNextNew(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class AaveRateOracle_DAI__observationsResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class AaveRateOracle_DAI__oracleVarsResult {
  value0: i32;
  value1: i32;
  value2: i32;

  constructor(value0: i32, value1: i32, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }
}

export class AaveRateOracle_DAI extends ethereum.SmartContract {
  static bind(address: Address): AaveRateOracle_DAI {
    return new AaveRateOracle_DAI("AaveRateOracle_DAI", address);
  }

  ONE_IN_WAD(): BigInt {
    let result = super.call("ONE_IN_WAD", "ONE_IN_WAD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ONE_IN_WAD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ONE_IN_WAD", "ONE_IN_WAD():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  UNDERLYING_YIELD_BEARING_PROTOCOL_ID(): i32 {
    let result = super.call(
      "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
      "UNDERLYING_YIELD_BEARING_PROTOCOL_ID():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_UNDERLYING_YIELD_BEARING_PROTOCOL_ID(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "UNDERLYING_YIELD_BEARING_PROTOCOL_ID",
      "UNDERLYING_YIELD_BEARING_PROTOCOL_ID():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  aaveLendingPool(): Address {
    let result = super.call(
      "aaveLendingPool",
      "aaveLendingPool():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_aaveLendingPool(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "aaveLendingPool",
      "aaveLendingPool():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApyFromTo(from: BigInt, to: BigInt): BigInt {
    let result = super.call(
      "getApyFromTo",
      "getApyFromTo(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to)
      ]
    );

    return result[0].toBigInt();
  }

  try_getApyFromTo(from: BigInt, to: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getApyFromTo",
      "getApyFromTo(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(from),
        ethereum.Value.fromUnsignedBigInt(to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRateFromTo(_from: BigInt, _to: BigInt): BigInt {
    let result = super.call(
      "getRateFromTo",
      "getRateFromTo(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_from),
        ethereum.Value.fromUnsignedBigInt(_to)
      ]
    );

    return result[0].toBigInt();
  }

  try_getRateFromTo(_from: BigInt, _to: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRateFromTo",
      "getRateFromTo(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_from),
        ethereum.Value.fromUnsignedBigInt(_to)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  interpolateRateValue(
    beforeOrAtRateValueRay: BigInt,
    apyFromBeforeOrAtToAtOrAfterWad: BigInt,
    timeDeltaBeforeOrAtToQueriedTimeWad: BigInt
  ): BigInt {
    let result = super.call(
      "interpolateRateValue",
      "interpolateRateValue(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(beforeOrAtRateValueRay),
        ethereum.Value.fromUnsignedBigInt(apyFromBeforeOrAtToAtOrAfterWad),
        ethereum.Value.fromUnsignedBigInt(timeDeltaBeforeOrAtToQueriedTimeWad)
      ]
    );

    return result[0].toBigInt();
  }

  try_interpolateRateValue(
    beforeOrAtRateValueRay: BigInt,
    apyFromBeforeOrAtToAtOrAfterWad: BigInt,
    timeDeltaBeforeOrAtToQueriedTimeWad: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "interpolateRateValue",
      "interpolateRateValue(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(beforeOrAtRateValueRay),
        ethereum.Value.fromUnsignedBigInt(apyFromBeforeOrAtToAtOrAfterWad),
        ethereum.Value.fromUnsignedBigInt(timeDeltaBeforeOrAtToQueriedTimeWad)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minSecondsSinceLastUpdate(): BigInt {
    let result = super.call(
      "minSecondsSinceLastUpdate",
      "minSecondsSinceLastUpdate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minSecondsSinceLastUpdate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minSecondsSinceLastUpdate",
      "minSecondsSinceLastUpdate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  observations(param0: BigInt): AaveRateOracle_DAI__observationsResult {
    let result = super.call(
      "observations",
      "observations(uint256):(uint32,uint216,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new AaveRateOracle_DAI__observationsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_observations(
    param0: BigInt
  ): ethereum.CallResult<AaveRateOracle_DAI__observationsResult> {
    let result = super.tryCall(
      "observations",
      "observations(uint256):(uint32,uint216,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AaveRateOracle_DAI__observationsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  oracleVars(): AaveRateOracle_DAI__oracleVarsResult {
    let result = super.call(
      "oracleVars",
      "oracleVars():(uint16,uint16,uint16)",
      []
    );

    return new AaveRateOracle_DAI__oracleVarsResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toI32()
    );
  }

  try_oracleVars(): ethereum.CallResult<AaveRateOracle_DAI__oracleVarsResult> {
    let result = super.tryCall(
      "oracleVars",
      "oracleVars():(uint16,uint16,uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AaveRateOracle_DAI__oracleVarsResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toI32()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  settlementRateCache(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "settlementRateCache",
      "settlementRateCache(uint32,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_settlementRateCache(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "settlementRateCache",
      "settlementRateCache(uint32,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  underlying(): Address {
    let result = super.call("underlying", "underlying():(address)", []);

    return result[0].toAddress();
  }

  try_underlying(): ethereum.CallResult<Address> {
    let result = super.tryCall("underlying", "underlying():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  variableFactor(
    termStartTimestampInWeiSeconds: BigInt,
    termEndTimestampInWeiSeconds: BigInt
  ): BigInt {
    let result = super.call(
      "variableFactor",
      "variableFactor(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(termStartTimestampInWeiSeconds),
        ethereum.Value.fromUnsignedBigInt(termEndTimestampInWeiSeconds)
      ]
    );

    return result[0].toBigInt();
  }

  try_variableFactor(
    termStartTimestampInWeiSeconds: BigInt,
    termEndTimestampInWeiSeconds: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "variableFactor",
      "variableFactor(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(termStartTimestampInWeiSeconds),
        ethereum.Value.fromUnsignedBigInt(termEndTimestampInWeiSeconds)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  variableFactorNoCache(
    termStartTimestampInWeiSeconds: BigInt,
    termEndTimestampInWeiSeconds: BigInt
  ): BigInt {
    let result = super.call(
      "variableFactorNoCache",
      "variableFactorNoCache(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(termStartTimestampInWeiSeconds),
        ethereum.Value.fromUnsignedBigInt(termEndTimestampInWeiSeconds)
      ]
    );

    return result[0].toBigInt();
  }

  try_variableFactorNoCache(
    termStartTimestampInWeiSeconds: BigInt,
    termEndTimestampInWeiSeconds: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "variableFactorNoCache",
      "variableFactorNoCache(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(termStartTimestampInWeiSeconds),
        ethereum.Value.fromUnsignedBigInt(termEndTimestampInWeiSeconds)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _aaveLendingPool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _underlying(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _times(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _results(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class IncreaseObservationCardinalityNextCall extends ethereum.Call {
  get inputs(): IncreaseObservationCardinalityNextCall__Inputs {
    return new IncreaseObservationCardinalityNextCall__Inputs(this);
  }

  get outputs(): IncreaseObservationCardinalityNextCall__Outputs {
    return new IncreaseObservationCardinalityNextCall__Outputs(this);
  }
}

export class IncreaseObservationCardinalityNextCall__Inputs {
  _call: IncreaseObservationCardinalityNextCall;

  constructor(call: IncreaseObservationCardinalityNextCall) {
    this._call = call;
  }

  get rateCardinalityNext(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class IncreaseObservationCardinalityNextCall__Outputs {
  _call: IncreaseObservationCardinalityNextCall;

  constructor(call: IncreaseObservationCardinalityNextCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMinSecondsSinceLastUpdateCall extends ethereum.Call {
  get inputs(): SetMinSecondsSinceLastUpdateCall__Inputs {
    return new SetMinSecondsSinceLastUpdateCall__Inputs(this);
  }

  get outputs(): SetMinSecondsSinceLastUpdateCall__Outputs {
    return new SetMinSecondsSinceLastUpdateCall__Outputs(this);
  }
}

export class SetMinSecondsSinceLastUpdateCall__Inputs {
  _call: SetMinSecondsSinceLastUpdateCall;

  constructor(call: SetMinSecondsSinceLastUpdateCall) {
    this._call = call;
  }

  get _minSecondsSinceLastUpdate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinSecondsSinceLastUpdateCall__Outputs {
  _call: SetMinSecondsSinceLastUpdateCall;

  constructor(call: SetMinSecondsSinceLastUpdateCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VariableFactorCall extends ethereum.Call {
  get inputs(): VariableFactorCall__Inputs {
    return new VariableFactorCall__Inputs(this);
  }

  get outputs(): VariableFactorCall__Outputs {
    return new VariableFactorCall__Outputs(this);
  }
}

export class VariableFactorCall__Inputs {
  _call: VariableFactorCall;

  constructor(call: VariableFactorCall) {
    this._call = call;
  }

  get termStartTimestampInWeiSeconds(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get termEndTimestampInWeiSeconds(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class VariableFactorCall__Outputs {
  _call: VariableFactorCall;

  constructor(call: VariableFactorCall) {
    this._call = call;
  }

  get resultWad(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WriteOracleEntryCall extends ethereum.Call {
  get inputs(): WriteOracleEntryCall__Inputs {
    return new WriteOracleEntryCall__Inputs(this);
  }

  get outputs(): WriteOracleEntryCall__Outputs {
    return new WriteOracleEntryCall__Outputs(this);
  }
}

export class WriteOracleEntryCall__Inputs {
  _call: WriteOracleEntryCall;

  constructor(call: WriteOracleEntryCall) {
    this._call = call;
  }
}

export class WriteOracleEntryCall__Outputs {
  _call: WriteOracleEntryCall;

  constructor(call: WriteOracleEntryCall) {
    this._call = call;
  }
}
