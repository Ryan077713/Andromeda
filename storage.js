const StorageManager = {
  saveUser(user) {
    try {
      localStorage.setItem('user', JSON.stringify(user));
      // Trigger storage event to sync across tabs/windows
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error saving user:', error);
    }
  },
  
  getUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error retrieving user:', error);
      return null;
    }
  },

  saveUsedGiftCards(usedCodes) {
    try {
      localStorage.setItem('usedGiftCards', JSON.stringify(usedCodes));
    } catch (error) {
      console.error('Error saving used gift cards:', error);
    }
  },

  getUsedGiftCards() {
    try {
      const usedCards = localStorage.getItem('usedGiftCards');
      return usedCards ? JSON.parse(usedCards) : [];
    } catch (error) {
      console.error('Error retrieving used gift cards:', error);
      return [];
    }
  },

  saveRedemptionCodes(codes) {
    try {
      localStorage.setItem('redemptionCodes', JSON.stringify(codes));
    } catch (error) {
      console.error('Error saving redemption codes:', error);
    }
  },

  getRedemptionCodes() {
    try {
      const codes = localStorage.getItem('redemptionCodes');
      return codes ? JSON.parse(codes) : [];
    } catch (error) {
      console.error('Error retrieving redemption codes:', error);
      return [];
    }
  },

  saveRedemptionCode(code) {
    try {
      const codes = this.getRedemptionCodes();
      const existingCodeIndex = codes.findIndex(c => c.code === code.code);
      
      if (existingCodeIndex !== -1) {
        // Update existing code
        codes[existingCodeIndex] = { ...code };
      } else {
        // Add new code
        codes.push({ ...code });
      }
      
      // Save the entire updated codes array
      this.saveRedemptionCodes(codes);
    } catch (error) {
      console.error('Error saving individual redemption code:', error);
    }
  },

  clearUser() {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error clearing user:', error);
    }
  },

  saveGiftCards(giftCards) {
    try {
      localStorage.setItem('giftCards', JSON.stringify(giftCards));
    } catch (error) {
      console.error('Error saving gift cards:', error);
    }
  },

  saveGiftCardConfigs(giftCardConfigs) {
    try {
      localStorage.setItem('giftCardConfigs', JSON.stringify(giftCardConfigs));
    } catch (error) {
      console.error('Error saving gift card configs:', error);
    }
  },

  saveFruits(fruits) {
    try {
      // Ensure all fruits have numeric values
      const processedFruits = fruits.map(fruit => ({
        ...fruit,
        id: Number(fruit.id),
        price: Number(fruit.price),
        stock: Number(fruit.stock)
      }));
      
      // Save to localStorage with deep parsing
      localStorage.setItem('fruits', JSON.stringify(processedFruits));
      
      // Trigger storage event to sync across tabs/windows
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error saving fruits:', error);
    }
  },

  getFruits() {
    try {
      const storedFruits = localStorage.getItem('fruits');
      return storedFruits ? JSON.parse(storedFruits) : [];
    } catch (error) {
      console.error('Error retrieving fruits:', error);
      return [];
    }
  },

  setupStorageSync(updateCallback) {
    window.addEventListener('storage', (event) => {
      // Check if the change is related to fruits
      if (event.key === 'fruits') {
        const updatedFruits = this.getFruits();
        updateCallback(updatedFruits);
      }
    });
  }
};