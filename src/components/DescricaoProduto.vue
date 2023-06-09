<script>
import HeaderPage from "@/components/HeaderPage.vue";

export default {
  components: {
    HeaderPage,
  },
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    this.product = {
      id: productId,
      name:  "Ryzen 5 5600",
      processorType: "x64",
      processorReleaseDate: "10/10/2021",
      processorPowerUsage: "PSU Minimo 550w",
      processorPrice: "R$ 800",
    };
  },
};
</script>

<template>
  <div class="descricaoProduto">
    <HeaderPage />
    <div class="headerProduto">
      <h2>{{ product.name }}</h2>
      <img :src="require(`@/assets/images/imagem${product.id}.jpg`)" :alt="product.name" />
    </div>
    <div class="detalhesProduto">
      <div>
        <span class="label">Tipo de Processador:</span>
        <span>{{ product.processorType }}</span>
      </div>
      <div>
        <span class="label">Data de Lançamento:</span>
        <span>{{ product.processorReleaseDate }}</span>
      </div>
      <div>
        <span class="label">Fonte mínima:</span>
        <span>{{ product.processorPowerUsage }}</span>
      </div>?
      <div>
        <span class="label">Preço:</span>
        <span>{{ product.processorPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.descricaoProduto {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.headerProduto {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.headerProduto h2 {
  font-size: 24px;
  margin-right: 20px;
  text-align: center;
}

.headerProduto img {
  width: 79px;
  height: 79px;
  object-fit: cover;
  margin-right: 20px;
}

.detalhesProduto {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.detalhesProduto div {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
}

/* Responsive Styling */

@media (max-width: 600px) {
  .headerProduto {
    flex-direction: column;
    align-items: center;
  }

  .headerProduto h2 {
    margin-bottom: 10px;
  }

  .headerProduto img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
}
</style>

