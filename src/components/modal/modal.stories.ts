import type { Meta, StoryObj } from '@storybook/vue3';

import Modal from './modal.vue';

type TModal = typeof Modal;
type TMeta = Meta<TModal>;
type TStory = StoryObj<TModal>;

const meta: TMeta = {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    id: {
      type: {
        name: 'string',
        required: true,
      }
    },
  },
  render: (args) => ({
    setup: () => ({...args}),
    components: { Modal },
    template: '<Modal :id="id"/>'
  })
};
export default meta;

export const Foo: TStory = {
  args: {
    id: 'banana'
  }
};
