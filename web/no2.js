$(document).ready(function() {
    $("#cekNilai").click(function() {
        var nilai = parseInt($("#nilai").val());
        var result = $("#result");

        result.removeClass(); // Menghapus semua class CSS sebelumnya

        if (nilai >= 85) {
            result.text("Mendapatkan Nilai A");
            result.addClass("green");
        } else if (nilai >= 75 && nilai <= 84) {
            result.text("Mendapatkan Nilai B+");
            result.addClass("orange");
        } else if (nilai >= 60 && nilai <= 74) {
            result.text("Mendapatkan Nilai C+");
            result.addClass("yellow");
        } else if (nilai >= 0 && nilai <= 59) {
            result.text("Mendapatkan Nilai E");
            result.addClass("red");
        } else {
            result.text("Nilai tidak memenuhi kriteria khusus");
            result.css("background-color", "transparent");
        }
    });
});