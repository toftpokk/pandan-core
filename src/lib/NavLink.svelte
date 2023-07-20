<script lang="ts">
    export let name : string;
    export let href : string;
    export let isActive : boolean;
</script>
<style>
    .navlink {
        padding: 0.75rem;
        margin: auto 0.25rem;
        color: var(--text-color);
    }
    .navlink:hover {
        border-bottom: solid var(--text-color) 4px;
    }

    .active {
        color: var(--color-accent);
    }
    .active:hover {
        border-bottom: solid var(--color-accent) 4px;
    }
</style>
<li>
    <a class="navlink" class:active={isActive} href={href}>{name}</a>
</li>