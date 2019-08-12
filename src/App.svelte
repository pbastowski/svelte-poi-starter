<script>
    const dispatch = require('svelte').createEventDispatcher()
    import Input from './Input.svelte'

    let text = 'testing'

    function emit(el, name, detail) {
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

<!--
    Events dispatched with Svelte using createEventDispatcher() can not
    be handled with normal javascript event handling. That is
    `element.addEventListener('svelte-event', handler)` and
    `<element onsvelte-event="handler()">` will NOT work.
    Instead you have to use `element.$on('svelte-event', handler)`.
    See index.html for an example.

    Events dispatched with element.dispatchEvent(new Event('custom'))
    can be only be handled in JavaScript using
    `element.addEventListener('custom', handler)`.
    See index.html for an example.
-->

<Input
    on:click={e => {
        dispatch('svelte-event')
        emit(e.target, 'custom')
    }}
    bind:value={text}>
    Label
</Input>

<pre>text: {text}</pre>
