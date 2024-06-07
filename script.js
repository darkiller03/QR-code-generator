let qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("https://www.linkedin.com/in/karim-hssini-525a83279/");

function generateQr() {
    let inputValue = document.querySelector("input").value;
    if (inputValue === "" || inputValue === " ") {
        alert("Input field cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
        document.getElementById('download-btn').style.display = 'block';
    }
}

document.getElementById('download-btn').addEventListener('click', function() {
    const qrCodeElement = document.querySelector('.qrcode canvas');
    const dataURL = qrCodeElement.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'qrcode.png';

    link.click();
});

