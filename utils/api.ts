import { USERS } from '../constants'

const checkUsers = async (query: string) => USERS.findIndex(item => item.accountId === query) != -1 ? true : false;

export async function checkAccountId(accountId: string) {
  let result = await checkUsers(accountId);
  return result;
}