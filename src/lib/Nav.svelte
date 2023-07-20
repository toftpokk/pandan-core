<script lang="ts">
    import NavLink from "./NavLink.svelte";
    export let title;
    export let webname;
    export let links : Array<{name: string, href: string}> = [];
    console.log(links)
</script>
<ul class="select-none dark:text-white text-main font-medium text-2xl my-6 flex justify-start w-full">
    <li><span class="py-3 mx-1 px-3 text-xl text-accent">toftpokk<span class="dark:text-white text-mid">@{webname}</span></span></li>
    {#each links as l}
        <NavLink name={l.name} href={l.href} isActive={title==l.name}/>
    {/each}
</ul>