import { BigNumberish, TransactionReceipt } from 'ethers'
import { UserOperation } from '@account-abstraction/contract-types'

/**
 * RPC calls return types
 */

/**
 * return value from estimateUserOpGas
 */
export interface EstimateUserOpGasResult {
  /**
   * the preVerification gas used by this UserOperation.
   */
  preVerificationGas: BigNumberish
  /**
   * gas used for validation of this UserOperation, including account creation
   */
  verificationGasLimit: BigNumberish
  /**
   * the deadline after which this UserOperation is invalid (not a gas estimation parameter, but returned by validation
   */
  deadline?: BigNumberish
  /**
   * estimated cost of calling the account with the given callData
   */
  callGasLimit: BigNumberish
}

export interface UserOperationByHashResponse {
  userOperation: UserOperation
  entryPoint: string
  blockNumber: number
  blockHash: string
  transactionHash: string
}

export interface UserOperationReceipt {
  /// the request hash
  userOpHash: string
  /// the account sending this UserOperation
  sender: string
  /// account nonce
  nonce: BigNumberish
  /// the paymaster used for this userOp (or empty)
  paymaster?: string
  /// actual payment for this UserOperation (by either paymaster or account)
  actualGasCost: BigNumberish
  /// total gas used by this UserOperation (including preVerification, creation, validation and execution)
  actualGasUsed: BigNumberish
  /// did this execution completed without revert
  success: boolean
  /// in case of revert, this is the revert reason
  reason?: string
  /// the logs generated by this UserOperation (not including logs of other UserOperations in the same bundle)
  logs: any[]

  // the transaction receipt for this transaction (of entire bundle, not only this UserOperation)
  receipt: TransactionReceipt
}
