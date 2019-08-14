<script>
    import Input from './Input.svelte'
    const dispatch = require('svelte').createEventDispatcher()

    export let abc
    export let hello

    function emit(el, name, detail) {
        el.dispatchEvent(
            new Event(name, {
                detail,
                bubbles: true,
                composed: true
            })
        )
    }
    let text = 'testing'
    let initialised = false

    /**
     * When com piling to a web componenbt target, we must use a custom
     * onLoad handler to retrieve the props. That's because they are not
     * yet available when the component instance is create or in the
     * onMount callback.
     **/

    console.log('$$props: instance created:', 'abc=', abc, 'hello=', hello)
    function onLoad(ev) {
        console.log(
            '$$props: custom onLoad handler:',
            'abc=',
            abc,
            'hello=',
            hello
        )
        initialised = true
    }
</script>

<svelte:window on:load={onLoad} />

<svelte:options tag="my-thing" />

<!--
    We can prevent content from rendering until we have finished initialising
    our data by using a flag like initialised. For web component targets, this
    flag is set in the custom onLoad handler, see above.
    For Svelte apps you would initialise this flag in the onMount callback.
-->
{#if initialised}
    <h1>Hello Svelte</h1>

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
{/if}
