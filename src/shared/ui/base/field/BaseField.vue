<template>
  <div class="base-field">
    <div class="base-field__inner">
      <slot name="input"/>
      <slot name="button"/>

    </div>
    <div class="base-field__footer">
      <div class="base-field__error">
        <slot name="error"/>
      </div>

      <slot name="footer"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import 'BaseField';

.base-field__error {
  color: red;
}
</style>
