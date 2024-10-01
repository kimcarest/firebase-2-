<template>
    <form class="auth-container">
        <h2>Inicio de Sesión</h2>
        <input type="email" v-model="email" placeholder="Correo Electrónico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click.prevent="signIn">Iniciar Sesión</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <router-link to="/signup">¿Aún no tienes cuenta? ¡Regístrate aqui!</router-link>
    </form>
</template>

<script>
    import firebaseAuthPlugin from "@/auth"
    import { app } from '../firebaseConfig.js';


    export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
        methods: {
        async signIn() {
            if (!this.email || !this.password) {
                this.errorMessage = 'Por favor, completa todos los campos.';
                return;
            }

            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirectPath = this.$route.query.redirect || '/';
                this.$router.push(redirectPath);
            } catch (error) {
                this.errorMessage = 'Error. Inténtelo nuevamente.';
            }
        }
    }
}
</script>

<style scoped>
    .auth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        gap: 1rem;
        border-radius: 10px;
        padding: 2rem;
        background-color: #f7f7f7;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .error {
        color: red;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 1rem;
    }

</style>