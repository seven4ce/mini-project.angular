import { DetailTransaksi } from './detail-transaksi';

export class Transaksi {
  idTransaksi: string;
  namaTransaksi: string;
  kodeTransaksi: string;
  grandTotal: number;
  jumlahBayar: number;
  kembalian: number;
  transactionDate: string;
  transactionBy: string;
  detailTransaksi: DetailTransaksi[];
}
