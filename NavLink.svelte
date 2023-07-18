<script>
    export let name;
    export let href;
    export let isActive;
</script>
<li>
    <a class="py-3 mx-1 px-3 {isActive? "border-b-4 border-accent hover:border-accent-mid text-accent hover:text-accent-mid":"hover:text-light"}" href={href}>{name}</a>
</li>