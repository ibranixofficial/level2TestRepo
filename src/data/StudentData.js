
const students = [
  {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed.khan01@example.com",
    phoneNo: "03001234501",
    address: "Bannu, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=11"
  },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima.ali02@example.com",
    phoneNo: "03001234502",
    address: "Peshawar, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    id: 3,
    name: "Usman Malik",
    email: "usman.malik03@example.com",
    phoneNo: "03001234503",
    address: "Lahore, Punjab",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    id: 4,
    name: "Ayesha Noor",
    email: "ayesha.noor04@example.com",
    phoneNo: "03001234504",
    address: "Islamabad, Pakistan",
    image: "https://i.pravatar.cc/300?img=44"
  },
  {
    id: 5,
    name: "Hamza Shah",
    email: "hamza.shah05@example.com",
    phoneNo: "03001234505",
    address: "Karachi, Sindh",
    image: "https://i.pravatar.cc/300?img=13"
  },
  {
    id: 6,
    name: "Zainab Ahmed",
    email: "zainab.ahmed06@example.com",
    phoneNo: "03001234506",
    address: "Multan, Punjab",
    image: "https://i.pravatar.cc/300?img=48"
  },
  {
    id: 7,
    name: "Bilal Hussain",
    email: "bilal.hussain07@example.com",
    phoneNo: "03001234507",
    address: "Quetta, Balochistan",
    image: "https://i.pravatar.cc/300?img=14"
  },
  {
    id: 8,
    name: "Maryam Iqbal",
    email: "maryam.iqbal08@example.com",
    phoneNo: "03001234508",
    address: "Faisalabad, Punjab",
    image: "https://i.pravatar.cc/300?img=49"
  },
  {
    id: 9,
    name: "Hassan Raza",
    email: "hassan.raza09@example.com",
    phoneNo: "03001234509",
    address: "Swat, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=15"
  },
  {
    id: 10,
    name: "Sana Tariq",
    email: "sana.tariq10@example.com",
    phoneNo: "03001234510",
    address: "Rawalpindi, Punjab",
    image: "https://i.pravatar.cc/300?img=45"
  },
  {
    id: 11,
    name: "Ali Hassan",
    email: "ali.hassan11@example.com",
    phoneNo: "03001234511",
    address: "Mardan, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=16"
  },
  {
    id: 12,
    name: "Hira Malik",
    email: "hira.malik12@example.com",
    phoneNo: "03001234512",
    address: "Sialkot, Punjab",
    image: "https://i.pravatar.cc/300?img=46"
  },
  {
    id: 13,
    name: "Danish Akram",
    email: "danish.akram13@example.com",
    phoneNo: "03001234513",
    address: "Abbottabad, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=17"
  },
  {
    id: 14,
    name: "Iqra Javed",
    email: "iqra.javed14@example.com",
    phoneNo: "03001234514",
    address: "Gujranwala, Punjab",
    image: "https://i.pravatar.cc/300?img=50"
  },
  {
    id: 15,
    name: "Saad Qureshi",
    email: "saad.qureshi15@example.com",
    phoneNo: "03001234515",
    address: "Hyderabad, Sindh",
    image: "https://i.pravatar.cc/300?img=18"
  },
  {
    id: 16,
    name: "Laiba Khan",
    email: "laiba.khan16@example.com",
    phoneNo: "03001234516",
    address: "Bannu, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=51"
  },
  {
    id: 17,
    name: "Farhan Aziz",
    email: "farhan.aziz17@example.com",
    phoneNo: "03001234517",
    address: "Bahawalpur, Punjab",
    image: "https://i.pravatar.cc/300?img=19"
  },
  {
    id: 18,
    name: "Maham Siddiqui",
    email: "maham.siddiqui18@example.com",
    phoneNo: "03001234518",
    address: "Karachi, Sindh",
    image: "https://i.pravatar.cc/300?img=52"
  },
  {
    id: 19,
    name: "Taha Mehmood",
    email: "taha.mehmood19@example.com",
    phoneNo: "03001234519",
    address: "Peshawar, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=20"
  },
  {
    id: 20,
    name: "Anaya Sheikh",
    email: "anaya.sheikh20@example.com",
    phoneNo: "03001234520",
    address: "Lahore, Punjab",
    image: "https://i.pravatar.cc/300?img=53"
  },
  {
    id: 21,
    name: "Rehan Ahmed",
    email: "rehan.ahmed21@example.com",
    phoneNo: "03001234521",
    address: "Kohat, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=21"
  },
  {
    id: 22,
    name: "Eman Fatima",
    email: "eman.fatima22@example.com",
    phoneNo: "03001234522",
    address: "Islamabad, Pakistan",
    image: "https://i.pravatar.cc/300?img=54"
  },
  {
    id: 23,
    name: "Shahzaib Khan",
    email: "shahzaib.khan23@example.com",
    phoneNo: "03001234523",
    address: "Dera Ismail Khan, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=22"
  },
  {
    id: 24,
    name: "Noor Fatima",
    email: "noor.fatima24@example.com",
    phoneNo: "03001234524",
    address: "Sargodha, Punjab",
    image: "https://i.pravatar.cc/300?img=55"
  },
  {
    id: 25,
    name: "Abdullah Tariq",
    email: "abdullah.tariq25@example.com",
    phoneNo: "03001234525",
    address: "Swabi, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=23"
  },
  {
    id: 26,
    name: "Mehwish Aslam",
    email: "mehwish.aslam26@example.com",
    phoneNo: "03001234526",
    address: "Okara, Punjab",
    image: "https://i.pravatar.cc/300?img=56"
  },
  {
    id: 27,
    name: "Ahsan Raza",
    email: "ahsan.raza27@example.com",
    phoneNo: "03001234527",
    address: "Mingora, Swat",
    image: "https://i.pravatar.cc/300?img=24"
  },
  {
    id: 28,
    name: "Komal Yousaf",
    email: "komal.yousaf28@example.com",
    phoneNo: "03001234528",
    address: "Jhelum, Punjab",
    image: "https://i.pravatar.cc/300?img=57"
  },
  {
    id: 29,
    name: "Ibrahim Shah",
    email: "ibrahim.shah29@example.com",
    phoneNo: "03001234529",
    address: "Bannu, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=25"
  },
  {
    id: 30,
    name: "Alina Bashir",
    email: "alina.bashir30@example.com",
    phoneNo: "03001234530",
    address: "Murree, Punjab",
    image: "https://i.pravatar.cc/300?img=58"
  },
  {
    id: 31,
    name: "Waleed Khan",
    email: "waleed.khan31@example.com",
    phoneNo: "03001234531",
    address: "Charsadda, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=26"
  },
  {
    id: 32,
    name: "Amna Khalid",
    email: "amna.khalid32@example.com",
    phoneNo: "03001234532",
    address: "Sahiwal, Punjab",
    image: "https://i.pravatar.cc/300?img=59"
  },
  {
    id: 33,
    name: "Omar Farooq",
    email: "omar.farooq33@example.com",
    phoneNo: "03001234533",
    address: "Nowshera, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=27"
  },
  {
    id: 34,
    name: "Areeba Nawaz",
    email: "areeba.nawaz34@example.com",
    phoneNo: "03001234534",
    address: "Gujrat, Punjab",
    image: "https://i.pravatar.cc/300?img=60"
  },
  {
    id: 35,
    name: "Zubair Ahmed",
    email: "zubair.ahmed35@example.com",
    phoneNo: "03001234535",
    address: "Haripur, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=28"
  },
  {
    id: 36,
    name: "Sadia Noor",
    email: "sadia.noor36@example.com",
    phoneNo: "03001234536",
    address: "Lahore, Punjab",
    image: "https://i.pravatar.cc/300?img=61"
  },
  {
    id: 37,
    name: "Kamran Ali",
    email: "kamran.ali37@example.com",
    phoneNo: "03001234537",
    address: "Bannu, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=29"
  },
  {
    id: 38,
    name: "Hafsa Imran",
    email: "hafsa.imran38@example.com",
    phoneNo: "03001234538",
    address: "Faisalabad, Punjab",
    image: "https://i.pravatar.cc/300?img=62"
  },
  {
    id: 39,
    name: "Noman Iqbal",
    email: "noman.iqbal39@example.com",
    phoneNo: "03001234539",
    address: "Peshawar, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=30"
  },
  {
    id: 40,
    name: "Dua Zahra",
    email: "dua.zahra40@example.com",
    phoneNo: "03001234540",
    address: "Karachi, Sindh",
    image: "https://i.pravatar.cc/300?img=63"
  },
  {
    id: 41,
    name: "Talha Javed",
    email: "talha.javed41@example.com",
    phoneNo: "03001234541",
    address: "Mardan, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=31"
  },
  {
    id: 42,
    name: "Rida Asif",
    email: "rida.asif42@example.com",
    phoneNo: "03001234542",
    address: "Rawalpindi, Punjab",
    image: "https://i.pravatar.cc/300?img=64"
  },
  {
    id: 43,
    name: "Arslan Mehmood",
    email: "arslan.mehmood43@example.com",
    phoneNo: "03001234543",
    address: "Karak, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=32"
  },
  {
    id: 44,
    name: "Mishal Khan",
    email: "mishal.khan44@example.com",
    phoneNo: "03001234544",
    address: "Multan, Punjab",
    image: "https://i.pravatar.cc/300?img=65"
  },
  {
    id: 45,
    name: "Dawood Hussain",
    email: "dawood.hussain45@example.com",
    phoneNo: "03001234545",
    address: "Bannu, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=33"
  },
  {
    id: 46,
    name: "Aiman Riaz",
    email: "aiman.riaz46@example.com",
    phoneNo: "03001234546",
    address: "Sialkot, Punjab",
    image: "https://i.pravatar.cc/300?img=66"
  },
  {
    id: 47,
    name: "Sameer Abbas",
    email: "sameer.abbas47@example.com",
    phoneNo: "03001234547",
    address: "Quetta, Balochistan",
    image: "https://i.pravatar.cc/300?img=34"
  },
  {
    id: 48,
    name: "Minaal Shah",
    email: "minaal.shah48@example.com",
    phoneNo: "03001234548",
    address: "Abbottabad, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=67"
  },
  {
    id: 49,
    name: "Rayan Malik",
    email: "rayan.malik49@example.com",
    phoneNo: "03001234549",
    address: "Dera Ismail Khan, Khyber Pakhtunkhwa",
    image: "https://i.pravatar.cc/300?img=35"
  },
  {
    id: 50,
    name: "Zoya Ahmed",
    email: "zoya.ahmed50@example.com",
    phoneNo: "03001234550",
    address: "Islamabad, Pakistan",
    image: "https://i.pravatar.cc/300?img=68"
  }
];

export default students;
