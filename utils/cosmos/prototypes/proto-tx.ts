/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: evmos/erc20/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_3 from "./coin";
import * as pb_1 from "google-protobuf";
export namespace evmos.erc20.v1 {
  export class MsgConvertCoin extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            coin?: dependency_3.cosmos.base.v1beta1.Coin;
            receiver?: string;
            sender?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("coin" in data && data.coin != undefined) {
          this.coin = data.coin;
        }
        if ("receiver" in data && data.receiver != undefined) {
          this.receiver = data.receiver;
        }
        if ("sender" in data && data.sender != undefined) {
          this.sender = data.sender;
        }
      }
    }
    get coin() {
      return pb_1.Message.getWrapperField(
        this,
        dependency_3.cosmos.base.v1beta1.Coin,
        1
      ) as dependency_3.cosmos.base.v1beta1.Coin;
    }
    set coin(value: dependency_3.cosmos.base.v1beta1.Coin) {
      pb_1.Message.setWrapperField(this, 1, value);
    }
    get receiver() {
      return pb_1.Message.getField(this, 2) as string;
    }
    set receiver(value: string) {
      pb_1.Message.setField(this, 2, value);
    }
    get sender() {
      return pb_1.Message.getField(this, 3) as string;
    }
    set sender(value: string) {
      pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
      coin?: ReturnType<
        typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject
      >;
      receiver?: string;
      sender?: string;
    }) {
      const message = new MsgConvertCoin({});
      if (data.coin != null) {
        message.coin = dependency_3.cosmos.base.v1beta1.Coin.fromObject(
          data.coin
        );
      }
      if (data.receiver != null) {
        message.receiver = data.receiver;
      }
      if (data.sender != null) {
        message.sender = data.sender;
      }
      return message;
    }
    toObject() {
      const data: {
        coin?: ReturnType<
          typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject
        >;
        receiver?: string;
        sender?: string;
      } = {};
      if (this.coin != null) {
        data.coin = this.coin.toObject();
      }
      if (this.receiver != null) {
        data.receiver = this.receiver;
      }
      if (this.sender != null) {
        data.sender = this.sender;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (this.coin !== undefined)
        writer.writeMessage(1, this.coin, () => this.coin.serialize(writer));
      if (typeof this.receiver === "string" && this.receiver.length)
        writer.writeString(2, this.receiver);
      if (typeof this.sender === "string" && this.sender.length)
        writer.writeString(3, this.sender);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertCoin {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new MsgConvertCoin();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            reader.readMessage(
              message.coin,
              () =>
                (message.coin =
                  dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader))
            );
            break;
          case 2:
            message.receiver = reader.readString();
            break;
          case 3:
            message.sender = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MsgConvertCoin {
      return MsgConvertCoin.deserialize(bytes);
    }
  }
  export class MsgConvertCoinResponse extends pb_1.Message {
    constructor(data?: any[] | {}) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
      }
    }
    static fromObject(data: {}) {
      const message = new MsgConvertCoinResponse({});
      return message;
    }
    toObject() {
      const data: {} = {};
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(
      bytes: Uint8Array | pb_1.BinaryReader
    ): MsgConvertCoinResponse {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new MsgConvertCoinResponse();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MsgConvertCoinResponse {
      return MsgConvertCoinResponse.deserialize(bytes);
    }
  }
  export class MsgConvertERC20 extends pb_1.Message {
    constructor(
      data?:
        | any[]
        | {
            contract_address?: string;
            amount?: string;
            receiver?: string;
            sender?: string;
          }
    ) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
        if ("contract_address" in data && data.contract_address != undefined) {
          this.contract_address = data.contract_address;
        }
        if ("amount" in data && data.amount != undefined) {
          this.amount = data.amount;
        }
        if ("receiver" in data && data.receiver != undefined) {
          this.receiver = data.receiver;
        }
        if ("sender" in data && data.sender != undefined) {
          this.sender = data.sender;
        }
      }
    }
    get contract_address() {
      return pb_1.Message.getField(this, 1) as string;
    }
    set contract_address(value: string) {
      pb_1.Message.setField(this, 1, value);
    }
    get amount() {
      return pb_1.Message.getField(this, 2) as string;
    }
    set amount(value: string) {
      pb_1.Message.setField(this, 2, value);
    }
    get receiver() {
      return pb_1.Message.getField(this, 3) as string;
    }
    set receiver(value: string) {
      pb_1.Message.setField(this, 3, value);
    }
    get sender() {
      return pb_1.Message.getField(this, 4) as string;
    }
    set sender(value: string) {
      pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
      contract_address?: string;
      amount?: string;
      receiver?: string;
      sender?: string;
    }) {
      const message = new MsgConvertERC20({});
      if (data.contract_address != null) {
        message.contract_address = data.contract_address;
      }
      if (data.amount != null) {
        message.amount = data.amount;
      }
      if (data.receiver != null) {
        message.receiver = data.receiver;
      }
      if (data.sender != null) {
        message.sender = data.sender;
      }
      return message;
    }
    toObject() {
      const data: {
        contract_address?: string;
        amount?: string;
        receiver?: string;
        sender?: string;
      } = {};
      if (this.contract_address != null) {
        data.contract_address = this.contract_address;
      }
      if (this.amount != null) {
        data.amount = this.amount;
      }
      if (this.receiver != null) {
        data.receiver = this.receiver;
      }
      if (this.sender != null) {
        data.sender = this.sender;
      }
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (
        typeof this.contract_address === "string" &&
        this.contract_address.length
      )
        writer.writeString(1, this.contract_address);
      if (typeof this.amount === "string" && this.amount.length)
        writer.writeString(2, this.amount);
      if (typeof this.receiver === "string" && this.receiver.length)
        writer.writeString(3, this.receiver);
      if (typeof this.sender === "string" && this.sender.length)
        writer.writeString(4, this.sender);
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertERC20 {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new MsgConvertERC20();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          case 1:
            message.contract_address = reader.readString();
            break;
          case 2:
            message.amount = reader.readString();
            break;
          case 3:
            message.receiver = reader.readString();
            break;
          case 4:
            message.sender = reader.readString();
            break;
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MsgConvertERC20 {
      return MsgConvertERC20.deserialize(bytes);
    }
  }
  export class MsgConvertERC20Response extends pb_1.Message {
    constructor(data?: any[] | {}) {
      super();
      pb_1.Message.initialize(
        this,
        Array.isArray(data) ? data : [],
        0,
        -1,
        [],
        []
      );
      if (!Array.isArray(data) && typeof data == "object") {
      }
    }
    static fromObject(data: {}) {
      const message = new MsgConvertERC20Response({});
      return message;
    }
    toObject() {
      const data: {} = {};
      return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
      const writer = w || new pb_1.BinaryWriter();
      if (!w) return writer.getResultBuffer();
    }
    static deserialize(
      bytes: Uint8Array | pb_1.BinaryReader
    ): MsgConvertERC20Response {
      const reader =
          bytes instanceof pb_1.BinaryReader
            ? bytes
            : new pb_1.BinaryReader(bytes),
        message = new MsgConvertERC20Response();
      while (reader.nextField()) {
        if (reader.isEndGroup()) break;
        switch (reader.getFieldNumber()) {
          default:
            reader.skipField();
        }
      }
      return message;
    }
    serializeBinary(): Uint8Array {
      return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MsgConvertERC20Response {
      return MsgConvertERC20Response.deserialize(bytes);
    }
  }
}
