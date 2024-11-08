'use client'
import { useAuthStore, useCart, usePurchase } from "@/lib/store";

export const useCheckAuth = () => {
    const {
        setUserId,
        setLogin,
        clearAuth,
    } = useAuthStore();
    const { setCart } = useCart()
    const { setPurchase } = usePurchase()
    const setStore = async () => {
        try {
            const res = await fetch("/auth/checkAuth");
            if (res.ok) {
                const data = await res.json();
                if (data.isLoggedIn) {
                    setUserId(data.user.id);
                    setLogin();
                    setCart(data.infoUser.cart)
                    setPurchase(data.infoUser.purchases)
                } else {
                    clearAuth();
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return { setStore }
};