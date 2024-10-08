document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Mengambil input suhu dan unit
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    // Logika konversi suhu
    if (unit === 'C') {
        // Konversi dari Celsius ke Fahrenheit
        result = (temperature * 9/5) + 32;
        result = result.toFixed(2); // Membatasi dua angka desimal
        document.getElementById('result').innerText = `${temperature} °C = ${result} °F`;
    } else {
        // Konversi dari Fahrenheit ke Celsius
        result = (temperature - 32) * 5/9;
        result = result.toFixed(2); // Membatasi dua angka desimal
        document.getElementById('result').innerText = `${temperature} °F = ${result} °C`;
    }
});