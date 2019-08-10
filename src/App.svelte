<script>
    import Input from './Input.svelte'
    let text = 'testing'
</script>

<h1>Hello Svelte</h1>

<svelte:options tag="my-thing" />

<Input bind:value={text}>Label</Input>
<pre>text: { text }</pre>
