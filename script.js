document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formani avtomatik jo‘natishdan to‘xtatish

    // 🔹 Telegram bot ma'lumotlari
    const TOKEN = "7835360290:AAHr2xBUmKBkpsNUFq4hmeY7FpfxAXFkyKI";
    const CHAT_ID = "-1002376139335"; 

    // 🔹 Foydalanuvchi ma'lumotlarini olish
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const datetime = document.getElementById("datetime").value;
    const people = document.getElementById("people").value;
    const message = document.getElementById("message").value;

    // 🔹 Yuboriladigan matnni tayyorlash
    const text = `📌 *Yangi Band Qilish:*\n\n` +
                 `👤 Ism: *${name}*\n` +
                 `📞 Telefon: *${phone}*\n` +
                 `📅 Sana va vaqt: *${datetime}*\n` +
                 `👥 Odamlar soni: *${people}*\n` +
                 `📝 Izoh: *${message}*`;

    // 🔹 Telegram API so‘rovi
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=Markdown&text=${encodeURIComponent(text)}`;

    // 🔹 Fetch API orqali so‘rov yuborish
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById("responseMessage").textContent = "✅ Band qilish muvaffaqiyatli amalga oshirildi!";
                document.getElementById("responseMessage").style.color = "green";
            } else {
                document.getElementById("responseMessage").textContent = "❌ Xatolik yuz berdi!";
                document.getElementById("responseMessage").style.color = "red";
            }
        })
        .catch(error => {
            document.getElementById("responseMessage").textContent = "❌ Internet yoki boshqa muammo!";
            document.getElementById("responseMessage").style.color = "red";
        });

    // Formani tozalash
    document.getElementById("reservationForm").reset();
});
