import express from 'express';

const router = express.Router();

type SalesRegister = {
  Date: string;
  Particulars: string;
  'Voucher Type': string;
  'Voucher No.': string;
  'GSTIN/UIN': string;
  Quantity: string;
  Rate: string;
  Value: string;
  'Gross Total': string;
  Sales: string;
  Discount: string;
  CGST: string;
  SGST: string;
  IGST: string;
};

const salesRegisterData: SalesRegister[] = [
  {
    Date: '1-Jan-24',
    Particulars: 'Jayanth mudili',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1225',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '3502.91/NOS',
    Value: '3502.91',
    'Gross Total': '2989.99',
    Sales: '3502.91',
    Discount: '-600.00',
    CGST: '43.54',
    SGST: '43.54',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Nikunj Patel',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1224',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2920.39/NOS',
    Value: '2920.39',
    'Gross Total': '2390.00',
    Sales: '2920.39',
    Discount: '-600.00',
    CGST: '69.61',
    SGST: '69.61',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Pawan Pandurangi',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1222',
    'GSTIN/UIN': '',
    Quantity: '2 NOS',
    Rate: '4411.65/NOS',
    Value: '8823.30',
    'Gross Total': '5380.00',
    Sales: '8823.30',
    Discount: '-3600.00',
    CGST: '',
    SGST: '',
    IGST: '156.70',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Tafang Bagang',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1221',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2920.39/NOS',
    Value: '2920.39',
    'Gross Total': '2390.00',
    Sales: '2920.39',
    Discount: '-600.00',
    CGST: '69.61',
    SGST: '69.61',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Lalremruati Chawngthu',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1220',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2920.39/NOS',
    Value: '2920.39',
    'Gross Total': '2390.00',
    Sales: '2920.39',
    Discount: '-600.00',
    CGST: '69.61',
    SGST: '69.61',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Mihir Merchant',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1219',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2552.43/NOS',
    Value: '2552.43',
    'Gross Total': '1290.00',
    Sales: '2552.43',
    Discount: '-1300.00',
    CGST: '',
    SGST: '',
    IGST: '37.57',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Sandeep behera',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1218',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2520.39/NOS',
    Value: '2520.39',
    'Gross Total': '2390.00',
    Sales: '2520.39',
    Discount: '-200.00',
    CGST: '',
    SGST: '',
    IGST: '69.61',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Mohet Agrawal',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1217',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '3873.79/NOS',
    Value: '3873.79',
    'Gross Total': '3990.00',
    Sales: '3873.79',
    Discount: '',
    CGST: '116.21',
    SGST: '116.21',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'manish vij',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1216',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2932.04/NOS',
    Value: '2932.04',
    'Gross Total': '1990.00',
    Sales: '2932.04',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '57.96',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Kanan Asher',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1215',
    'GSTIN/UIN': '',
    Quantity: '3 NOS',
    Rate: '3605.83/NOS',
    Value: '10817.48',
    'Gross Total': '8670.00',
    Sales: '10817.48',
    Discount: '-2400.00',
    CGST: '',
    SGST: '',
    IGST: '252.52',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Sugnyan S Prasad',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1214',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2911.65/NOS',
    Value: '2911.65',
    'Gross Total': '2689.99',
    Sales: '2911.65',
    Discount: '-300.00',
    CGST: '39.17',
    SGST: '39.17',
    IGST: '',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Deepu Jacob Thomas',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1213',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2932.04/NOS',
    Value: '2932.04',
    'Gross Total': '1990.00',
    Sales: '2932.04',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '57.96',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Anindita Das',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1212',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2932.04/NOS',
    Value: '2932.04',
    'Gross Total': '1990.00',
    Sales: '2932.04',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '57.96',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'pratik danani',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1211',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2932.04/NOS',
    Value: '2932.04',
    'Gross Total': '1990.00',
    Sales: '2932.04',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '57.96',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Urvi Patel',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1210',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2914.56/NOS',
    Value: '2914.56',
    'Gross Total': '2590.00',
    Sales: '2914.56',
    Discount: '-400.00',
    CGST: '',
    SGST: '',
    IGST: '75.44',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Shilpa Reddy',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1209',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '5844.66/NOS',
    Value: '5844.66',
    'Gross Total': '4990.00',
    Sales: '5844.66',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '145.34',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Kavya Bhat',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1208',
    'GSTIN/UIN': '',
    Quantity: '12 NOS',
    Rate: '1609.22/NOS',
    Value: '19310.68',
    'Gross Total': '14740.00',
    Sales: '19310.68',
    Discount: '-5000.00',
    CGST: '',
    SGST: '',
    IGST: '429.32',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Nuzhat Sheikh',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1207',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '5844.66/NOS',
    Value: '5844.66',
    'Gross Total': '4990.00',
    Sales: '5844.66',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '145.34',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Sagar patel',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1206',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '5844.66/NOS',
    Value: '5844.66',
    'Gross Total': '4990.00',
    Sales: '5844.66',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '145.34',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Sumana Paruchuri',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1205',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '5844.66/NOS',
    Value: '5844.66',
    'Gross Total': '4990.00',
    Sales: '5844.66',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '145.34',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Debraj Raychand Raychand',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1204',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2914.56/NOS',
    Value: '2914.56',
    'Gross Total': '2590.00',
    Sales: '2914.56',
    Discount: '-400.00',
    CGST: '',
    SGST: '',
    IGST: '75.44',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Neha Arora',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1203',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '4388.35/NOS',
    Value: '4388.35',
    'Gross Total': '3490.00',
    Sales: '4388.35',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '101.65',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Niren Khandhar',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1202',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '4388.35/NOS',
    Value: '4388.35',
    'Gross Total': '3490.00',
    Sales: '4388.35',
    Discount: '-1000.00',
    CGST: '',
    SGST: '',
    IGST: '101.65',
  },
  {
    Date: '1-Jan-24',
    Particulars: 'Veena ADVANI',
    'Voucher Type': 'Sales',
    'Voucher No.': 'AOM#1201',
    'GSTIN/UIN': '',
    Quantity: '1 NOS',
    Rate: '2911.65/NOS',
    Value: '2911.65',
    'Gross Total': '2690.00',
    Sales: '2911.65',
    Discount: '-300.00',
    CGST: '',
    SGST: '',
    IGST: '78.35',
  },
];

interface DayBook {
  date: string;
  particulars: string;
  vchType: string;
  vchNo: string;
  debitAmount?: number;
  creditAmount?: number;
}

const dayBookData: DayBook[] = [
  { date: '01-Oct-23', particulars: 'Piyush Savaliya', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/663', creditAmount: 1197.00 },
  { date: '01-Oct-23', particulars: 'Chris Yannick Bongai', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/661', creditAmount: 1396.01 },
  { date: '01-Oct-23', particulars: 'Subhradeep Naskar', vchType: 'Sales', vchNo: 'BSPL/2023-24/659', debitAmount: 1197.00 },
  { date: '01-Oct-23', particulars: 'Biggeesh Venkalath', vchType: 'Sales', vchNo: 'BSPL/2023-24/660', debitAmount: 1647.00 },
  { date: '01-Oct-23', particulars: 'Antaryami Padhi', vchType: 'Sales', vchNo: 'BSPL/2023-24/664', debitAmount: 1396.00 },
  { date: '01-Oct-23', particulars: 'Shinu Saibini', vchType: 'Sales', vchNo: 'BSPL/2023-24/662', debitAmount: 1650.00 },
  { date: '02-Oct-23', particulars: 'Umesh Pandey', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/666', creditAmount: 1996.00 },
  { date: '02-Oct-23', particulars: 'DR RITESH KUMAR', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/667', creditAmount: 1197.00 },
  { date: '02-Oct-23', particulars: 'Sunil Trivedi', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/672', creditAmount: 1396.00 },
  { date: '02-Oct-23', particulars: 'Liline Rabha', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/673', creditAmount: 1127.01 },
  { date: '02-Oct-23', particulars: 'Komal Sukhdeve', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/677', creditAmount: 1396.00 },
  { date: '02-Oct-23', particulars: 'Dr Subodh K Gupta', vchType: 'Sales', vchNo: 'BSPL/2023-24/665', debitAmount: 1647.00 },
  { date: '02-Oct-23', particulars: 'Siddharth', vchType: 'Sales', vchNo: 'BSPL/2023-24/668', debitAmount: 1197.01 },
  { date: '02-Oct-23', particulars: 'Komal Ben', vchType: 'Sales', vchNo: 'BSPL/2023-24/669', debitAmount: 1396.00 },
  { date: '02-Oct-23', particulars: 'Kartheek', vchType: 'Sales', vchNo: 'BSPL/2023-24/670', debitAmount: 1396.00 },
  { date: '02-Oct-23', particulars: 'Monidipta Padha', vchType: 'Sales', vchNo: 'BSPL/2023-24/671', debitAmount: 1396.00 },
  { date: '02-Oct-23', particulars: 'Milan Jain', vchType: 'Sales', vchNo: 'BSPL/2023-24/674', debitAmount: 1197.00 },
  { date: '02-Oct-23', particulars: 'Zahira Dsouza', vchType: 'Sales', vchNo: 'BSPL/2023-24/675', debitAmount: 1647.00 },
  { date: '02-Oct-23', particulars: 'Mohit Jandial', vchType: 'Sales', vchNo: 'BSPL/2023-24/676', debitAmount: 1256.00 },
  { date: '03-Oct-23', particulars: 'Gaurav Dalakoti', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/694', creditAmount: 1197.00 },
  { date: '03-Oct-23', particulars: 'Harindar Kumar', vchType: 'Sales', vchNo: 'BSPL/2023-24/678', debitAmount: 2792.00 },
  { date: '03-Oct-23', particulars: 'Amit Gaurav', vchType: 'Sales', vchNo: 'BSPL/2023-24/679', debitAmount: 1396.00 },
  { date: '03-Oct-23', particulars: 'Jishnu Kv', vchType: 'Sales', vchNo: 'BSPL/2023-24/695', debitAmount: 1186.00 },
  { date: '04-Oct-23', particulars: 'Nidhi Dahiya', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/696', creditAmount: 1547.00 },
  { date: '04-Oct-23', particulars: 'Varun Jain', vchType: 'Sales', vchNo: 'BSPL/2023-24/697', debitAmount: 1396.00 },
  { date: '05-Oct-23', particulars: 'Ronald', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/703', creditAmount: 1396.00 },
  { date: '05-Oct-23', particulars: 'Santosh Kumar Gupta', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/704', creditAmount: 1127.00 },
  { date: '05-Oct-23', particulars: 'Krunal Modi', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/705', creditAmount: 3043.00 },
  { date: '05-Oct-23', particulars: 'Kedar Dalai', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/706', creditAmount: 1396.00 },
  { date: '05-Oct-23', particulars: 'Rajan Parihar', vchType: 'Sales', vchNo: 'BSPL/2023-24/699', debitAmount: 1186.00 },
  { date: '05-Oct-23', particulars: 'Manish Kumar Lilha', vchType: 'Sales', vchNo: 'BSPL/2023-24/702', debitAmount: 1396.00 },
  { date: '06-Oct-23', particulars: 'Sourabh Gava', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/707', creditAmount: 1186.00 },
  { date: '06-Oct-23', particulars: 'Pawan Kumar', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/709', creditAmount: 1396.00 },
  { date: '06-Oct-23', particulars: 'Lalit Dugad', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/711', creditAmount: 1396.00 },
  { date: '06-Oct-23', particulars: 'Kavresh Nalesha', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/716', creditAmount: 1396.00 },
  { date: '06-Oct-23', particulars: 'Sumanth Reddy', vchType: 'Sales', vchNo: 'BSPL/2023-24/710', debitAmount: 1256.00 },
  { date: '06-Oct-23', particulars: 'LaNkEsH', vchType: 'Sales', vchNo: 'BSPL/2023-24/712', debitAmount: 1396.00 },
  { date: '06-Oct-23', particulars: 'Jennifer', vchType: 'Sales', vchNo: 'BSPL/2023-24/714', debitAmount: 1999.00 },
  { date: '06-Oct-23', particulars: 'Rupali Shiromani', vchType: 'Sales', vchNo: 'BSPL/2023-24/713', debitAmount: 1650.00 },
  { date: '07-Oct-23', particulars: 'Fatima Saeed', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/719', creditAmount: 1647.00 },
  { date: '07-Oct-23', particulars: 'Chris Yannick Bongai', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/726', creditAmount: 1996.00 },
  { date: '07-Oct-23', particulars: 'Fatima Saeed', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/721', creditAmount: 1647.00 },
  { date: '07-Oct-23', particulars: 'ROHIT AGARWAL', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/727', creditAmount: 1647.00 },
  { date: '07-Oct-23', particulars: 'Satish Kumar M', vchType: 'Sales', vchNo: 'BSPL/2023-24/717', debitAmount: 1396.01 },
  { date: '07-Oct-23', particulars: 'Avinash Phapal', vchType: 'Sales', vchNo: 'BSPL/2023-24/718', debitAmount: 2372.00 },
  { date: '07-Oct-23', particulars: 'Kirti Surana', vchType: 'Sales', vchNo: 'BSPL/2023-24/720', debitAmount: 1396.00 },
  { date: '07-Oct-23', particulars: 'Amit Srivas', vchType: 'Sales', vchNo: 'BSPL/2023-24/722', debitAmount: 1186.00 },
  { date: '07-Oct-23', particulars: 'Vinay Kumar', vchType: 'Sales', vchNo: 'BSPL/2023-24/723', debitAmount: 1116.00 },
  { date: '07-Oct-23', particulars: 'Dhruvraj', vchType: 'Sales', vchNo: 'BSPL/2023-24/724', debitAmount: 1396.00 },
  { date: '07-Oct-23', particulars: 'Monika Dhameliya', vchType: 'Sales', vchNo: 'BSPL/2023-24/725', debitAmount: 1396.00 },
  { date: '08-Oct-23', particulars: 'Gireesh', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/733', creditAmount: 1197.01 },
  { date: '08-Oct-23', particulars: 'Somen Ghosh', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/737', creditAmount: 2792.00 },
  { date: '08-Oct-23', particulars: 'Vishal Panchal', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/739', creditAmount: 1396.00 },
  { date: '08-Oct-23', particulars: 'Bhuva Sagar', vchType: 'Credit Note', vchNo: 'BSPL/2023-24/741', creditAmount: 1396.00 },
  { date: '08-Oct-23', particulars: 'Jeetu', vchType: 'Sales', vchNo: 'BSPL/2023-24/728', debitAmount: 1197.00 },
  { date: '08-Oct-23', particulars: 'Rahul Mahajan', vchType: 'Sales', vchNo: 'BSPL/2023-24/729', debitAmount: 1647.00 },
  { date: '08-Oct-23', particulars: 'Shivaling Sannalli', vchType: 'Sales', vchNo: 'BSPL/2023-24/730', debitAmount: 1197.01 },
  { date: '08-Oct-23', particulars: 'Rajarshi Mandal', vchType: 'Sales', vchNo: 'BSPL/2023-24/731', debitAmount: 1996.00 },
  { date: '08-Oct-23', particulars: 'Oviyaa Vijay', vchType: 'Sales', vchNo: 'BSPL/2023-24/735', debitAmount: 1186.00 },
];


// Route to return the sample data
router.get<{}, SalesRegister[]>('/sales_register', (req, res) => {
  res.json(salesRegisterData);
});

// Route to return the sample data
router.get<{}, DayBook[]>('/day_book', (req, res) => {
  return res.json(dayBookData);
});

export default router;
