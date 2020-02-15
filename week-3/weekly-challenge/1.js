/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

// GET mine
// GET steps
// SET result TO []
// SET c TO 0
// SET g TO 0
// SET s TO 0
// SET d TO 0
// FOR i=0 TO mine.length
// 	FOR j=0 TO mine[i].length
// 		IF j< steps THEN
// 			IF mine[i][j]=== 'c' THEN
// 				increment c
// 			ELSE IF mine[i][j]=== 'd' THEN
// 				increment d
// 			ELSE IF mine[i][j]=== 's' THEN
// 				increment s
// 			ELSE IF mine[i][j]=== 'g' THEN
// 				increment g
// 			END IF
// 			SET mine[i][j] TO ''
// 		END IF
// 	END FOR
// 	SET steps TO steps - mine[i].length
// END FOR
// IF c != 0 THEN
// 	STORE [c, 'copper'] IN result
// END IF
// IF d != 0 THEN
// 	STORE [d, 'diamond'] IN result
// END IF
// IF s != 0 THEN
// 	STORE [s, 'silver'] IN result
// END IF
// IF g != 0 THEN
// 	STORE [g, 'gold'] IN result
// END IF
// RETURN result

function mineTycoon(mine, steps) {
	//implementasi function disini!
	var result = [];
	var c =0;
	var g=0;
	var s=0;
	var d =0;
	for(var i =0; i<mine.length;i++){
		for(var j= 0; j<mine[i].length; j++){
			if(j<steps){
				if(mine[i][j] === 'c'){
					c++
				}else if(mine[i][j] === 'd'){
					d++
				}else if(mine[i][j] === 's'){
					s++
				}else if(mine[i][j] === 'g'){
					g++
				}
				mine[i][j] = '';
			}
		}
		steps = steps - mine[i].length
	}
	if(c!=0){
		result.push([c, 'copper'])
	}
	if(d!=0){
		result.push([d, 'diamond'])
	}
	if(g!=0){
		result.push([g, 'gold'])
	}
	if(s!=0){
		result.push([s, 'silver'])
	}
	console.log(mine)
	return result;
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]