<template>
    <div class="input-group">
        <input class="input-integer" type="integer" :value="value" />
    </div>
</template>

<script>
export default {
    mixins: [Fieldtype],
};
</script>