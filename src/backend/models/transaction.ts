export interface Transaction {
  id: string;
  amount: number;
  status: 'success' | 'pending';
  paymentMethod: string;
  lastUpdate: string;
  supporter: string;
  campaign: string;
  donationID: string;
  donationDate: string;
  successDate: string;
  frequency: string;
  paymentProcessor: string;
  paymentID: string;
  creditCard: string;
  payoutAmount: number;
  feeCovered: boolean;
  effectiveFee: number;
  designation?: string;
}
