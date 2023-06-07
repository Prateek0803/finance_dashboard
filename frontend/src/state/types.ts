export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}
export interface Month {
  id: string;
  expenses: number;
  month: string;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: number;
}
export interface ExpensesbyCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface GetKpisResponse {
  id: String;
  _id: String;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesbyCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: String;
  _id: String;
  __v: number;
  price: number;
  expense: number;
  transaction: Array<String>;
  createdAt: string;
  updatedAt: string;
}
export interface GetTransactionsResponse {
  id: String;
  _id: String;
  __v: number;
  buyer: number;
  amount: number;
  productIds: Array<String>;
  createdAt: string;
  updatedAt: string;
}