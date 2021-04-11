<template>
    <div>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="activated" exact style="width:200px">
                <a>Home</a>
            </router-link>
            <router-link to="/users" tag="li" active-class="activated" style="width:200px">
                <a>Users</a>
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
    .activated{
        background-color: darkred;
    }
</style>