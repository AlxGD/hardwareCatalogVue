import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ListaProdutos.vue';
import ProductDescription from '@/components/DescricaoProduto.vue';

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList,
    },
    {
        path: '/product/:id',
        name: 'ProductDescription',
        component: ProductDescription,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
