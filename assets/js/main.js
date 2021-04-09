function escopo() {
  const form = document.querySelector("#form")

  form.addEventListener("submit", function recebeEventoForm(evento) {
    evento.preventDefault()

    const inputPeso = form.querySelector("#peso")
    const inputAltura = form.querySelector("#altura")

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso && !altura) {
      setResultado(`Peso e altura inválidos.`, false)
      return
    }

    if (!peso) {
      setResultado(`Peso inválido.`, false)
      return
    }

    if (!altura) {
      setResultado(`Altura inválida.`, false)
      return
    }
    const imc = calculaImc(peso, altura)
    const nivelImc = calculaNivelImc(imc)

    const msg = (`Seu IMC é: ${imc}. ${nivelImc}`)

    setResultado(msg, true)

  })

  function calculaImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
  }

  function calculaNivelImc(imc) {
    const nivel = [
      `Abaixo do peso.`,
      `Peso normal.`,
      `Sobrepeso.`,
      `Obesidade grau 1.`,
      `Obesidade grau 2.`,
      `Obesidade grau 3.`,
    ]
    if (imc > 39.9) return nivel[5]
    if (imc > 34.9) return nivel[4]
    if (imc > 29.9) return nivel[3]
    if (imc > 24.9) return nivel[2]
    if (imc > 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
  }

  function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""
    
    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)

    if(isValid) p.classList.add("paragrafo-resultado")
    else p.classList.add("bad")
  }

  function criaP() {
    const p = document.createElement("p")
    return p
  }
}
escopo()
