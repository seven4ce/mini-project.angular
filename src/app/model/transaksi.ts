import { DetailTransaksi } from './detail-transaksi';

export class Transaksi {
  idTransaksi: string;
  namaTransaksi: string;
  kodeTransaksi: string;
  grandTotal: string;
  jumlahBayar: number;
  kembalian: string;
  transactionDate: string;
  transactionBy: string;
  detailTransaksi: DetailTransaksi[];
}
