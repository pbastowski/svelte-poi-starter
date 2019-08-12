<script>
    import Input from './Input.svelte'

    let text = 'testing'

    function emit(el, name, detail) {
        console.log('Sending CLICK event')
        el.dispatchEvent(
            new Event(name, {
                detail,
                bubbles: true,
                composed: true
            })
        )
    }
</script>

<h1>Hello Svelte</h1>

<svelte:options tag="my-thing" accessors={true} />

<Input
    on:click={e => emit(e.target, 'custom')}
    bind:value={text}>
    Label
</Input>

<pre>text: {text}</pre>

<!--
    on:click={ev => {
        domEvent(ev.target, 'custom')
    }}
-->
