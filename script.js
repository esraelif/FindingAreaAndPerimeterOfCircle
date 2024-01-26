document.addEventListener("DOMContentLoaded", function () {


    // Yarıçap giriş alanını seç
    const radiusInput = document.querySelector('.textbox1');

    // Diğer input alanlarını seç
    const diameterInput = document.querySelector('.textbox2');
    const circumferenceInput = document.querySelector('.textbox3');
    const areaInput = document.querySelector('.textbox4');

    // Yarıçap giriş alanına bir "input" olay dinleyici ekleyerek her değişiklikte hesaplama yap
    radiusInput.addEventListener('input', function () {
        // Giriş değerini al
        const radiusValue = parseFloat(radiusInput.value);

        // Geçerli bir sayı olup olmadığını kontrol et
        if (!isNaN(radiusValue) && radiusValue > 0) {

            const diameterValue = 2 * radiusValue;
            const circumferenceValue = 2 * Math.PI * radiusValue;
            const areaValue = Math.PI * Math.pow(radiusValue, 2);

            // Diğer alanları güncelle
            diameterInput.value = diameterValue.toFixed(2);
            circumferenceInput.value = circumferenceValue.toFixed(2);
            areaInput.value = areaValue.toFixed(2);
        } else {
            // Geçerli bir sayı değilse, diğer alanları sıfırla
            diameterInput.value = '';
            circumferenceInput.value = '';
            areaInput.value = '';
        }
    });

    // RESET butonuna tıklanınca sıfırlama fonksiyonunu çağır
    document.querySelector('.back').addEventListener('click', function () {
        resetValues();
    });

    // Değerleri sıfırlama fonksiyonu
    function resetValues() {
        radiusInput.value = '';
        diameterInput.value = '';
        circumferenceInput.value = '';
        areaInput.value = '';
    }
});