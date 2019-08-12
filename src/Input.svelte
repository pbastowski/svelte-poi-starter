<script>
    export let value
    export let labelClass
    export let labelStyle
</script>

<svelte:options tag="my-input" />

<label class={labelClass} style={labelStyle}>
    <slot />
    <input on:click bind:value class={$$props.class} style={$$props.style} />
</label>
