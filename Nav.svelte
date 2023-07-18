<script>
    import NavLink from "./NavLink.svelte";
    export let title;
    export let webname;
</script>
<ul class="select-none dark:text-white text-main font-medium text-2xl my-6 flex justify-start w-full">
    <li><span class="py-3 mx-1 px-3 text-xl text-accent">toftpokk<span class="dark:text-white text-mid">@{webname}</span></span></li>
    <NavLink name="Home" href="/" isActive={title == "Home"}/>
    <NavLink name="Projects" href="/projects" isActive={title == "Projects"}/>
    <NavLink name="Book Notes" href="/book-notes" isActive={title == "Book Notes"}/>
    <NavLink name="About" href="/about" isActive={title == "About"}/>
</ul>