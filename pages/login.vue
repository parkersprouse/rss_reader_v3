<template>
  <section class='@container p-4 flex flex-nowrap flex-col justify-center items-center h-full'>
    <div class='text-4xl pb-4 font-bold'>
      RSS Reader
    </div>

    <!--
    <UAlert
      color='red'
      icon='i-ph-x-circle-light'
      title='You must log in'
      variant='subtle'
      class='rounded mb-4 bg-red-200 text-red-600 dark:bg-red-400 dark:text-red-400 dark:bg-opacity-15'
    />
    -->

    <UCard
      class='rounded-none max-w-full w-full @3xl:w-[28rem]'
      :ui="{
        footer: {
          base: 'flex flex-row flex-nowrap items-center justify-center gap-2',
          padding: 'px-2 py-2',
        },
      }"
    >
      <UForm
        :schema='schema'
        :state='state'
        class='space-y-4'
        @submit='onSubmit'
      >
        <UFormGroup
          label='E-mail'
          name='email'
          size='md'
        >
          <UInput
            v-model='state.email'
            icon='ph:envelope-light'
            input-class='rounded-none'
          />
        </UFormGroup>

        <UFormGroup
          label='Password'
          name='password'
          size='md'
        >
          <UInput
            v-model='state.password'
            type='password'
            icon='ph:lock-simple-light'
            input-class='rounded-none'
          />
        </UFormGroup>

        <UButton
          :disabled='!can_submit'
          type='submit'
          icon='ph:sign-in-light'
          block
          class='rounded-none'
        >
          Login
        </UButton>
      </UForm>

      <template #footer>
        <UButton
          :to='{ name: "index" }'
          color='gray'
          variant='ghost'
        >
          <Icon name='ph:question-light' />
          Forgot Password
        </UButton>

        <Icon
          name='ph:dot-outline-fill'
          class='flex-shrink-0 text-muted'
        />

        <UButton
          :to='{ name: "index" }'
          color='gray'
          variant='ghost'
        >
          <Icon name='ph:user-circle-plus-light' />
          Sign Up
        </UButton>
      </template>
    </UCard>
  </section>
</template>

<script setup lang='ts'>
import { z } from 'zod';

import type { FormSubmitEvent } from '#ui/types';


/*-- Injections / Utilities --*/

const $toast = useToast();


/*-- Data --*/

const schema = z.object({
  email: z
    .string({ required_error: '' })
    .email('Provided e-mail is invalid'),
  password: z
    .string({ required_error: '' }),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});


/*-- Computed --*/

const can_submit = computed<boolean>(() => schema.safeParse(state).success);


/*-- Methods --*/

async function onSubmit(event: FormSubmitEvent<Schema>): Promise<void> {
  console.log(event.data);
  $toast.add({
    closeButton: {
      color: 'gray',
      variant: 'ghost',
    },
    color: 'emerald',
    description: `${event.data.email} & ${event.data.password}`,
    title: 'Success',
  });
}
</script>
