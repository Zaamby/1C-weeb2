<template>
    <div class="focus">
        <form class="focus_holder" v-on:keydown.enter="register">
            <input type="text" class="form-control"  placeholder="Логин" v-model="username">
            <input type="password" class="form-control"  placeholder="Пароль" v-model="passwordA">
            <input type="password" class="form-control"  placeholder="Повтор Пароля" v-model="passwordB">
            <button type="submit" class="btn btn-primary">Зарегистрироваться!</button>
        </form>
    </div>
</template>
<script>
    module.exports = {
        data: function(){
            return {
                username: "",
                passwordA: "",
                passwordB: "",
            };
        },
        methods: {
            register: function() {
                if(this.passwordA === this.passwordB){
                    this.$auth.register(this.username, this.passwordA).then(
                        function() {
                            this.$router.go("/login");
                        }
                    );
                }
            }
        }
    }
</script>