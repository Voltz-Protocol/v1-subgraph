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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get intAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get isApproved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class IrsInstance extends ethereum.Event {
  get params(): IrsInstance__Params {
    return new IrsInstance__Params(this);
  }
}

export class IrsInstance__Params {
  _event: IrsInstance;

  constructor(event: IrsInstance) {
    this._event = event;
  }

  get underlyingToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rateOracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get termStartTimestampWad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get termEndTimestampWad(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tickSpacing(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get marginEngine(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get vamm(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get fcm(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get yieldBearingProtocolID(): i32 {
    return this._event.parameters[8].value.toI32();
  }

  get underlyingTokenDecimals(): i32 {
    return this._event.parameters[9].value.toI32();
  }
}

export class MasterFCM extends ethereum.Event {
  get params(): MasterFCM__Params {
    return new MasterFCM__Params(this);
  }
}

export class MasterFCM__Params {
  _event: MasterFCM;

  constructor(event: MasterFCM) {
    this._event = event;
  }

  get masterFCMAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get yieldBearingProtocolID(): i32 {
    return this._event.parameters[1].value.toI32();
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

export class PeripheryUpdate extends ethereum.Event {
  get params(): PeripheryUpdate__Params {
    return new PeripheryUpdate__Params(this);
  }
}

export class PeripheryUpdate__Params {
  _event: PeripheryUpdate;

  constructor(event: PeripheryUpdate) {
    this._event = event;
  }

  get periphery(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Factory__deployIrsInstanceResult {
  value0: Address;
  value1: Address;
  value2: Address;

  constructor(value0: Address, value1: Address, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  deployIrsInstance(
    _underlyingToken: Address,
    _rateOracle: Address,
    _termStartTimestampWad: BigInt,
    _termEndTimestampWad: BigInt,
    _tickSpacing: i32
  ): Factory__deployIrsInstanceResult {
    let result = super.call(
      "deployIrsInstance",
      "deployIrsInstance(address,address,uint256,uint256,int24):(address,address,address)",
      [
        ethereum.Value.fromAddress(_underlyingToken),
        ethereum.Value.fromAddress(_rateOracle),
        ethereum.Value.fromUnsignedBigInt(_termStartTimestampWad),
        ethereum.Value.fromUnsignedBigInt(_termEndTimestampWad),
        ethereum.Value.fromI32(_tickSpacing)
      ]
    );

    return new Factory__deployIrsInstanceResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress()
    );
  }

  try_deployIrsInstance(
    _underlyingToken: Address,
    _rateOracle: Address,
    _termStartTimestampWad: BigInt,
    _termEndTimestampWad: BigInt,
    _tickSpacing: i32
  ): ethereum.CallResult<Factory__deployIrsInstanceResult> {
    let result = super.tryCall(
      "deployIrsInstance",
      "deployIrsInstance(address,address,uint256,uint256,int24):(address,address,address)",
      [
        ethereum.Value.fromAddress(_underlyingToken),
        ethereum.Value.fromAddress(_rateOracle),
        ethereum.Value.fromUnsignedBigInt(_termStartTimestampWad),
        ethereum.Value.fromUnsignedBigInt(_termEndTimestampWad),
        ethereum.Value.fromI32(_tickSpacing)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__deployIrsInstanceResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress()
      )
    );
  }

  isApproved(_owner: Address, _intAddress: Address): boolean {
    let result = super.call(
      "isApproved",
      "isApproved(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_intAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApproved(
    _owner: Address,
    _intAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApproved",
      "isApproved(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_intAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  masterFCMs(param0: i32): Address {
    let result = super.call("masterFCMs", "masterFCMs(uint8):(address)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);

    return result[0].toAddress();
  }

  try_masterFCMs(param0: i32): ethereum.CallResult<Address> {
    let result = super.tryCall("masterFCMs", "masterFCMs(uint8):(address)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  masterMarginEngine(): Address {
    let result = super.call(
      "masterMarginEngine",
      "masterMarginEngine():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_masterMarginEngine(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "masterMarginEngine",
      "masterMarginEngine():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  masterVAMM(): Address {
    let result = super.call("masterVAMM", "masterVAMM():(address)", []);

    return result[0].toAddress();
  }

  try_masterVAMM(): ethereum.CallResult<Address> {
    let result = super.tryCall("masterVAMM", "masterVAMM():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  periphery(): Address {
    let result = super.call("periphery", "periphery():(address)", []);

    return result[0].toAddress();
  }

  try_periphery(): ethereum.CallResult<Address> {
    let result = super.tryCall("periphery", "periphery():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _masterMarginEngine(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _masterVAMM(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployIrsInstanceCall extends ethereum.Call {
  get inputs(): DeployIrsInstanceCall__Inputs {
    return new DeployIrsInstanceCall__Inputs(this);
  }

  get outputs(): DeployIrsInstanceCall__Outputs {
    return new DeployIrsInstanceCall__Outputs(this);
  }
}

export class DeployIrsInstanceCall__Inputs {
  _call: DeployIrsInstanceCall;

  constructor(call: DeployIrsInstanceCall) {
    this._call = call;
  }

  get _underlyingToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rateOracle(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _termStartTimestampWad(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _termEndTimestampWad(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _tickSpacing(): i32 {
    return this._call.inputValues[4].value.toI32();
  }
}

export class DeployIrsInstanceCall__Outputs {
  _call: DeployIrsInstanceCall;

  constructor(call: DeployIrsInstanceCall) {
    this._call = call;
  }

  get marginEngineProxy(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get vammProxy(): Address {
    return this._call.outputValues[1].value.toAddress();
  }

  get fcmProxy(): Address {
    return this._call.outputValues[2].value.toAddress();
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

export class SetApprovalCall extends ethereum.Call {
  get inputs(): SetApprovalCall__Inputs {
    return new SetApprovalCall__Inputs(this);
  }

  get outputs(): SetApprovalCall__Outputs {
    return new SetApprovalCall__Outputs(this);
  }
}

export class SetApprovalCall__Inputs {
  _call: SetApprovalCall;

  constructor(call: SetApprovalCall) {
    this._call = call;
  }

  get intAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get allowIntegration(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalCall__Outputs {
  _call: SetApprovalCall;

  constructor(call: SetApprovalCall) {
    this._call = call;
  }
}

export class SetMasterFCMCall extends ethereum.Call {
  get inputs(): SetMasterFCMCall__Inputs {
    return new SetMasterFCMCall__Inputs(this);
  }

  get outputs(): SetMasterFCMCall__Outputs {
    return new SetMasterFCMCall__Outputs(this);
  }
}

export class SetMasterFCMCall__Inputs {
  _call: SetMasterFCMCall;

  constructor(call: SetMasterFCMCall) {
    this._call = call;
  }

  get _masterFCM(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _yieldBearingProtocolID(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class SetMasterFCMCall__Outputs {
  _call: SetMasterFCMCall;

  constructor(call: SetMasterFCMCall) {
    this._call = call;
  }
}

export class SetMasterMarginEngineCall extends ethereum.Call {
  get inputs(): SetMasterMarginEngineCall__Inputs {
    return new SetMasterMarginEngineCall__Inputs(this);
  }

  get outputs(): SetMasterMarginEngineCall__Outputs {
    return new SetMasterMarginEngineCall__Outputs(this);
  }
}

export class SetMasterMarginEngineCall__Inputs {
  _call: SetMasterMarginEngineCall;

  constructor(call: SetMasterMarginEngineCall) {
    this._call = call;
  }

  get _masterMarginEngine(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMasterMarginEngineCall__Outputs {
  _call: SetMasterMarginEngineCall;

  constructor(call: SetMasterMarginEngineCall) {
    this._call = call;
  }
}

export class SetMasterVAMMCall extends ethereum.Call {
  get inputs(): SetMasterVAMMCall__Inputs {
    return new SetMasterVAMMCall__Inputs(this);
  }

  get outputs(): SetMasterVAMMCall__Outputs {
    return new SetMasterVAMMCall__Outputs(this);
  }
}

export class SetMasterVAMMCall__Inputs {
  _call: SetMasterVAMMCall;

  constructor(call: SetMasterVAMMCall) {
    this._call = call;
  }

  get _masterVAMM(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMasterVAMMCall__Outputs {
  _call: SetMasterVAMMCall;

  constructor(call: SetMasterVAMMCall) {
    this._call = call;
  }
}

export class SetPeripheryCall extends ethereum.Call {
  get inputs(): SetPeripheryCall__Inputs {
    return new SetPeripheryCall__Inputs(this);
  }

  get outputs(): SetPeripheryCall__Outputs {
    return new SetPeripheryCall__Outputs(this);
  }
}

export class SetPeripheryCall__Inputs {
  _call: SetPeripheryCall;

  constructor(call: SetPeripheryCall) {
    this._call = call;
  }

  get _periphery(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPeripheryCall__Outputs {
  _call: SetPeripheryCall;

  constructor(call: SetPeripheryCall) {
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
