var nama = 'Fuzail';
var peran = 'Ksatria';

if(nama === ''){
  console.log('Nama harus diisi!')
}else{
  if(peran === 'Ksatria'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHallo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
  }else if(peran === 'Tabib'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHallo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
  }else if(peran === 'Penyihir'){
    console.log(`Selamat datang di Dunia Proxytia, ${nama}\nHallo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
  }else{
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
  }
}