
// id ile isim yazdırma
let full =prompt("isim giriniz");
let name=document.querySelector('#name')
name.innerHTML=`${name.innerHTML} <small>${full}</small>`

// DOM elementlerini seç
const ekleBtn = document.getElementById('btn-ekle');
const inputText = document.getElementById('text');
const listUl = document.getElementById('list');

// Yeni görev ekleme fonksiyonu
function yeniGorevEkle() {
    const gorev = inputText.value.trim();
    if (gorev === "") {
        alert("Lütfen bir görev girin!");
        return;
    }

    // Yeni liste öğesi oluştur
    const li = document.createElement('li');

    // Görev metni
    const span = document.createElement('span');
    span.textContent = gorev;
    li.appendChild(span);

    // Tamamlandı butonu
    const tamamBtn = document.createElement('button');
    tamamBtn.textContent = 'Tamamlandı';
    tamamBtn.className = 'tamam';
    tamamBtn.onclick = () => {
        li.classList.toggle('tamamlandi');
    };
    li.appendChild(tamamBtn);

    // Sil butonu
    const silBtn = document.createElement('button');
    silBtn.textContent = 'Sil';
    silBtn.className = 'sil';
    silBtn.onclick = () => {
        listUl.removeChild(li);
    };
    li.appendChild(silBtn);

    // Listeye ekle
    listUl.appendChild(li);

    // Input'u temizle
    inputText.value = "";
}

// Ekle butonuna tıklama olayı
ekleBtn.addEventListener('click', yeniGorevEkle);

// Enter tuşuna basıldığında da görev ekleme
inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        yeniGorevEkle();
    }
});