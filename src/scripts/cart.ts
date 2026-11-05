export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

const KEY = 'zx-cart';

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch {}
  window.dispatchEvent(new CustomEvent('cart:update'));
}

export function addToCart(item: Omit<CartItem, 'qty'>) {
  const cart = getCart();
  const found = cart.find((i) => i.id === item.id);
  if (found) found.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
}

export function changeQty(id: string, delta: number) {
  const cart = getCart()
    .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
    .filter((i) => i.qty > 0);
  saveCart(cart);
}

export function bindAddButtons(onAdd?: () => void) {
  document.querySelectorAll<HTMLButtonElement>('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const { id, name, price } = btn.dataset;
      addToCart({ id: id!, name: name!, price: Number(price) });
      btn.classList.add('added');
      btn.textContent = '✓ Agregado';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'Agregar';
      }, 1400);
      onAdd?.();
    });
  });
}
