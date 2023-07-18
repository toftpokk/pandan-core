import { SvelteComponent } from "svelte";
declare namespace pdcore {
    export class NavLink extends SvelteComponent<{name:string,href:string,isActive:boolean}> {}
    export class Nav extends SvelteComponent<{webname:string,title:string}> {}
}
export = pdcore