<template>
  <div>
    <h2 class="tituloLista">Processadores</h2>
    <div v-for="product in produtos" :key="product.id" class="cardProduto">
      <div class="conteudoCardProduto">
        <div class="imagemDoProduto">
          <img :src="require(`@/assets/images/imagem${product.id}.jpg`)" alt="Product Image" class="dimensaoImg">
        </div>
        <div class="informaçãoDoProduto">
          <h3>{{ product.nome }}</h3>
          <p>{{ product.descricao }}</p>
        </div>
        <div class="margemBotao">
          <button class="estiloBotao">Saiba mais</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        { id: 1, nome: "Ryzen 5 5600", descricao: "Bom custo benefício com baixo consumo de energia. Fonte de 550w, mínimo.", imagem: "imagem1.jpg" },
        { id: 2, nome: "Ryzen 7 5700", descricao: "Alta performance com consumo de energia baixo. Fonte de 650w, mínimo", imagem: "imagem2.jpg" },
        { id: 3, nome: "i5-136500K", descricao: "O mais potente, com graficos integrados. Fonte de 750w, mínimo", imagem: "imagem3.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.cardProduto {
  background-color: rgb(199, 132, 85);
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: 50px;
  border-color: black;
}

.conteudoCardProduto {
  display: flex;
  align-items: center;
}

.imagemDoProduto {
  margin-right: 20px;
}

.dimensaoImg {
  max-width: 79px;
  max-height: 79px;
}

.informaçãoDoProduto {
  flex: 3;
}

.margemBotao {
  margin-left: auto;
}

.tituloLista {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;

}

.estiloBotao {
  background-color: #b01313;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.estiloBotao:hover {
  background-color: #e36161;
}
</style>
