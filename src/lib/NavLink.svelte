<script lang="ts">
    export let name : string;
    export let href : string;
    export let isActive : boolean;
</script>
<li>
    <a class="py-3 mx-1 px-3 {isActive? "border-b-4 border-accent hover:border-accent-mid text-accent hover:text-accent-mid":"hover:text-light"}" href={href}>{name}</a>
</li>