const addToCart = (productId, index, cart, setCart, selectQuantity) => {
  const quantityValue = Number(selectQuantity.current[index].value);

  setCart(() => {
    const matchingItem = cart.find((item) => {
      return item.id === productId;
    });

    if (matchingItem) {
      return cart.map((item) => {
        return item.id === productId
          ? { ...item, quantity: item.quantity + quantityValue }
          : item;
      });
    } else {
      return [...cart, { id: productId, quantity: quantityValue }];
    }
  });

  console.log(cart)
};

export default addToCart;
