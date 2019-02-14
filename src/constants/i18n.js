const enTranslation = {
  languageSetting: 'Language setting',
  account: 'Account',
  settings: 'Settings',
  logout: 'Logout',
  transfer: 'Transfer',
  selectAnotherToken: 'Select Another Token',
  iGAS: 'iGAS',
  iRAM: 'iRAM',
  accountName: 'ID',
  plasePastePrivateKey: 'Please paste your private key',
  login: 'Login',
  networkSetting: 'Network setting',
  registerNewNetwork: 'Register new network',
  save: 'Save',
  pleaseAddToken: "If you can't find your token on the list, please add it!",
  transactionFrom: 'FROM',
  transactionTo: 'TO',
  transactionAmount: 'AMOUNT',
  transactioniGasPrice: 'iGAS Price',
  transactioniGasLimit: 'iGAS Limit',
  transactionSend: 'SEND',
  sendToken: 'SEND %{token}',
  transactionFailure: 'Transaction failure',
  txid: 'TXID',
  gasUsage: 'Gas usage',
  message: 'Message',
  ramUsage: 'Ram usage',
  transactionReceipt: 'Transaction receipt',
  receiptToken: 'Token',
  receiptSender: 'Sender',
  receiptReceiver: 'Receiver',
  receiptAmount: 'Amount',
  receiptMemo: 'Memo',
  receiptContractFunctionName: 'Contract/function name',
  viewResourceDetail: 'View resource(GAS, RAM) detail',
  howManyBytesWillYouBuy: 'How many bytes will you buy?',
  howManyBytesWillYouSell: 'How many bytes will you sell?',
  howManyBytesWillYouLend: 'How many bytes will you transfer?',
  buy: 'BUY',
  sell: 'SELL',
  lend: 'TRANSFER',
  bytes: 'Bytes',
  whichAccountWillGetBoughtRAM: 'Which account will get the bought RAM? (default: your account)',
  whichAccountWillGetSoldIost: 'Which account will get the IOST for selling RAM? (default: your account)',
  whichAccountWillGetLendRam: 'Which account will you transfer your RAM?',
  whichAccountWillGetGasThroughPledge: 'Which account will get the GAS? (default: your account)',
  currentBuyRamPrice: 'buy price per 1 byte: %{price} IOST',
  currentSellRamPrice: 'sell price per 1 byte: %{price} IOST',
  pledge: 'PLEDGE',
  unpledge: 'UNPLEDGE(%{length})',
  gas: 'GAS',
  howManyIOSTWillYouPledge: 'How many IOST will you pledge?',
  currentlyYouArePledging: "Currently you're pledging for %{length} accounts.",
  unpledgeAndGetBackYourIOST: 'You could unpledge and get back your IOST.',
  makeSureThatAfterUnpledging: 'Make sure that, after unpledging,',
  unpledgingDestroyGas: 'your GAS earned by pledging IOST will be destroyed.',
  unpledgingFreezeIOST: 'returned IOST will be "frozen" status during 72 hours.',
  invalidLoginInfo: 'Invalid login information. Please check your ID and private key.',
}

const koTranslation = {
  languageSetting: '언어 설정',
  account: '계정',
  settings: '설정',
  logout: '로그아웃',
  transfer: '토큰 전송',
  selectAnotherToken: '다른 토큰 선택하기',
  iGAS: '가스',
  iRAM: '램',
  accountName: '아이디',
  plasePastePrivateKey: '개인 키를 붙여넣어 주세요',
  login: '로그인',
  networkSetting: '네트워크 설정',
  registerNewNetwork: '새로운 네트워크 등록하기',
  save: '저장',
  pleaseAddToken: '찾고 계신 토큰이 목록에 없다면, 새로 토큰을 등록해주세요!',
  transactionFrom: '받는 사람',
  transactionTo: '보내는 사람',
  transactionAmount: '금액',
  transactioniGasPrice: '가스 비용',
  transactioniGasLimit: '가스 리밋',
  transactionSend: '전송',
  sendToken: '%{token} 전송',
  txid: '트랜잭션 아이디(TXID)',
  gasUsage: '가스 사용량',
  message: '메시지',
  ramUsage: '램 사용량',
  transactionReceipt: '트랜잭션 영수증',
  receiptToken: '토큰 종류',
  receiptSender: '보낸 사람(Sender)',
  receiptReceiver: '받은 사람(Receiver)',
  receiptAmount: '금액',
  receiptMemo: '메모',
  receiptContractFunctionName: '컨트랙트/함수명',
  viewResourceDetail: '자원(가스, 램) 상세보기',
  howManyBytesWillYouBuy: '몇 바이트의 램을 사시겠습니까?',
  howManyBytesWillYouSell: '몇 바이트의 램을 파시겠습니까?',
  howManyBytesWillYouLend: '몇 바이트의 램을 전송하시겠습니까?',
  buy: '구매하기',
  sell: '판매하기',
  lend: '전송하기',
  bytes: '바이트',
  whichAccountWillGetBoughtRAM: '어떤 계정으로 구매한 램을 받겠습니까? (기본 값: 현재 계정)',
  whichAccountWillGetSoldIost: '어떤 계정으로 램의 판매금(IOST)을 받겠습니까? (기본 값: 현재 계정)',
  whichAccountWillGetGasThroughPledge: '어떤 계정으로 GAS를 받겠습니까? (기본 값: 현재 계정)',
  whichAccountWillGetLendRam: '어떤 계정으로 램을 전송하시겠습니까?',
  currentBuyRamPrice: '1 바이트 당 구매가격: %{price} IOST',
  currentSellRamPrice: '1 바이트 당 판매가격: %{price} IOST',
  pledge: '저당설정',
  unpledge: '저당해제(%{length})',
  gas: '가스',
  howManyIOSTWillYouPledge: '얼마만큼의 IOST를 저당설정 하시겠습니까?',
  currentlyYouArePledging: "현재 %{length} 개의 계정에 저당이 설정되어있습니다.",
  unpledgeAndGetBackYourIOST: '저당해제를 통해 IOST를 반환 받을 수 있습니다.',
  makeSureThatAfterUnpledging: '저당해제를 하고 나면,',
  unpledgingDestroyGas: '저당설정을 통해 얻어진 GAS는 소멸됩니다.',
  unpledgingFreezeIOST: '반환 된 IOST는 72시간 동안 "얼려진" 상태가 되어 사용할 수 없습니다.',
  invalidLoginInfo: '올바르지 않은 로그인 정보입니다. 올바른 아이디와 개인 키를 입력해주세요.',
}

export default {
  en: enTranslation,
  ko: koTranslation
}
