/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here
SET harga dasar TO 25000

READ Nama, Tahun kelahiran, status pelajar
SET Umur to 2020 - Tahun kelahiran
IF Umur > 120 OR Tahun kelahiran < 1900 THEN
  DISPLAY 'Invalid Age'
ENDIF

IF Umur < 2 THEN
  SET harga TO 0
ELSE IF Umur >= 2 AND Umur <=10 THEN
  SET harga TO harga dasar
ELSE IF Umur >= 11 AND Umur <=18 THEN
  IF status pelajar = TRUE THEN
    SET harga TO harga dasar * 1.25
  ELSE 
    SET harga TO harga dasar * 1.5
  ENDIF
ELSE IF umur > 19  THEN
  IF status pelajar = TRUE THEN
    SET harga TO harga dasar * 1.5
  ELSE
    SET harga TO harga dasar * 2
  ENDIF
ENDIF
DISPLAY nama, harga


