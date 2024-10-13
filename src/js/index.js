const listaSelecaodragondevs = document.querySelectorAll(".dragondev");

listaSelecaodragondevs.forEach(dragondev => {
	dragondev.addEventListener("click", () => {
		esconderCartaodragondev();

		const iddragondevSelecionado = mostrarCartaodragondevSelecionado(dragondev);

		desativardragondevNaListagem();
		ativardragondevSelecionadoNaListagem(iddragondevSelecionado);

	})
})


function ativardragondevSelecionadoNaListagem(iddragondevSelecionado) {
	const dragondevSelecionadoNaListagem = document.getElementById(iddragondevSelecionado);
	dragondevSelecionadoNaListagem.classList.add("ativo");
}

function desativardragondevNaListagem() {
	const dragondevAtivoNaListagem = document.querySelector(".ativo");
	dragondevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaodragondevSelecionado(dragondev) {
	const iddragondevSelecionado = dragondev.attributes.id.value;
	const idDoCartaodragondevParaAbrir = "cartao-" + iddragondevSelecionado;
	const cartaodragondevParaAbrir = document.getElementById(idDoCartaodragondevParaAbrir);
	cartaodragondevParaAbrir.classList.add("aberto");
	return iddragondevSelecionado;
}

function esconderCartaodragondev() {
	const cartaodragondevAberto = document.querySelector(".aberto");
	cartaodragondevAberto.classList.remove("aberto");
}

document.addEventListener('keydown', () => {
	window.location.href = "index.html";  // Substitua por sua URL desejada
});

document.addEventListener("DOMContentLoaded", function () {
	const cartoes = document.querySelectorAll('.cartao-dragondev');

	// Função para exibir os cartões com animação
	function mostrarCartoes() {
		cartoes.forEach((cartao, index) => {
			setTimeout(() => {
				cartao.classList.add('visible');
			}, index * 100); // Atraso em cascata para cada cartão
		});
	}

	// Chama a função para mostrar os cartões
	mostrarCartoes();
});





