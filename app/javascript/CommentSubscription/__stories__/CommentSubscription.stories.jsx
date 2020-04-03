import { h } from 'preact';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { CommentSubscription } from '../CommentSubscription';

export default {
  title: 'App Components/Comment Subscription',
  decorator: [withKnobs],
};

export const Default = () => (
  <div>
    <CommentSubscription onSubscribe={action('subscribed!')} />
    <p>Hello</p>
  </div>
);