import {
  Transaction,
  TransactionDescription,
} from "@/config/interfaces/transactions";
import { createMsgsConvertCoin } from "@/utils/cosmos/transactions/messages/convertCoin/convertCoin";
import { createMsgsConvertERC20 } from "@/utils/cosmos/transactions/messages/convertCoin/convertERC20";
import { ethToCantoAddress } from "@/utils/address.utils";
import {
  NEW_ERROR,
  NO_ERROR,
  PromiseWithError,
  errMsg,
} from "@/config/interfaces/errors";
import { TX_DESCRIPTIONS } from "@/config/consts/txDescriptions";
import { formatBalance } from "@/utils/tokenBalances.utils";
import { IBCToken } from "@/config/interfaces/tokens";

export async function convertNativeTokenTx(
  chainId: number,
  ethAccount: string,
  token: IBCToken,
  amount: string
): PromiseWithError<Transaction[]> {
  const { data: cantoAddress, error: cantoAddressError } =
    await ethToCantoAddress(ethAccount);
  if (cantoAddressError) {
    return NEW_ERROR("convertNativeTokenTx::" + errMsg(cantoAddressError));
  }

  return NO_ERROR([
    _convertCoinTx(
      chainId,
      cantoAddress,
      ethAccount,
      token.ibcDenom,
      amount,
      TX_DESCRIPTIONS.CONVERT_COIN(
        token.symbol,
        formatBalance(amount, token.decimals)
      )
    ),
  ]);
}

/**
 * TRANSACTION CREATORS
 * WILL NOT CHECK FOR VALIDITY OF PARAMS, MUST DO THIS BEFORE USING THESE CONSTRUCTORS
 */
export const _convertERC20Tx = (
  chainId: number,
  tokenAddress: string,
  amount: string,
  ethSender: string,
  cantoReceiver: string,
  description: TransactionDescription
): Transaction => {
  const convertERC20Tx = createMsgsConvertERC20({
    contract_address: tokenAddress,
    amount,
    cantoReceiver: cantoReceiver,
    ethSender: ethSender,
  });
  return {
    chainId,
    description,
    type: "COSMOS",
    msg: convertERC20Tx,
  };
};

const _convertCoinTx = (
  chainId: number,
  cantoSender: string,
  ethReceiver: string,
  tokenDenom: string,
  amount: string,
  description: TransactionDescription
): Transaction => {
  const convertCoinTx = createMsgsConvertCoin({
    cantoSender,
    ethReceiver,
    amount,
    denom: tokenDenom,
  });
  return {
    chainId,
    description,
    type: "COSMOS",
    msg: convertCoinTx,
  };
};
