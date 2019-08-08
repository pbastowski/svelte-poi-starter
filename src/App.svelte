<script>
    import Input from './Input.svelte'
    let text = 'testing'
</script>

<h1>Hello Svelte 42</h1>
<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id impedit iste
    laborum obcaecati officiis quam reiciendis sapiente soluta voluptate!
    Cupiditate doloremque dolores earum ex id molestiae, nihil rerum unde!
</p>

<svelte:options tag="my-thing" />

<Input bind:value={text} style="color: red;">Label</Input>
{text}
