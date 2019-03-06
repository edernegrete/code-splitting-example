<template>
  <div class="container">
    <div class="main-request">
      <h5>Este es nuestro inicial request</h5>
      <button class="btn btn-primary mt-4 mb-4" @click="toggleModal()">Mostrar el modal</button>
      <div class="main-image">
        <img alt="Main logo" src="../assets/main.png">
      </div>
      <Modal v-if="show"></Modal>
      <h5 class="mb-5 pt-5">Todo lo que está debajo de mí cargó después de lo de arriba 😵</h5>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  const Footer = () => import(/* webpackChunkName: "Footer" */'./Footer.vue');
  const Modal = () => import(/* webpackChunkName: "Modal" */ './Modal.vue');

export default {
  name: 'Home',
  data() {
    return {
      show: false
    }
  },
  components: {
    Footer,
    Modal
  },
  methods: {
    toggleModal() {
      this.show = true
    }
  }
}
</script>

