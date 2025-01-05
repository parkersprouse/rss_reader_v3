<!--
  This is an example / template Vue single-file component, showing the standard structure that our
    components should follow in order to maintain consistency across the entire application.

  This includes the specific order of the `<template>` -> `<script>` -> `<style>` main sections,
    as well as the order of each sub-section within the `<script>` section.

  If any of the main sections are not needed within a component, they can be removed entirely.
  If any of the `<script>` sub-sections are not needed with a component, they can be removed entirely.
  The separator comments for each of the `<script>` sub-sections should be left as-is, with the
    before and after spacing left as-is.

  Any HTML, styles, imports, props, methods, etc. defined in here are simply examples showing the
    desired way for these items to be handled and do not have to be included in a component
    if they aren't necessary.
-->

<template>
  <div>
    Current Count: {{ state_value }} (rounded: {{ computed_value }})
  </div>
</template>

<script setup lang='ts'>
// @ts-nocheck
import { get, set } from '@vueuse/core';
import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';

import { useEventBus } from '@/composables/event_bus.ts';
import { useToaster } from '@/composables/toaster.ts';
import { useStore } from '@/store/index.ts';

import type { ComputedRef, Ref } from 'vue';


/*-- Props --*/

const props_untyped = defineProps({
  prop: {
    required: true,
    type: String,
    validator: (value: string) => value.length > 0,
  },
});

// or

const props_typed = defineProps<{
  prop: string;
}>();


/*-- Injections / Utilities --*/

const $emit = defineEmits(['event']);
const $event_bus = useEventBus();
const $http = inject('$http');
const $route = useRoute();
const $router = useRouter();
const $store = useStore();
const $toaster = useToaster();


/*-- Data --*/

const state_value: Ref<number | undefined> = ref();


/*-- Computed --*/

const computed_value: ComputedRef<number | undefined> = computed(() => {
  if (!get(state_value)) return;
  return Math.round(get(state_value)!);
});


/*-- Watchers --*/

watch(state_value, (new_val: Ref<number | undefined>): void => {
  set(state_value, get(new_val));
});


/*-- Methods --*/

function method(param: string): void {
  console.log('method called with param:', param);
}


/*-- Component Lifecycle --*/

onBeforeRouteLeave((): void => {
  console.log('onBeforeRouteLeave called');
});

onMounted((): void => {
  console.log('onMounted called');
});

onUnmounted((): void => {
  console.log('onUnmounted called');
});
</script>

<style scoped>
/*
 * Any styles scoped to the component can be placed in here;
 * otherwise, we prefer global stylesheets for easier access and maintenance
 */
</style>
