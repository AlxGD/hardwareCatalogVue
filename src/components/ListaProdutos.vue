<script>
import HeaderPage from "@/components/HeaderPage.vue";

export default {
  components: {
    HeaderPage,
  },
  data() {
    return {
      nomeCatalogo: "Loja de Hardware",
    };
  },
};
</script>

<template>
  <div>
    <HeaderPage />

    <div class="cardProduto">
      <img src="@/assets/images/imagem1.jpg" alt="Product 1" />
      <div class="detalhesProduto">
        <h2>Ryzen 5 5600</h2>
        <p>Custo benefício com pouca energia</p>
      </div>
      <router-link class="botaoSaibaMais" :to="`/product/1`">Saiba Mais</router-link>
    </div>

    <div class="cardProduto">
      <img src="@/assets/images/imagem2.jpg" alt="Product 2" />
      <div class="detalhesProduto">
        <h2>Ryzen 7 5700</h2>
        <p>Alta performance com uso médio de energia</p>
      </div>
      <router-link class="botaoSaibaMais" :to="`/product/2`">Saiba Mais</router-link>
    </div>

    <div class="cardProduto">
      <img src="@/assets/images/imagem3.jpg" alt="Product 3" />
      <div class="detalhesProduto">
        <h2>i5 13600K</h2>
        <p>A melhor performance mas com muito uso de energia</p>
      </div>
      <router-link class="botaoSaibaMais" :to="`/product/2`">Saiba Mais</router-link>
    </div>

  </div>
</template>

<style>

.cardProduto {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cardProduto img {
  width: 79px;
  height: 79px;
  object-fit: cover;
  margin-right: 10px;
}


.botaoSaibaMais {
  background-color: orange;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
