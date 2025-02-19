function tampilkanPesanMengetik() {
    document.getElementById('pesanMengetik').textContent = "Anda Sedang Mengetik...";
}

function kirimKomentar() {
    let komentar = document.getElementById('komentar').value;
    document.getElementById('pesanHasil').textContent = "Dewi : " + komentar;
    document.getElementById('pesanMengetik').textContent = ""; 
}