new Vue({
  el: '#app',
  data: {
    logo: 'logo.png',
    user: StorageManager.getUser(),
    showLoginModal: false,
    showRegisterModal: false,
    showCart: false,
    showAdminPanel: false,
    editingFruit: null,
    fruits: (() => {
      const storedFruits = StorageManager.getFruits();
      return storedFruits.length > 0 ? storedFruits : [
        {
          id: 1,
          name: 'Rocket',
          description: 'A powerful rocket fruit',
          price: 50.00,
          stock: 10,
          image: '/RocketFruit.png'
        },
        {
          id: 2,
          name: 'Spin',
          description: 'A spinning fruit with unique abilities',
          price: 45.00,
          stock: 8,
          image: '/SpinFruit.png'
        },
        {
          id: 3,
          name: 'Chop',
          description: 'A fruit with chopping capabilities',
          price: 55.00,
          stock: 6,
          image: '/BladeFruit.webp'
        },
        {
          id: 4,
          name: 'Spring',
          description: 'A bouncy, elastic fruit',
          price: 40.00,
          stock: 12,
          image: '/SpringFruit.webp'
        },
        {
          id: 5,
          name: 'Bomb',
          description: 'An explosive fruit with destructive power',
          price: 60.00,
          stock: 5,
          image: '/BombFruit.webp'
        },
        {
          id: 6,
          name: 'Smoke',
          description: 'A mysterious, smoky fruit',
          price: 50.00,
          stock: 7,
          image: '/SmokeFruit.webp'
        },
        {
          id: 7,
          name: 'Spike',
          description: 'A sharp and dangerous fruit',
          price: 55.00,
          stock: 6,
          image: '/SpikeFruit.webp'
        },
        {
          id: 8,
          name: 'Flame',
          description: 'A fiery fruit with burning potential',
          price: 65.00,
          stock: 5,
          image: '/FlameFruit.webp'
        },
        {
          id: 9,
          name: 'Falcon',
          description: 'A fruit with falcon-like abilities',
          price: 55.00,
          stock: 6,
          image: '/FalconFruit.webp'
        },
        {
          id: 10,
          name: 'Ice',
          description: 'A cool, freezing fruit',
          price: 45.00,
          stock: 8,
          image: '/IceFruit.webp'
        },
        {
          id: 11,
          name: 'Sand',
          description: 'A desert-themed fruit',
          price: 40.00,
          stock: 10,
          image: '/SandFruit.webp'
        },
        {
          id: 12,
          name: 'Dark',
          description: 'A mysterious dark fruit',
          price: 70.00,
          stock: 4,
          image: '/DarkFruit.webp'
        },
        {
          id: 13,
          name: 'Diamond',
          description: 'A precious, sparkling fruit',
          price: 80.00,
          stock: 3,
          image: '/DiamondFruit.webp'
        },
        {
          id: 14,
          name: 'Light',
          description: 'A bright, illuminating fruit',
          price: 60.00,
          stock: 5,
          image: '/LightFruit.webp'
        },
        {
          id: 15,
          name: 'Rubber',
          description: 'A bouncy, stretchy fruit',
          price: 45.00,
          stock: 8,
          image: '/RubberFruit.webp'
        },
        {
          id: 16,
          name: 'Barrier',
          description: 'A protective barrier fruit',
          price: 50.00,
          stock: 7,
          image: '/BarrierFruit.webp'
        },
        {
          id: 17,
          name: 'Ghost',
          description: 'A supernatural, spectral fruit',
          price: 55.00,
          stock: 6,
          image: '/GhostFruit.webp'
        },
        {
          id: 18,
          name: 'Magma',
          description: 'A hot, volcanic fruit',
          price: 65.00,
          stock: 5,
          image: '/MagmaFruit.webp'
        },
        {
          id: 19,
          name: 'Quake',
          description: 'A ground-shaking fruit',
          price: 60.00,
          stock: 5,
          image: '/QuakeFruit.webp'
        },
        {
          id: 20,
          name: 'Buddha',
          description: 'A serene, enlightened fruit',
          price: 75.00,
          stock: 4,
          image: '/BuddhaFruit.webp'
        },
        {
          id: 21,
          name: 'Love',
          description: 'A heart-warming fruit',
          price: 50.00,
          stock: 7,
          image: '/LoveFruit.webp'
        },
        {
          id: 22,
          name: 'Spider',
          description: 'A web-spinning fruit',
          price: 55.00,
          stock: 6,
          image: '/SpiderFruit.webp'
        },
        {
          id: 23,
          name: 'Sound',
          description: 'A melodic, sonic fruit',
          price: 45.00,
          stock: 8,
          image: '/SoundFruit.webp'
        },
        {
          id: 24,
          name: 'Phoenix',
          description: 'A mythical, reborn fruit',
          price: 80.00,
          stock: 3,
          image: '/PhoenixFruit.webp'
        },
        {
          id: 25,
          name: 'Portal',
          description: 'A dimensional-shifting fruit',
          price: 70.00,
          stock: 4,
          image: '/PortalFruit.webp'
        },
        {
          id: 26,
          name: 'Rumble',
          description: 'A thunderous, powerful fruit',
          price: 60.00,
          stock: 5,
          image: '/RumbleFruit.webp'
        },
        {
          id: 27,
          name: 'Pain',
          description: 'A sorrowful, intense fruit',
          price: 55.00,
          stock: 6,
          image: '/PainFruit.webp'
        },
        {
          id: 28,
          name: 'Blizzard',
          description: 'A freezing, winter-themed fruit',
          price: 50.00,
          stock: 7,
          image: '/BlizzardFruit.webp'
        },
        {
          id: 29,
          name: 'Gravity',
          description: 'A gravity-manipulating fruit',
          price: 65.00,
          stock: 5,
          image: '/GravityFruit.webp'
        },
        {
          id: 30,
          name: 'Kitsune',
          description: 'A mythical, fox-spirit fruit',
          price: 75.00,
          stock: 4,
          image: '/KitsuneFruit.webp'
        },
        {
          id: 31,
          name: 'Venom',
          description: 'A poisonous, toxic fruit',
          price: 60.00,
          stock: 5,
          image: '/VenomFruit.webp'
        },
        {
          id: 32,
          name: 'Shadow',
          description: 'A dark, mysterious fruit',
          price: 70.00,
          stock: 4,
          image: '/ShadowFruit.webp'
        },
        {
          id: 33,
          name: 'Control',
          description: 'A powerful, mind-controlling fruit',
          price: 80.00,
          stock: 3,
          image: '/ControlFruit.webp'
        },
        {
          id: 34,
          name: 'Dough',
          description: 'A soft, malleable fruit',
          price: 45.00,
          stock: 8,
          image: '/DoughFruit.webp'
        },
        {
          id: 35,
          name: 'Dragon',
          description: 'A mythical, powerful dragon fruit',
          price: 85.00,
          stock: 3,
          image: '/DragonFruit.webp'
        },
        {
          id: 36,
          name: 'Leopard',
          description: 'A swift, predatory fruit',
          price: 55.00,
          stock: 6,
          image: '/LeopardFruit.webp'
        },
        {
          id: 37,
          name: 'Spirit',
          description: 'A mystical, ethereal fruit',
          price: 70.00,
          stock: 4,
          image: '/SpiritFruit.webp'
        },
        {
          id: 38,
          name: 'Yeti',
          description: 'A frosty, mythical creature fruit',
          price: 70.00,
          stock: 5,
          image: '/YetiFruit.webp'
        },
        {
          id: 39,
          name: 'Gas',
          description: 'A volatile, gaseous fruit',
          price: 65.00,
          stock: 6,
          image: '/GasFruit.webp'
        }
      ];
    })(),
    cart: [],
    adminUsers: [
      { username: 'Ryan0777', password: '19283747' }
    ],
    giftCards: JSON.parse(localStorage.getItem('giftCards')) || [],
    giftCardCode: '',
    showGiftCardManager: false,
    newGiftCard: {
      code: '',
      value: 0
    },
    giftCardConfigs: JSON.parse(localStorage.getItem('giftCardConfigs')) || [],
    newGiftCardConfig: {
      code: '',
      value: 0
    },
    usedGiftCards: StorageManager.getUsedGiftCards(),
    redemptionCodes: StorageManager.getRedemptionCodes(),
    lastPurchaseRedemptionCode: null
  },
  methods: {
    handleLogin(username, password) {
      const adminUser = this.adminUsers.find(user => 
        user.username === username && user.password === password
      );

      if (adminUser) {
        this.user = {
          username: username,
          isAdmin: true,
          balance: 10000
        };
        StorageManager.saveUser(this.user);
        this.showLoginModal = false;
        this.showAdminPanel = true;
      } else {
        alert('Credenciais inválidas');
      }
    },
    handleRegister(username, email, password) {
      // Basic registration logic
      this.user = {
        username,
        email,
        balance: 0,
        isAdmin: false
      };
      StorageManager.saveUser(this.user);
      this.showRegisterModal = false;
    },
    logout() {
      StorageManager.clearUser();
      this.user = null;
    },
    addFruit(fruit) {
      const updatedFruits = this.fruits.map(f => 
        f.name === fruit.name || f.id === fruit.id 
          ? {
              ...f,
              name: fruit.name || f.name,
              description: fruit.description,
              price: Number(fruit.price),
              stock: Number(fruit.stock),
              image: fruit.image || f.image
            } 
          : f
      );

      if (!updatedFruits.some(f => f.name === fruit.name)) {
        const newFruit = {
          id: this.fruits.length > 0 
            ? Math.max(...this.fruits.map(f => f.id)) + 1 
            : 1,
          name: fruit.name,
          description: fruit.description,
          price: Number(fruit.price),
          stock: Number(fruit.stock),
          image: fruit.image
        };
        updatedFruits.push(newFruit);
      }

      this.fruits = updatedFruits;
      this.saveFruits();
    },
    updateFruit(updatedFruit) {
      const updatedFruits = this.fruits.map(fruit => {
        if (fruit.name === updatedFruit.name || fruit.id === updatedFruit.id) {
          return {
            ...fruit,
            name: updatedFruit.name,
            description: updatedFruit.description,
            price: Number(updatedFruit.price),
            stock: Number(updatedFruit.stock),
            image: updatedFruit.image
          };
        }
        return fruit;
      });

      this.fruits = updatedFruits;
      this.saveFruits();
    },
    saveFruits() {
      StorageManager.saveFruits(this.fruits);
    },
    deleteFruit(fruitId) {
      const fruitToDelete = this.fruits.find(f => f.id === fruitId);
      
      if (fruitToDelete) {
        const updatedFruits = this.fruits.filter(f => f.name !== fruitToDelete.name);
        
        this.fruits = updatedFruits;
        this.saveFruits();
      }
    },
    addToCart(fruit) {
      if (this.user && fruit.stock > 0) {
        const cartItem = {...fruit};
        this.cart.push(cartItem);
        
        const updatedFruits = this.fruits.map(f => {
          if (f.name === fruit.name && f.stock > 0) {
            return { ...f, stock: f.stock - 1 };
          }
          return f;
        });
        
        this.fruits = updatedFruits;
        this.saveFruits();
      } else {
        alert('Não é possível adicionar ao carrinho');
      }
    },
    removeFromCart(index) {
      const removedFruit = this.cart[index];
      
      this.cart.splice(index, 1);
      
      const updatedFruits = this.fruits.map(f => {
        if (f.name === removedFruit.name) {
          return { ...f, stock: f.stock + 1 };
        }
        return f;
      });
      
      this.fruits = updatedFruits;
      this.saveFruits();
    },
    checkout() {
      const total = this.cartTotal;
      
      if (!this.user) {
        alert('Faça login para finalizar a compra');
        return;
      }

      if (this.user.balance >= total) {
        const redemptionCode = this.generateUniqueRedemptionCode();
        
        while (this.redemptionCodes.some(rc => rc.code === redemptionCode)) {
          redemptionCode = this.generateUniqueRedemptionCode();
        }
        
        const newRedemptionCode = {
          code: redemptionCode,
          amount: total,
          userId: this.user.username,
          timestamp: new Date().toISOString(),
          used: false
        };
        
        StorageManager.saveRedemptionCode(newRedemptionCode);

        this.user.balance -= total;
        StorageManager.saveUser(this.user);

        this.redemptionCodes = StorageManager.getRedemptionCodes();

        this.cart = [];

        this.lastPurchaseRedemptionCode = redemptionCode;

        this.sendDiscordNotification('Nova compra realizada!');

        alert(`Compra finalizada com sucesso!\n\nSeu código de resgate é: ${redemptionCode}\n\nATENÇÃO: Este código só pode ser usado uma vez!`);
      } else {
        alert('Saldo insuficiente');
      }
    },
    sendDiscordNotification(message) {
      console.log('Sending Discord notification:', message);
    },
    startEditFruit(fruit) {
      this.editingFruit = {
        id: fruit.id,
        name: fruit.name,
        description: fruit.description,
        price: Number(fruit.price),
        stock: Number(fruit.stock),
        image: fruit.image
      };
    },
    cancelEditFruit() {
      this.editingFruit = null;
    },
    closeAdminPanel() {
      this.showAdminPanel = false;
      this.editingFruit = null;
    },
    generateUniqueRedemptionCode() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code;
      do {
        code = Array.from(
          { length: 8 }, 
          () => characters[Math.floor(Math.random() * characters.length)]
        ).join('');
      } while (this.redemptionCodes.some(rc => rc.code === code));
      
      return code;
    },
    verifyRedemptionCode(code) {
      const redemptionCode = this.redemptionCodes.find(rc => rc.code === code);
      
      if (redemptionCode) {
        if (redemptionCode.used) {
          return { valid: false, message: 'Código já utilizado.' };
        }
        
        redemptionCode.used = true;
        
        StorageManager.saveRedemptionCode(redemptionCode);
        
        this.redemptionCodes = StorageManager.getRedemptionCodes();
        
        return { 
          valid: true, 
          details: {
            amount: redemptionCode.amount,
            userId: redemptionCode.userId,
            timestamp: redemptionCode.timestamp
          }
        };
      }
      
      return { valid: false, message: 'Código inválido.' };
    },
    deleteRedemptionCode(code) {
      const index = this.redemptionCodes.findIndex(rc => rc.code === code);
      if (index !== -1) {
        this.redemptionCodes.splice(index, 1);
        StorageManager.saveRedemptionCodes(this.redemptionCodes);
      }
    },
    createGiftCard() {
      if (this.newGiftCard.code && this.newGiftCard.value > 0) {
        const existingCard = this.giftCards.find(card => card.code === this.newGiftCard.code);
        
        if (existingCard) {
          alert('Este código de gift card já existe.');
          return;
        }

        this.giftCards.push({
          code: this.newGiftCard.code,
          value: this.newGiftCard.value
        });

        this.saveGiftCards();
        this.newGiftCard = { code: '', value: 0 };
        alert('Gift card criado com sucesso!');
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    },
    deleteGiftCard(code) {
      const index = this.giftCards.findIndex(card => card.code === code);
      if (index !== -1) {
        this.giftCards.splice(index, 1);
        this.saveGiftCards();
      }
    },
    redeemGiftCard() {
      const giftCardConfig = this.giftCardConfigs.find(config => config.code === this.giftCardCode);
      
      if (giftCardConfig) {
        if (this.usedGiftCards.includes(this.giftCardCode)) {
          alert('Este código já foi utilizado.');
          return;
        }

        if (this.user) {
          this.user.balance += giftCardConfig.value;
          StorageManager.saveUser(this.user);

          this.usedGiftCards.push(this.giftCardCode);
          StorageManager.saveUsedGiftCards(this.usedGiftCards);

          const index = this.giftCardConfigs.findIndex(config => config.code === this.giftCardCode);
          this.giftCardConfigs.splice(index, 1);
          this.saveGiftCardConfigs();
          
          alert(`Código resgatado! Você recebeu R$ ${giftCardConfig.value.toFixed(2)}`);
          this.giftCardCode = '';
        } else {
          alert('Faça login para resgatar o código.');
        }
      } else {
        alert('Código inválido.');
      }
    },
    createGiftCardConfig() {
      if (this.newGiftCardConfig.code && this.newGiftCardConfig.value > 0) {
        const existingConfig = this.giftCardConfigs.find(config => config.code === this.newGiftCardConfig.code);
        
        if (existingConfig) {
          alert('Este código já existe.');
          return;
        }

        this.giftCardConfigs.push({
          code: this.newGiftCardConfig.code,
          value: this.newGiftCardConfig.value
        });

        this.saveGiftCardConfigs();
        this.newGiftCardConfig = { code: '', value: 0 };
        alert('Código de resgate configurado com sucesso!');
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    },
    deleteGiftCardConfig(code) {
      const index = this.giftCardConfigs.findIndex(config => config.code === code);
      if (index !== -1) {
        this.giftCardConfigs.splice(index, 1);
        this.saveGiftCardConfigs();
      }
    },
    saveGiftCards() {
      StorageManager.saveGiftCards(this.giftCards);
    },
    saveGiftCardConfigs() {
      StorageManager.saveGiftCardConfigs(this.giftCardConfigs);
    }
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, fruit) => total + fruit.price, 0);
    }
  },
  mounted() {
    this.redemptionCodes = StorageManager.getRedemptionCodes();

    StorageManager.setupStorageSync((updatedFruits) => {
      this.fruits = updatedFruits;
    });

    Vue.component('admin-panel', {
      props: ['fruits'],
      template: `
        <div class="modal d-block" tabindex="-1">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header position-relative">
                <h5 class="modal-title">Painel Administrativo</h5>
                <button 
                  @click="$emit('close')" 
                  class="btn-close position-absolute top-0 end-0 m-3" 
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Adicionar Nova Fruta</h5>
                    <input v-model="newFruit.name" placeholder="Nome" class="form-control mb-2">
                    <input v-model="newFruit.description" placeholder="Descrição" class="form-control mb-2">
                    <input v-model.number="newFruit.price" type="number" placeholder="Preço" class="form-control mb-2">
                    <input v-model.number="newFruit.stock" type="number" placeholder="Estoque" class="form-control mb-2">
                    <input v-model="newFruit.image" placeholder="URL da Imagem" class="form-control mb-2">
                    <button @click="addFruit" class="btn btn-primary">Adicionar Fruta</button>
                  </div>
                  <div class="col-md-6">
                    <h5>Frutas Existentes</h5>
                    <div v-for="fruit in fruits" :key="fruit.id" class="mb-2 d-flex justify-content-between align-items-center">
                      <span>{{ fruit.name }} - Estoque: {{ fruit.stock }}</span>
                      <div>
                        <button @click="editFruit = {...fruit}" class="btn btn-sm btn-warning me-2">Editar</button>
                        <button @click="$emit('delete-fruit', fruit.id)" class="btn btn-sm btn-danger">Excluir</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-if="editFruit" class="mt-4">
                  <h5>Editar Fruta</h5>
                  <div class="row">
                    <div class="col">
                      <input v-model="editFruit.name" placeholder="Nome" class="form-control mb-2">
                      <input v-model="editFruit.description" placeholder="Descrição" class="form-control mb-2">
                      <input v-model.number="editFruit.price" type="number" placeholder="Preço" class="form-control mb-2">
                      <input v-model.number="editFruit.stock" type="number" placeholder="Estoque" class="form-control mb-2">
                      <input v-model="editFruit.image" placeholder="URL da Imagem" class="form-control mb-2">
                      <button @click="updateFruit" class="btn btn-success me-2">Salvar Alterações</button>
                      <button @click="editFruit = null" class="btn btn-secondary">Cancelar</button>
                    </div>
                  </div>
                </div>

                <slot name="extra-buttons"></slot>
                
                <div class="mt-4">
                  <h5>Códigos de Resgate</h5>
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Valor</th>
                        <th>Usuário</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Pedido</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="code in $root.redemptionCodes" :key="code.code">
                        <td>{{ code.code }}</td>
                        <td>R$ {{ code.amount.toFixed(2) }}</td>
                        <td>{{ code.userId }}</td>
                        <td>{{ new Date(code.timestamp).toLocaleString() }}</td>
                        <td>
                          <span :class="code.used ? 'text-danger' : 'text-success'">
                            {{ code.used ? 'Usado' : 'Disponível' }}
                          </span>
                        </td>
                        <td>
                          <button 
                            @click="showOrderDetails(code)" 
                            class="btn btn-sm btn-info"
                          >
                            Ver Detalhes
                          </button>
                        </td>
                        <td>
                          <button 
                            @click="$root.deleteRedemptionCode(code.code)" 
                            class="btn btn-sm btn-danger"
                          >
                            Excluir
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      data() {
        return {
          newFruit: {
            name: '',
            description: '',
            price: 0,
            stock: 0,
            image: ''
          },
          editFruit: null
        }
      },
      methods: {
        addFruit() {
          this.$emit('add-fruit', this.newFruit);
          this.newFruit = {
            name: '',
            description: '',
            price: 0,
            stock: 0,
            image: ''
          };
        },
        updateFruit() {
          this.$emit('update-fruit', this.editFruit);
          this.editFruit = null;
        },
        showOrderDetails(code) {
          alert(`Detalhes do Pedido:
Código: ${code.code}
Valor: R$ ${code.amount.toFixed(2)}
Usuário: ${code.userId}
Data: ${new Date(code.timestamp).toLocaleString()}
Status: ${code.used ? 'Usado' : 'Disponível'}

Itens do Pedido:
${this.getOrderItems(code)}`);
        },
        getOrderItems(code) {
          return 'Detalhes dos itens não implementados ainda';
        }
      }
    });

    Vue.component('login-modal', {
      template: `
        <div class="modal d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Login</h5>
                <button @click="$emit('close')" type="button" class="btn-close" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input v-model="username" placeholder="Usuário" class="form-control mb-2">
                <input v-model="password" type="password" placeholder="Senha" class="form-control">
              </div>
              <div class="modal-footer">
                <button @click="login" class="btn btn-primary">Entrar</button>
                <button @click="$emit('close')" class="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      `,
      data() {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
        login() {
          this.$emit('login', this.username, this.password);
        }
      }
    });

    Vue.component('register-modal', {
      template: `
        <div class="modal d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Registrar</h5>
                <button @click="$emit('close')" type="button" class="btn-close" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input v-model="username" placeholder="Usuário" class="form-control mb-2">
                <input v-model="email" type="email" placeholder="Email" class="form-control mb-2">
                <input v-model="password" type="password" placeholder="Senha" class="form-control">
              </div>
              <div class="modal-footer">
                <button @click="register" class="btn btn-primary">Registrar</button>
                <button @click="$emit('close')" class="btn btn-secondary">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      `,
      data() {
        return {
          username: '',
          email: '',
          password: ''
        }
      },
      methods: {
        register() {
          this.$emit('register', this.username, this.email, this.password);
        }
      }
    });

    Vue.component('cart-modal', {
      props: ['cart', 'total'],
      template: `
        <div class="modal d-block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Carrinho</h5>
                <button @click="$emit('close')" type="button" class="btn-close" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div v-for="(item, index) in cart" :key="index" class="d-flex justify-content-between mb-2">
                  <span>{{ item.name }} - R$ {{ item.price.toFixed(2) }}</span>
                  <button @click="$emit('remove', index)" class="btn btn-sm btn-danger">Remover</button>
                </div>
                <hr>
                <h5>Total: R$ {{ total.toFixed(2) }}</h5>
              </div>
              <div class="modal-footer">
                <button @click="$emit('checkout')" class="btn btn-success">Finalizar Compra</button>
                <button @click="$emit('close')" class="btn btn-secondary">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      `
    });

    Vue.component('support-section', {
      template: `
        <div class="container mt-4">
          <div class="card bg-dark text-light">
            <div class="card-body">
              <h5 class="card-title">Suporte</h5>
              <p>Email: joseryandasilvarya@gmail.com</p>
              <a href="https://discord.gg/ZnudbxVmhb" target="_blank" class="btn btn-primary">
                Entrar no Discord de Suporte
              </a>
            </div>
          </div>
        </div>
      `
    });
  }
});