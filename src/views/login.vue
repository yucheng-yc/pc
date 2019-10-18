<template>
    <div class="login" :style="{background:bgUrl}">

    </div>
</template>

<style scoped>
    .login {
        height: 689px;
        width:100%;
    }

</style>

<script>
export default {
    props:{
        type:String,
        default:"url(@/assets/images/bg_login.jpg) no repect cover"
    }
}
</script>