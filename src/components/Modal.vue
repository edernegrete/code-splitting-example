<template>
<div class="container">
<div class="modal" tabindex="-1" role="dialog" style="display: block;">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Hey, yo no cargué originalmente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="../assets/modal.png" alt="">
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'Modal',
}
</script>
<style>
  .modal-title {
    color: var(--gray-dark);
  }
</style>



