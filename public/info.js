const candidato = document.getElementById('candidato')


async function test() {

  candidato.innerHTML = ""

  const response = await fetch("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json");
  const result = await response.json()
  const cand = result.cand;

  document.getElementById('apuracao').innerHTML = 'Votos apurados ' + result.pst + '%'

  cand.forEach(cand => {
    candidato.innerHTML += 
      `
      <div class='card'> 
        <h3> ${cand.seq} - ${cand.nm} - ${cand.cc}</h3>
        <h4 style="color: purple;"> ${
          new Intl.NumberFormat("en", {
          minimumSignificantDigits: 10,
        }).format(cand.vap)} - ${cand.pvap}% </h4>
      </div>

      `
  });

}

function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

window.onload = timedRefresh(5000);

test()



