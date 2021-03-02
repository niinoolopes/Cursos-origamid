<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div
        class="produtos-weapper"
        v-for="(venda, index) in vendas"
        :key="index"
      >
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="comprador">
            <span>Comprador:</span>
            {{ venda.comprador_id }}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import { api } from "@/services.js";
import { mapState } from "vuex";
export default {
  name: "Usuariovendas",
  components: {
    ProdutoItem,
  },
  created() {
    if (this.login) {
      this.getUsuarioProdutos();
    }
    this.getVendas();
  },
  computed: {
    ...mapState(["usuario"]),
  },
  data() {
    return {
      vendas: null,
    };
  },
  methods: {
    getVendas() {
      console.log(`transacao?vendedor_id=${this.usuario.id}`);
      api.get(`transacao?vendedor_id=${this.usuario.id}`).then((response) => {
        this.vendas = response.data;
      });
    },
  },
  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },
};
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.comprador span {
  color: #e80;
}
h2 {
  margin-bottom: 20px;
}
.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;
}
.entrega h3 {
  margin: 0;
  justify-self: end;
}
</style>
