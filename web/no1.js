function showTypingMessage() {
    var input = document.getElementById("comment-input").value;
    var typingStatus = document.getElementById("typing-status");

    // Cek apakah pengguna sedang mengetik
    if (input.length > 0) {
        typingStatus.textContent = "Anda Sedang Mengetik...";
    } else {
        typingStatus.textContent = "";
    }
}

function showComment() {
    var input = document.getElementById("comment-input").value;
    var resultComment = document.getElementById("result-comment");
    var typingStatus = document.getElementById("typing-status");

    if (input.length > 0) {
        resultComment.innerHTML = 'Fajri : ' + input;
        typingStatus.textContent = ''; // Hapus status mengetik setelah klik
    } else {
        resultComment.innerHTML = ''; // Kosongkan jika input tidak ada
    }

    // Reset input
    document.getElementById("comment-input").value = '';
}