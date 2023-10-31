<script setup lang="ts">
// Import the UI Kit styles
import '@privateLib/uikit/style';
import { ref } from 'vue';
import { QuantityControl } from '@privateLib/uikit';

const emit = defineEmits({
  removeOrderItem: ({ productId, orderItemId }) => {
    if (productId && orderItemId) {
      return true;
    }
    if (!productId) {
      console.error(
        'Invalid Emit Event. `removeOrderItem` event must include a product id.'
      );
    }
    if (!orderItemId) {
      console.error(
        'Invalid Emit Event. `removeOrderItem` event must include an order item id.'
      );
    }
    return false;
  },
  updateOrderItem: ({ orderItem, count }) => {
    if (orderItem && count) {
      return true;
    }
    if (!orderItem) {
      console.error(
        'Invalid emit event: `orderItem` is a required param of `updateOrderItem`.'
      );
      return false;
    }
    if (!count) {
      console.error(
        'Invalid emit event: `count` is a required param of `updateOrderItem`.'
      );
      return false;
    }
  },
  addsavedproduct: (id: number | string) => {
    if (id) {
      return true;
    }
    return console.error(
      'Invalid Emit Event. `addsavedproduct` event must include a product id.'
    );
  },
});

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const product = ref(props.product);
const wantsToRemove = ref(false);

const updateQuantity = async (count: number) => {
  emit('updateOrderItem', { orderItem: props.product, count });
};

const removing = (event: any) => {
  wantsToRemove.value = event.show;
};

const removeProduct = () => {
  emit('removeOrderItem', product.value);
};
</script>

<template>
  <div class="tw-box-border tw-flex tw-w-full tw-flex-col">
    <QuantityControl
      label="Items"
      :value="product.quantity"
      class="tw-mb-4 tw-w-full xl:tw-mb-0 xl:tw-max-w-md"
      @update:value="updateQuantity($event)"
      @removeitem="removeProduct"
      @show:removeconfirmation="removing($event)">
    </QuantityControl>
  </div>
</template>
