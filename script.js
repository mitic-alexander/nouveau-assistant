function copyLessonNotes() {
    let copyText = document.getElementById("lesson-notes");
    copyText.select();
    document.execCommand("copy");
}

function copyNewFarewell() {
    let copyText = document.getElementById("new-farewell");
    copyText.select();
    document.execCommand("copy");
}

function copyOldFarewell() {
    let copyText = document.getElementById("old-farewell");
    copyText.select();
    document.execCommand("copy");
}