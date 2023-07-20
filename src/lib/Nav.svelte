<script lang="ts">
    export let webname : string;
</script>
<style>
    .nav {
        user-select: none;
        color: var(--text-color);
        display: flex;
        justify-content: flex-start;
        margin: 1.5rem auto;
        flex-direction: row;
    }
    .logo {
        padding: 0.75rem;
        margin: auto 0.25rem;
        color: var(--color-accent);
    }
    .name {
        color: var(--text-color);
    }
</style>
<ul class="nav">
    <li><span class="logo">toftpokk<span class="name">@{webname}</span></span></li>
    <slot/>
</ul>