# MOBILE ERP

Adalah aplikasi Mobile yang bertujuan untuk transaksi Personal Loan dan loan Calculator.

Aplikasi di kembangkan dengan Bahasa React Native.

Aplikasi ini di kembangkan oleh Developer IT Trihamas Finance

=======================================

## _Panduan penggunaan_

_mengunduh Repository_

unduh repository kedalam komputer menggunakan perintah git clone. Url repository dapat dilihat di dalam repository

**git clone <url repo> <folder tujuan>**

_Memperbarui Repository_

untuk memperbaharui repository agar uptodate gunakan perintah git pull

**git pull origin master**

_Mengunggah Perubahan_

Jangan lupa untuk melakukan pull terlebih dahulu sebelum melakukan push.

Tambah file baru atau ubah file

**git add <nama file>**

Konfirmasi penambahan atau perubahan file

**git commit -m "<pesan commit>"**

Kirim perubahan ke dalam repository

\***\*git push origin master\*\***

## **Menjalankan Aplikasi**

setelah folder repositori di clone/di download, buka command line / git bash di folder tersebut

**npm install**

tunggu sampai proses selelesai kemudian ketik perintah untuk menjalankan aplikasi menjadi apk di emulator atau di real device

**react-native run-android**
atau

**npx react-native run-android**

Installasi IMEI
**npm install react-native-imei**

setelah itu jalankan perintah
**react-native link react-native-imei**
jika error jalankan script
**npm i -g react-native-cli**
kemudian ulang kembali script diatas

tambahan permission
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
lokasi : android -> app -> src -> main -> AndroidManifest.xml

tunggu sampai proses selesai dan aplikasi otomatis terbuka di emulator/real device android/ios

Terimakasih !!!
