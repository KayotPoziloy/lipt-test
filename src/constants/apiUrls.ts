// ДЛЯ ГРАФИКОВ https://iss.moex.com/cs/engines/stock/markets/shares/boardgroups/57/securities/<имя акции, например SBER>.json?candles=72&interval=10
// ДЛЯ ПОИСКА ИМЕН https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities.jsonp?iss.meta=off&iss.json=extended
// ДЛЯ ПОИСКА ИМЕН https://iss.moex.com/iss/securities.json?iss.meta=off&iss.json=extended&q=<вводить имя акции не менее 3 букв>
const SECURITIES_NAMES = 'https://iss.moex.com/iss/engines/stock/markets/shares/boardgroups/57/securities.jsonp?iss.meta=off&iss.json=extended';
const SECURITIES_PRICES = 'https://iss.moex.com/cs/engines/stock/markets/shares/boardgroups/57/securities/'

export { SECURITIES_NAMES, SECURITIES_PRICES };