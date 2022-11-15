import Fieldtype from './components/like';

Statamic.booting(() => {
    Statamic.$components.register('like-fieldtype', Fieldtype);
});
