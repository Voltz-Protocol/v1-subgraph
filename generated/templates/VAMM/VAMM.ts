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

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tickLower(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class FeeSet extends ethereum.Event {
  get params(): FeeSet__Params {
    return new FeeSet__Params(this);
  }
}

export class FeeSet__Params {
  _event: FeeSet;

  constructor(event: FeeSet) {
    this._event = event;
  }

  get feeWadOld(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get feeWad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class InitializeVAMM extends ethereum.Event {
  get params(): InitializeVAMM__Params {
    return new InitializeVAMM__Params(this);
  }
}

export class InitializeVAMM__Params {
  _event: InitializeVAMM;

  constructor(event: InitializeVAMM) {
    this._event = event;
  }

  get sqrtPriceX96(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tick(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Mint extends ethereum.Event {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tickLower(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
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

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetFeeProtocol extends ethereum.Event {
  get params(): SetFeeProtocol__Params {
    return new SetFeeProtocol__Params(this);
  }
}

export class SetFeeProtocol__Params {
  _event: SetFeeProtocol;

  constructor(event: SetFeeProtocol) {
    this._event = event;
  }

  get feeProtocolOld(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get feeProtocol(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sqrtPriceX96(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tick(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get tickLower(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get tickUpper(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VAMM__computeGrowthInsideResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class VAMM__swapResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class VAMM__swapInputParamsStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get amountSpecified(): BigInt {
    return this[1].toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this[2].toBigInt();
  }

  get isExternal(): boolean {
    return this[3].toBoolean();
  }

  get tickLower(): i32 {
    return this[4].toI32();
  }

  get tickUpper(): i32 {
    return this[5].toI32();
  }
}

export class VAMM__ticksResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    return map;
  }
}

export class VAMM__vammVarsResult {
  value0: BigInt;
  value1: i32;
  value2: i32;

  constructor(value0: BigInt, value1: i32, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromI32(this.value1));
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }
}

export class VAMM extends ethereum.SmartContract {
  static bind(address: Address): VAMM {
    return new VAMM("VAMM", address);
  }

  computeGrowthInside(
    tickLower: i32,
    tickUpper: i32
  ): VAMM__computeGrowthInsideResult {
    let result = super.call(
      "computeGrowthInside",
      "computeGrowthInside(int24,int24):(int256,int256,uint256)",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );

    return new VAMM__computeGrowthInsideResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_computeGrowthInside(
    tickLower: i32,
    tickUpper: i32
  ): ethereum.CallResult<VAMM__computeGrowthInsideResult> {
    let result = super.tryCall(
      "computeGrowthInside",
      "computeGrowthInside(int24,int24):(int256,int256,uint256)",
      [ethereum.Value.fromI32(tickLower), ethereum.Value.fromI32(tickUpper)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VAMM__computeGrowthInsideResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeGrowthGlobalX128(): BigInt {
    let result = super.call(
      "feeGrowthGlobalX128",
      "feeGrowthGlobalX128():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_feeGrowthGlobalX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feeGrowthGlobalX128",
      "feeGrowthGlobalX128():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeWad(): BigInt {
    let result = super.call("feeWad", "feeWad():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeWad(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeWad", "feeWad():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fixedTokenGrowthGlobalX128(): BigInt {
    let result = super.call(
      "fixedTokenGrowthGlobalX128",
      "fixedTokenGrowthGlobalX128():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_fixedTokenGrowthGlobalX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fixedTokenGrowthGlobalX128",
      "fixedTokenGrowthGlobalX128():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  liquidity(): BigInt {
    let result = super.call("liquidity", "liquidity():(uint128)", []);

    return result[0].toBigInt();
  }

  try_liquidity(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("liquidity", "liquidity():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  marginEngine(): Address {
    let result = super.call("marginEngine", "marginEngine():(address)", []);

    return result[0].toAddress();
  }

  try_marginEngine(): ethereum.CallResult<Address> {
    let result = super.tryCall("marginEngine", "marginEngine():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxLiquidityPerTick(): BigInt {
    let result = super.call(
      "maxLiquidityPerTick",
      "maxLiquidityPerTick():(uint128)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxLiquidityPerTick(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxLiquidityPerTick",
      "maxLiquidityPerTick():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  protocolFees(): BigInt {
    let result = super.call("protocolFees", "protocolFees():(uint256)", []);

    return result[0].toBigInt();
  }

  try_protocolFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("protocolFees", "protocolFees():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swap(params: VAMM__swapInputParamsStruct): VAMM__swapResult {
    let result = super.call(
      "swap",
      "swap((address,int256,uint160,bool,int24,int24)):(int256,int256,uint256)",
      [ethereum.Value.fromTuple(params)]
    );

    return new VAMM__swapResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_swap(
    params: VAMM__swapInputParamsStruct
  ): ethereum.CallResult<VAMM__swapResult> {
    let result = super.tryCall(
      "swap",
      "swap((address,int256,uint160,bool,int24,int24)):(int256,int256,uint256)",
      [ethereum.Value.fromTuple(params)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VAMM__swapResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  tickBitmap(param0: i32): BigInt {
    let result = super.call("tickBitmap", "tickBitmap(int16):(uint256)", [
      ethereum.Value.fromI32(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tickBitmap(param0: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tickBitmap", "tickBitmap(int16):(uint256)", [
      ethereum.Value.fromI32(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tickSpacing(): i32 {
    let result = super.call("tickSpacing", "tickSpacing():(int24)", []);

    return result[0].toI32();
  }

  try_tickSpacing(): ethereum.CallResult<i32> {
    let result = super.tryCall("tickSpacing", "tickSpacing():(int24)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  ticks(param0: i32): VAMM__ticksResult {
    let result = super.call(
      "ticks",
      "ticks(int24):(uint128,int128,int256,int256,uint256,bool)",
      [ethereum.Value.fromI32(param0)]
    );

    return new VAMM__ticksResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean()
    );
  }

  try_ticks(param0: i32): ethereum.CallResult<VAMM__ticksResult> {
    let result = super.tryCall(
      "ticks",
      "ticks(int24):(uint128,int128,int256,int256,uint256,bool)",
      [ethereum.Value.fromI32(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VAMM__ticksResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean()
      )
    );
  }

  unlocked(): boolean {
    let result = super.call("unlocked", "unlocked():(bool)", []);

    return result[0].toBoolean();
  }

  try_unlocked(): ethereum.CallResult<boolean> {
    let result = super.tryCall("unlocked", "unlocked():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  vammVars(): VAMM__vammVarsResult {
    let result = super.call("vammVars", "vammVars():(uint160,int24,uint8)", []);

    return new VAMM__vammVarsResult(
      result[0].toBigInt(),
      result[1].toI32(),
      result[2].toI32()
    );
  }

  try_vammVars(): ethereum.CallResult<VAMM__vammVarsResult> {
    let result = super.tryCall(
      "vammVars",
      "vammVars():(uint160,int24,uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VAMM__vammVarsResult(
        value[0].toBigInt(),
        value[1].toI32(),
        value[2].toI32()
      )
    );
  }

  variableTokenGrowthGlobalX128(): BigInt {
    let result = super.call(
      "variableTokenGrowthGlobalX128",
      "variableTokenGrowthGlobalX128():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_variableTokenGrowthGlobalX128(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "variableTokenGrowthGlobalX128",
      "variableTokenGrowthGlobalX128():(int256)",
      []
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tickLower(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get tickUpper(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _marginEngineAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tickSpacing(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeVAMMCall extends ethereum.Call {
  get inputs(): InitializeVAMMCall__Inputs {
    return new InitializeVAMMCall__Inputs(this);
  }

  get outputs(): InitializeVAMMCall__Outputs {
    return new InitializeVAMMCall__Outputs(this);
  }
}

export class InitializeVAMMCall__Inputs {
  _call: InitializeVAMMCall;

  constructor(call: InitializeVAMMCall) {
    this._call = call;
  }

  get sqrtPriceX96(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class InitializeVAMMCall__Outputs {
  _call: InitializeVAMMCall;

  constructor(call: InitializeVAMMCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tickLower(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get tickUpper(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class SetFeeCall extends ethereum.Call {
  get inputs(): SetFeeCall__Inputs {
    return new SetFeeCall__Inputs(this);
  }

  get outputs(): SetFeeCall__Outputs {
    return new SetFeeCall__Outputs(this);
  }
}

export class SetFeeCall__Inputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }

  get _feeWad(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeCall__Outputs {
  _call: SetFeeCall;

  constructor(call: SetFeeCall) {
    this._call = call;
  }
}

export class SetFeeProtocolCall extends ethereum.Call {
  get inputs(): SetFeeProtocolCall__Inputs {
    return new SetFeeProtocolCall__Inputs(this);
  }

  get outputs(): SetFeeProtocolCall__Outputs {
    return new SetFeeProtocolCall__Outputs(this);
  }
}

export class SetFeeProtocolCall__Inputs {
  _call: SetFeeProtocolCall;

  constructor(call: SetFeeProtocolCall) {
    this._call = call;
  }

  get feeProtocol(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetFeeProtocolCall__Outputs {
  _call: SetFeeProtocolCall;

  constructor(call: SetFeeProtocolCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get params(): SwapCallParamsStruct {
    return changetype<SwapCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get _fixedTokenDelta(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get _variableTokenDelta(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get _cumulativeFeeIncurred(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}

export class SwapCallParamsStruct extends ethereum.Tuple {
  get recipient(): Address {
    return this[0].toAddress();
  }

  get amountSpecified(): BigInt {
    return this[1].toBigInt();
  }

  get sqrtPriceLimitX96(): BigInt {
    return this[2].toBigInt();
  }

  get isExternal(): boolean {
    return this[3].toBoolean();
  }

  get tickLower(): i32 {
    return this[4].toI32();
  }

  get tickUpper(): i32 {
    return this[5].toI32();
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

export class UpdateProtocolFeesCall extends ethereum.Call {
  get inputs(): UpdateProtocolFeesCall__Inputs {
    return new UpdateProtocolFeesCall__Inputs(this);
  }

  get outputs(): UpdateProtocolFeesCall__Outputs {
    return new UpdateProtocolFeesCall__Outputs(this);
  }
}

export class UpdateProtocolFeesCall__Inputs {
  _call: UpdateProtocolFeesCall;

  constructor(call: UpdateProtocolFeesCall) {
    this._call = call;
  }

  get protocolFeesCollected(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateProtocolFeesCall__Outputs {
  _call: UpdateProtocolFeesCall;

  constructor(call: UpdateProtocolFeesCall) {
    this._call = call;
  }
}
