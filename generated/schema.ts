// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Factory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Factory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Factory", id.toString(), this);
    }
  }

  static load(id: string): Factory | null {
    return changetype<Factory | null>(store.get("Factory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class UnderlyingToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UnderlyingToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UnderlyingToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UnderlyingToken", id.toString(), this);
    }
  }

  static load(id: string): UnderlyingToken | null {
    return changetype<UnderlyingToken | null>(store.get("UnderlyingToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class RateOracle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("protocolId", Value.fromBigInt(BigInt.zero()));
    this.set("token", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RateOracle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RateOracle entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RateOracle", id.toString(), this);
    }
  }

  static load(id: string): RateOracle | null {
    return changetype<RateOracle | null>(store.get("RateOracle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get protocolId(): BigInt {
    let value = this.get("protocolId");
    return value!.toBigInt();
  }

  set protocolId(value: BigInt) {
    this.set("protocolId", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }
}

export class AMM extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("updatedTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("fcmAddress", Value.fromString(""));
    this.set("marginEngineAddress", Value.fromString(""));
    this.set("rateOracle", Value.fromString(""));
    this.set("termStartTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("termEndTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("tickSpacing", Value.fromBigInt(BigInt.zero()));
    this.set("sqrtPriceX96", Value.fromBigInt(BigInt.zero()));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
    this.set("tick", Value.fromBigInt(BigInt.zero()));
    this.set("txCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AMM entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AMM entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AMM", id.toString(), this);
    }
  }

  static load(id: string): AMM | null {
    return changetype<AMM | null>(store.get("AMM", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value!.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get updatedTimestamp(): BigInt {
    let value = this.get("updatedTimestamp");
    return value!.toBigInt();
  }

  set updatedTimestamp(value: BigInt) {
    this.set("updatedTimestamp", Value.fromBigInt(value));
  }

  get fcmAddress(): string {
    let value = this.get("fcmAddress");
    return value!.toString();
  }

  set fcmAddress(value: string) {
    this.set("fcmAddress", Value.fromString(value));
  }

  get marginEngineAddress(): string {
    let value = this.get("marginEngineAddress");
    return value!.toString();
  }

  set marginEngineAddress(value: string) {
    this.set("marginEngineAddress", Value.fromString(value));
  }

  get rateOracle(): string {
    let value = this.get("rateOracle");
    return value!.toString();
  }

  set rateOracle(value: string) {
    this.set("rateOracle", Value.fromString(value));
  }

  get termStartTimestamp(): BigInt {
    let value = this.get("termStartTimestamp");
    return value!.toBigInt();
  }

  set termStartTimestamp(value: BigInt) {
    this.set("termStartTimestamp", Value.fromBigInt(value));
  }

  get termEndTimestamp(): BigInt {
    let value = this.get("termEndTimestamp");
    return value!.toBigInt();
  }

  set termEndTimestamp(value: BigInt) {
    this.set("termEndTimestamp", Value.fromBigInt(value));
  }

  get tickSpacing(): BigInt {
    let value = this.get("tickSpacing");
    return value!.toBigInt();
  }

  set tickSpacing(value: BigInt) {
    this.set("tickSpacing", Value.fromBigInt(value));
  }

  get sqrtPriceX96(): BigInt {
    let value = this.get("sqrtPriceX96");
    return value!.toBigInt();
  }

  set sqrtPriceX96(value: BigInt) {
    this.set("sqrtPriceX96", Value.fromBigInt(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get tick(): BigInt {
    let value = this.get("tick");
    return value!.toBigInt();
  }

  set tick(value: BigInt) {
    this.set("tick", Value.fromBigInt(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value!.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class MarginEngine extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amm", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarginEngine entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save MarginEngine entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("MarginEngine", id.toString(), this);
    }
  }

  static load(id: string): MarginEngine | null {
    return changetype<MarginEngine | null>(store.get("MarginEngine", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }
}

export class Tick extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amm", Value.fromString(""));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Tick entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Tick entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Tick", id.toString(), this);
    }
  }

  static load(id: string): Tick | null {
    return changetype<Tick | null>(store.get("Tick", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Wallet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("positionCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Wallet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Wallet entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Wallet", id.toString(), this);
    }
  }

  static load(id: string): Wallet | null {
    return changetype<Wallet | null>(store.get("Wallet", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value!.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }

  get positionCount(): BigInt {
    let value = this.get("positionCount");
    return value!.toBigInt();
  }

  set positionCount(value: BigInt) {
    this.set("positionCount", Value.fromBigInt(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("updatedTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("amm", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("tickLower", Value.fromString(""));
    this.set("tickUpper", Value.fromString(""));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
    this.set("margin", Value.fromBigInt(BigInt.zero()));
    this.set("fixedTokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("variableTokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("isLiquidityProvider", Value.fromBoolean(false));
    this.set("isSettled", Value.fromBoolean(false));
    this.set("isEmpty", Value.fromBoolean(false));
    this.set("snapshotCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Position entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Position", id.toString(), this);
    }
  }

  static load(id: string): Position | null {
    return changetype<Position | null>(store.get("Position", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value!.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get updatedTimestamp(): BigInt {
    let value = this.get("updatedTimestamp");
    return value!.toBigInt();
  }

  set updatedTimestamp(value: BigInt) {
    this.set("updatedTimestamp", Value.fromBigInt(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tickLower(): string {
    let value = this.get("tickLower");
    return value!.toString();
  }

  set tickLower(value: string) {
    this.set("tickLower", Value.fromString(value));
  }

  get tickUpper(): string {
    let value = this.get("tickUpper");
    return value!.toString();
  }

  set tickUpper(value: string) {
    this.set("tickUpper", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get margin(): BigInt {
    let value = this.get("margin");
    return value!.toBigInt();
  }

  set margin(value: BigInt) {
    this.set("margin", Value.fromBigInt(value));
  }

  get fixedTokenBalance(): BigInt {
    let value = this.get("fixedTokenBalance");
    return value!.toBigInt();
  }

  set fixedTokenBalance(value: BigInt) {
    this.set("fixedTokenBalance", Value.fromBigInt(value));
  }

  get variableTokenBalance(): BigInt {
    let value = this.get("variableTokenBalance");
    return value!.toBigInt();
  }

  set variableTokenBalance(value: BigInt) {
    this.set("variableTokenBalance", Value.fromBigInt(value));
  }

  get isLiquidityProvider(): boolean {
    let value = this.get("isLiquidityProvider");
    return value!.toBoolean();
  }

  set isLiquidityProvider(value: boolean) {
    this.set("isLiquidityProvider", Value.fromBoolean(value));
  }

  get isSettled(): boolean {
    let value = this.get("isSettled");
    return value!.toBoolean();
  }

  set isSettled(value: boolean) {
    this.set("isSettled", Value.fromBoolean(value));
  }

  get isEmpty(): boolean {
    let value = this.get("isEmpty");
    return value!.toBoolean();
  }

  set isEmpty(value: boolean) {
    this.set("isEmpty", Value.fromBoolean(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value!.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }

  get snapshots(): Array<string> {
    let value = this.get("snapshots");
    return value!.toStringArray();
  }

  set snapshots(value: Array<string>) {
    this.set("snapshots", Value.fromStringArray(value));
  }

  get snapshotCount(): BigInt {
    let value = this.get("snapshotCount");
    return value!.toBigInt();
  }

  set snapshotCount(value: BigInt) {
    this.set("snapshotCount", Value.fromBigInt(value));
  }
}

export class PositionSnapshot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("position", Value.fromString(""));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
    this.set("margin", Value.fromBigInt(BigInt.zero()));
    this.set("fixedTokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("variableTokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("isSettled", Value.fromBoolean(false));
    this.set("isEmpty", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PositionSnapshot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PositionSnapshot entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PositionSnapshot", id.toString(), this);
    }
  }

  static load(id: string): PositionSnapshot | null {
    return changetype<PositionSnapshot | null>(
      store.get("PositionSnapshot", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value!.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get margin(): BigInt {
    let value = this.get("margin");
    return value!.toBigInt();
  }

  set margin(value: BigInt) {
    this.set("margin", Value.fromBigInt(value));
  }

  get fixedTokenBalance(): BigInt {
    let value = this.get("fixedTokenBalance");
    return value!.toBigInt();
  }

  set fixedTokenBalance(value: BigInt) {
    this.set("fixedTokenBalance", Value.fromBigInt(value));
  }

  get variableTokenBalance(): BigInt {
    let value = this.get("variableTokenBalance");
    return value!.toBigInt();
  }

  set variableTokenBalance(value: BigInt) {
    this.set("variableTokenBalance", Value.fromBigInt(value));
  }

  get isSettled(): boolean {
    let value = this.get("isSettled");
    return value!.toBoolean();
  }

  set isSettled(value: boolean) {
    this.set("isSettled", Value.fromBoolean(value));
  }

  get isEmpty(): boolean {
    let value = this.get("isEmpty");
    return value!.toBoolean();
  }

  set isEmpty(value: boolean) {
    this.set("isEmpty", Value.fromBoolean(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get burns(): Array<string> {
    let value = this.get("burns");
    return value!.toStringArray();
  }

  set burns(value: Array<string>) {
    this.set("burns", Value.fromStringArray(value));
  }

  get swaps(): Array<string> {
    let value = this.get("swaps");
    return value!.toStringArray();
  }

  set swaps(value: Array<string>) {
    this.set("swaps", Value.fromStringArray(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("amm", Value.fromString(""));
    this.set("position", Value.fromString(""));
    this.set("sender", Value.fromString(""));
    this.set("tickLower", Value.fromString(""));
    this.set("tickUpper", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Mint entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get tickLower(): string {
    let value = this.get("tickLower");
    return value!.toString();
  }

  set tickLower(value: string) {
    this.set("tickLower", Value.fromString(value));
  }

  get tickUpper(): string {
    let value = this.get("tickUpper");
    return value!.toString();
  }

  set tickUpper(value: string) {
    this.set("tickUpper", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("amm", Value.fromString(""));
    this.set("position", Value.fromString(""));
    this.set("sender", Value.fromString(""));
    this.set("tickLower", Value.fromString(""));
    this.set("tickUpper", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Burn entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Burn", id.toString(), this);
    }
  }

  static load(id: string): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get tickLower(): string {
    let value = this.get("tickLower");
    return value!.toString();
  }

  set tickLower(value: string) {
    this.set("tickLower", Value.fromString(value));
  }

  get tickUpper(): string {
    let value = this.get("tickUpper");
    return value!.toString();
  }

  set tickUpper(value: string) {
    this.set("tickUpper", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transaction", Value.fromString(""));
    this.set("amm", Value.fromString(""));
    this.set("sender", Value.fromString(""));
    this.set("position", Value.fromString(""));
    this.set("txIndex", Value.fromBigInt(BigInt.zero()));
    this.set("sqrtPriceX96", Value.fromBigInt(BigInt.zero()));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
    this.set("tick", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Swap entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get amm(): string {
    let value = this.get("amm");
    return value!.toString();
  }

  set amm(value: string) {
    this.set("amm", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get position(): string {
    let value = this.get("position");
    return value!.toString();
  }

  set position(value: string) {
    this.set("position", Value.fromString(value));
  }

  get txIndex(): BigInt {
    let value = this.get("txIndex");
    return value!.toBigInt();
  }

  set txIndex(value: BigInt) {
    this.set("txIndex", Value.fromBigInt(value));
  }

  get sqrtPriceX96(): BigInt {
    let value = this.get("sqrtPriceX96");
    return value!.toBigInt();
  }

  set sqrtPriceX96(value: BigInt) {
    this.set("sqrtPriceX96", Value.fromBigInt(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get tick(): BigInt {
    let value = this.get("tick");
    return value!.toBigInt();
  }

  set tick(value: BigInt) {
    this.set("tick", Value.fromBigInt(value));
  }
}
