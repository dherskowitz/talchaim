<template>
    <nav id="navbar">
        <div id="brand" v-on:click="closeMenu">
            <a href="#top">Tal Chaim</a>
        </div>
        <div id="navlist" v-bind:class="{ show: menu_open }">
            <a href="#info" v-on:click="closeMenu">About Kaddish</a>
            <a href="#faq" v-on:click="closeMenu">FAQ's</a>
            <a href="#request" v-on:click="closeMenu">Request Services</a>
        </div>
        <div class="menu_icon" v-on:click="menu_open = !menu_open" v-bind:class="{ change: menu_open }">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            menu_open: false
        }
    },
    methods: {
        closeMenu() {
            if (window.innerWidth < 768 && this.menu_open) {
                this.menu_open = !this.menu_open;
            }
        }
    }
};
</script>

<style scoped>
#navbar {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    background: #22313f;
    display: flex;
    padding: 0.2rem 0;
    justify-content: space-between;
    align-items: center;
}
#brand > a {
    padding: 0 1.5rem;
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
    font-style: italic;
    text-decoration: none;
}
#navlist > a {
    margin: 0 1.5rem;
    color: #fff;
    text-decoration: none;
    position: relative;
}

#navlist > a::after {
    content: "";
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    position: absolute;
    border-bottom: 2px solid #fff;
    transition: width 0.2s ease-in-out;
}

#navlist > a:hover::after {
    width: 100%;
}

.menu_icon {
    display: none;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 10px;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media (max-width: 768px) {
    .menu_icon {
        display: block;
    }
    #navlist {
        position: absolute;
        top: 54px;
        background: #22313f;
        width:  100%;
        padding: 1rem 0;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-in-out;
    }
    #navlist.show {
        opacity: 1;
        pointer-events: initial;
    }
    #navlist > a {
        display: block;
        padding: 1rem 0;
    }
}
</style>
