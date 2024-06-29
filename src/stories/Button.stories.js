// src/stories/Button.stories.js
import Button from '../components/BtnComponent.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' }
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};