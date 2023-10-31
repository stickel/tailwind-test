<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const emit = defineEmits([
  'update:value',
  'removeitem',
  'removeitem:cancel',
  'show:removeconfirmation',
]);

const props = defineProps({
  /** Array of product quantity types including the singular and plural strings: e.g., ['item', 'items'] */
  label: {
    type: Array<string>,
    required: true,
  },
  /** Min possible value, default 0 */
  min: {
    type: Number,
    required: false,
    default: 1,
  },
  /** Max possible value, default none */
  max: {
    type: Number,
    required: false,
  },
  /** Sets disabled state */
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  /** Set initial quantity */
  value: {
    type: Number,
    required: false,
    default: 1,
  },
  /** Amount to increase or decrease by */
  step: {
    type: Number,
    required: false,
    default: 1,
  },
  /** String to display in remove confirmation */
  removeLabel: {
    type: String,
    required: false,
    default: 'Remove {0}?',
  },
});

onBeforeMount(() => {
  if (props.min && props.value < props.min) {
    console.warn('Minimum quantity not met.');
  }
});

const disabled = ref(props.disabled);
const quantity = ref(props.value);
watch(quantity, (newVal: number, oldVal: number) => {
  if (newVal < props.min) {
    showConfirmation.value = true;
    quantity.value = oldVal;
    return;
  }

  if (
    (props.max && newVal <= props.max && newVal >= props.min) ||
    (!props.max && newVal >= props.min)
  ) {
    emit('update:value', newVal);
  }
});

const label = computed(() => {
  if (quantity.value === 1) {
    return props.label[0];
  }
  return props.label[1];
});
const removeLabel = computed(() => {
  return props.removeLabel.replace(/\{0\}/i, label.value.toLowerCase());
});

const increaseQuantity = () => {
  if (props.max && quantity.value < props.max) {
    quantity.value = quantity.value + props.step;
  } else if (!props.max) {
    quantity.value = quantity.value + props.step;
  }
};

const showConfirmation = ref(false);
const decreaseQuantity = () => {
  if (quantity.value > props.min) {
    quantity.value = quantity.value - props.step;
  } else {
    showConfirmation.value = true;
  }
};

// const productId = inject<string>('cartViewProduct', '');
watch(showConfirmation, (newVal: boolean, oldVal: boolean) => {
  if (newVal === true) {
    // disable the input so you can't keep modifying it in the background
    disabled.value = true;
  } else if (newVal === false) {
    // enable the input when the "remove confirmation" goes away
    disabled.value = false;
    emit('removeitem:cancel');
  }
  if (newVal !== oldVal) {
    emit('show:removeconfirmation', {
      show: newVal,
      product: '',
    });
  }
});
const removeItem = () => {
  emit('removeitem', '');
  showConfirmation.value = false;
};

const updateValue = (event: Event) => {
  quantity.value = parseFloat((event.target as HTMLInputElement).value);
  emit('update:value', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div
    class="quantity-control tw-relative tw-flex tw-h-9 tw-flex-row tw-rounded">
    <button
      class="tw-group/remove tf-btn tw-text-text-default tw-mr-3 tw-flex tw-cursor-pointer tw-flex-row tw-items-center tw-rounded tw-border tw-border-solid tw-border-neutral-200 tw-bg-white tw-px-3 tw-font-sans tw-text-accent hover:tw-border-error hover:tw-text-error"
      :class="{
        'tw-pointer-events-none tw-bg-neutral-200 tw-bg-opacity-30 tw-text-neutral-300':
          disabled,
      }"
      :disabled="disabled"
      @click="showConfirmation = true">
      <font-awesome-icon
        :icon="faTrashCan"
        class="group-hover/remove:tw-text-error"></font-awesome-icon>
      <span class="tw-hidden tw-text-xs sm:!tw-ml-2 sm:!tw-block">
        Remove
      </span>
    </button>
    <a
      href=""
      class="tw-group/decrement tw-flex tw-h-full tw-items-center tw-justify-center tw-rounded-s-md tw-border tw-border-solid tw-border-neutral-200 tw-px-2 tw-font-bold tw-transition-colors tw-duration-[25ms] tw-ease-smooth hover:tw-border-error"
      :class="{
        'disabled tw-pointer-events-none tw-cursor-default tw-bg-neutral-200 tw-bg-opacity-30 tw-text-neutral-300':
          disabled,
      }"
      role="link"
      aria-label="decrement"
      @click.prevent="decreaseQuantity">
      <font-awesome-icon
        :icon="faMinus"
        class="tw-text-accent group-hover/decrement:tw-text-error"
        :class="{ 'tw-text-neutral-300': disabled }"></font-awesome-icon>
    </a>
    <div
      class="tw-relative tw-flex tw-min-w-max tw-flex-grow tw-flex-row tw-border-x-0 tw-border-y tw-border-solid tw-border-neutral-200"
      :class="{ 'tw-bg-neutral-200 tw-bg-opacity-30': disabled }">
      <label
        class="-tw-ml-0.25 tw-text-text-default tw-z-0 tw-min-w-max tw-text-left tw-font-sans tw-font-light"
        :class="{ 'tw-text-neutral-300': disabled }">
        <input
          class="tw-z-1 tw-h-full tw-w-full tw-rounded-none tw-border-0 tw-bg-transparent tw-pr-[50%] tw-text-right tw-font-bold focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-accent focus:tw-ring-opacity-25"
          :class="{ 'tw-text-neutral-300': disabled }"
          type="number"
          :max="props.max"
          :min="props.min"
          :step="props.step"
          :disabled="disabled"
          :value="quantity"
          @keyup.up.prevent="increaseQuantity"
          @keyup.down.prevent="decreaseQuantity"
          @input="updateValue" />
        <span
          class="tw-relative -tw-top-2 tw-inline-block tw-max-w-max -tw-translate-y-full tw-pl-[50%]">
          {{ label }}
        </span>
      </label>
    </div>
    <a
      href=""
      class="tw-group/increment tw-flex tw-h-full tw-items-center tw-justify-center tw-rounded-e-md tw-border tw-border-solid tw-border-neutral-200 tw-px-2 tw-font-bold tw-transition-colors tw-duration-[25ms] tw-ease-smooth hover:tw-border-accent"
      :class="{
        'disabled tw-pointer-events-none tw-cursor-default tw-bg-neutral-200 tw-bg-opacity-30 tw-text-neutral-300':
          disabled,
      }"
      role="link"
      aria-label="increment"
      @click.prevent="increaseQuantity">
      <font-awesome-icon
        :icon="faPlus"
        class="tw-text-accent group-hover/increment:tw-text-accent-hover"
        :class="{ 'tw-text-neutral-300': disabled }"></font-awesome-icon>
    </a>
    <template v-if="showConfirmation">
      <div
        class="remove-confirmation tw-absolute tw-left-0 tw-top-0 tw-box-border tw-flex tw-w-full tw-flex-row tw-justify-between tw-rounded tw-border tw-border-solid tw-border-error tw-bg-white tw-px-4 tw-py-2 tw-font-sans tw-text-error"
        role="alert">
        <p class="tw-m-0 tw-flex-grow tw-p-0 tw-text-sm">
          {{ removeLabel }}
        </p>
        <div class="tw-flex-shrink-0 tw-flex-grow-0 tw-font-bold">
          <button
            class="tf-btn tw-cursor-pointer tw-border-0 tw-border-b tw-border-transparent tw-bg-white tw-text-sm tw-font-bold tw-text-error hover:tw-border-x-0 hover:tw-border-b hover:tw-border-t-0 hover:tw-border-solid hover:tw-border-error"
            @click="removeItem">
            Yes
          </button>
          <button
            class="tf-btn tw-ml-4 tw-cursor-pointer tw-border-0 tw-border-b tw-border-transparent tw-bg-white tw-text-sm tw-font-bold tw-text-error hover:tw-border-x-0 hover:tw-border-b hover:tw-border-t-0 hover:tw-border-solid hover:tw-border-error"
            @click="showConfirmation = false">
            No
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.quantity-control,
.quantity-control * {
  box-sizing: border-box;
}
</style>
