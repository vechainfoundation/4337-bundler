/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type UserOperationStruct = {
  sender: AddressLike;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  sender: string,
  nonce: bigint,
  initCode: string,
  callData: string,
  callGasLimit: bigint,
  verificationGasLimit: bigint,
  preVerificationGas: bigint,
  maxFeePerGas: bigint,
  maxPriorityFeePerGas: bigint,
  paymasterAndData: string,
  signature: string
] & {
  sender: string;
  nonce: bigint;
  initCode: string;
  callData: string;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: string;
  signature: string;
};

export interface IAggregatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "aggregateSignatures"
      | "validateSignatures"
      | "validateUserOpSignature"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "aggregateSignatures",
    values: [UserOperationStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "validateSignatures",
    values: [UserOperationStruct[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOpSignature",
    values: [UserOperationStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "aggregateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOpSignature",
    data: BytesLike
  ): Result;
}

export interface IAggregator extends BaseContract {
  connect(runner?: ContractRunner | null): IAggregator;
  waitForDeployment(): Promise<this>;

  interface: IAggregatorInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  aggregateSignatures: TypedContractMethod<
    [userOps: UserOperationStruct[]],
    [string],
    "view"
  >;

  validateSignatures: TypedContractMethod<
    [userOps: UserOperationStruct[], signature: BytesLike],
    [void],
    "view"
  >;

  validateUserOpSignature: TypedContractMethod<
    [userOp: UserOperationStruct],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "aggregateSignatures"
  ): TypedContractMethod<[userOps: UserOperationStruct[]], [string], "view">;
  getFunction(
    nameOrSignature: "validateSignatures"
  ): TypedContractMethod<
    [userOps: UserOperationStruct[], signature: BytesLike],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "validateUserOpSignature"
  ): TypedContractMethod<[userOp: UserOperationStruct], [string], "view">;

  filters: {};
}
