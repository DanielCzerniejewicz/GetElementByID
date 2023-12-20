function sprawdzian() {
    let prawo = document.getElementById("prawo");
    let cyfra = document.getElementById("cyfra").value;
    let tekst = document.getElementById("tekst");
    let ZczyP = document.getElementById("ZczyP");
    let literka = document.getElementById("Literka");
    let tabela = document.getElementById("Tablica");
    if (ZczyP.checked) {
        let dzielniki = 0;
        for(let i = 1; i<=cyfra;i++)
        {
            if(cyfra%i==0)
            {
                dzielniki++;
            }
        }
        if(dzielniki==2)
        {
            prawo.innerHTML = "<font>Pierwsza</font>"
        }
        else{
            prawo.innerHTML = "<font>Zlozona</font>"
        }
    }
    if(literka.checked)
    {
        parseInt(cyfra,10)
        prawo.innerHTML = `<font>${tekst[cyfra]}</font>`
    }
    if (tabela.checked) {
        let tabelaHTML = "<table><tr>";

        for (let i = 0; i < cyfra; i++) {
            tabelaHTML += `<td>${i}</td>`;
        }

        tabelaHTML += "</tr></table>";
        prawo.innerHTML = tabelaHTML;
    }

}
