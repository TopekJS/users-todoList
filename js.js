const nama = document.querySelector('input[name="nama"');
const namaAkhir = document.querySelector('input[name="namaAkhir"');
const email = document.querySelector('input[name="email"]');
const tables = document.getElementById('bodys');
const btn = document.getElementById('btn');
const nom = 1;

tables.addEventListener('click', (e)=> {
    if(e.target.classList.contains('delete')){
        // let li = e.target.parentElement;
        let li = e.target.parentElement;
        tables.removeChild(li)
        console.log(li)
    }
});

btn.addEventListener('click', ()=>{
    // console.log(namaAkhir.value)
    
    (function nna(k) {
        var n = k + 1
        return n
    })()
    buat(nama.value, namaAkhir.value, email.value);
    
   
    defaultValue();
})



for (let i = 0; i < tables.children; i++) {
     const element = array[i];
    console.log(element)
}
function loop() {
    let ass = tables.querySelectorAll('tr.op');
    for (let i = 0; i < ass.length; i++) {
        var isi = i;
    }
    console.log(isi)
}

function buat(awalNama, akhirNama, email, nomor) {
    
    var addTable = `<tr id="Items" class="op">
                        <th scope="row" class="kol">${nomor}</th>
                        <td>${awalNama}</td>
                        <td>${akhirNama}</td>
                        <td>${email}</td>
                        <td class="btn btn-danger btn-sm float-right delete">X</td>
                    </tr>`;
    
    var Items = document.getElementById('Items');
    
     let lastChildElem = tables.lastElementChild;
    if (document.querySelector('tbody').contains(Items)) {
        console.log('benar')
         lastChildElem.insertAdjacentHTML('afterend', addTable);
    } else {
        console.log('salah')
         tables.innerHTML = addTable;
    }
    // console.log( ? 'jaj' : 'ora');
}

function defaultValue() {
    nama.value = "";
    namaAkhir.value = "";
    email.value = "";
}