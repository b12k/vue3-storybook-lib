<script setup lang="ts">
  import { onMounted, defineProps } from "vue";

  const props = defineProps({
    id: {
      type: String,
      required: true,
    }
  })

  onMounted(async () => {
    await import('bootstrap/js/dist/modal');
  });

  export type ModalProps = typeof props;
</script>

<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${props.id}`" ref="toggle">
    Launch demo modal
  </button>
  <div class="modal fade" :id="props.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>