document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeBtns = document.querySelectorAll('.close');
  
  // Estado do usuário
  let currentUser = null;
  
  // Simulated user database (in real application, this would be server-side)
  let users = [
    { username: 'AndromedaAdm', password: '19283747', isAdmin: true, isVip: true }, 
    { username: 'vip', password: 'vip123', isAdmin: false, isVip: true },
    { username: 'user', password: 'user123', isAdmin: false, isVip: false }
  ];
  
  // Modal handlers
  const showModal = (modal) => {
    modal.style.display = 'block';
  };
  
  const hideModal = (modal) => {
    modal.style.display = 'none';
  };
  
  // Event Listeners
  loginBtn.addEventListener('click', () => {
    if (currentUser) {
      // Logout
      currentUser = null;
      updateUIForUser();
    } else {
      showModal(loginModal);
    }
  });
  
  registerBtn.addEventListener('click', () => showModal(registerModal));
  
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hideModal(loginModal);
      hideModal(registerModal);
    });
  });
  
  // Forms handling
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    handleLogin(username, password);
  });
  
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    
    handleRegister(username, password);
  });
  
  // Chat functionality
  const chatInput = document.querySelector('.chat-input input');
  const chatSendBtn = document.querySelector('.chat-input button');
  const chatMessages = document.querySelector('.chat-messages');
  
  chatSendBtn.addEventListener('click', () => {
    if (!currentUser) {
      alert('Por favor, faça login para enviar mensagens');
      return;
    }
    
    const message = chatInput.value.trim();
    if (message) {
      addChatMessage(message);
      chatInput.value = '';
    }
  });
  
  function addChatMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `
      <strong>${currentUser?.username || 'Anônimo'}:</strong>
      <span>${message}</span>
    `;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Authentication handlers
  function handleLogin(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      currentUser = user;
      updateUIForUser();
      hideModal(loginModal);
      loginForm.reset();
      showMinecraftNotification('✨ Login realizado com sucesso! ✨');
      playMinecraftSound('success');
    } else {
      showMinecraftNotification('❌ Usuário ou senha incorretos!');
      playMinecraftSound('error');
    }
  }
  
  function handleRegister(username, password) {
    if (users.some(u => u.username === username)) {
      alert('Nome de usuário já existe!');
      return;
    }
    
    // Add new user
    users.push({
      username,
      password,
      isAdmin: false,
      isVip: false
    });
    
    alert('Registro realizado com sucesso! Por favor, faça login.');
    hideModal(registerModal);
    registerForm.reset();
  }
  
  function updateUIForUser() {
    const vipArea = document.querySelector('.vip-area');
    if (currentUser) {
      loginBtn.textContent = 'Logout';
      registerBtn.style.display = 'none';
      
      if (currentUser.isVip) {
        vipArea.innerHTML = `
          <h2>Área de Downloads VIP Andromeda</h2>
          <div class="downloads-container">
            <ul>
              <li><a href="#">Download 1</a></li>
              <li><a href="#">Download 2</a></li>
              <li><a href="#">Download 3</a></li>
            </ul>
          </div>
        `;
      }
      
      if (currentUser.isAdmin) {
        addAdminControls();
      }
    } else {
      loginBtn.textContent = 'Login';
      registerBtn.style.display = 'block';
      vipArea.innerHTML = `
        <h2>Área de Downloads VIP Andromeda</h2>
        <div class="downloads-container">
          <p>Faça login como VIP para acessar os downloads exclusivos!</p>
        </div>
      `;
    }
  }
  
  // Enhanced admin controls
  function addAdminControls() {
    const adminControls = document.createElement('div');
    adminControls.classList.add('admin-controls');
    adminControls.innerHTML = `
      <h3>Painel de Administrador</h3>
      <div class="admin-panel">
        <button onclick="handleAddDownload()">Adicionar Download</button>
        <button onclick="handleRemoveDownload()">Remover Download</button>
        <button onclick="handleManageDuvidas()">Gerenciar Dúvidas</button>
        <button onclick="handleManageUsers()">Gerenciar Usuários</button>
      </div>
    `;
    
    document.querySelector('.downloads-container').prepend(adminControls);
  }

  // Enhanced admin functions
  window.handleAddDownload = () => {
    const downloadName = prompt('Nome do download:');
    const downloadUrl = prompt('URL do download:');
    if (downloadName && downloadUrl) {
      const downloadsList = document.querySelector('.downloads-container ul') || 
        document.querySelector('.downloads-container').appendChild(document.createElement('ul'));
      const newDownload = document.createElement('li');
      newDownload.innerHTML = `<a href="${downloadUrl}">${downloadName}</a>`;
      downloadsList.appendChild(newDownload);
    }
  };

  window.handleRemoveDownload = () => {
    const downloads = document.querySelectorAll('.downloads-container ul li');
    if (downloads.length === 0) {
      alert('Não há downloads para remover');
      return;
    }

    const downloadsList = Array.from(downloads).map((item, index) => 
      `${index + 1} - ${item.textContent}`
    ).join('\n');
    
    const indexToRemove = prompt(`Digite o número do download para remover:\n${downloadsList}`);
    
    if (indexToRemove && downloads[indexToRemove - 1]) {
      downloads[indexToRemove - 1].remove();
    }
  };

  window.handleManageUsers = () => {
    if (!currentUser?.isAdmin) {
      alert('Acesso negado!');
      return;
    }

    const usersList = users.map(user => 
      `- ${user.username} (${user.isVip ? 'VIP' : 'Normal'})`
    ).join('\n');

    alert(`Usuários registrados:\n${usersList}`);
    
    const action = prompt('Digite:\n1 - Tornar usuário VIP\n2 - Remover VIP\n3 - Remover usuário');
    
    if (action) {
      const username = prompt('Digite o nome do usuário:');
      const userIndex = users.findIndex(u => u.username === username);
      
      if (userIndex === -1) {
        alert('Usuário não encontrado!');
        return;
      }

      switch(action) {
        case '1':
          users[userIndex].isVip = true;
          alert(`${username} agora é VIP!`);
          break;
        case '2':
          users[userIndex].isVip = false;
          alert(`${username} não é mais VIP!`);
          break;
        case '3':
          if (users[userIndex].username === 'AndromedaAdm') {
            alert('Não é possível remover o administrador principal!');
            return;
          }
          users.splice(userIndex, 1);
          alert(`${username} foi removido!`);
          break;
      }
      
      if (username === currentUser?.username) {
        updateUIForUser();
      }
    }
  };

  window.handleManageDuvidas = () => {
    const duvidasList = document.querySelector('.duvidas-list');
    const duvidas = Array.from(duvidasList.children);
    
    if (duvidas.length === 0) {
      alert('Não há dúvidas para gerenciar!');
      return;
    }

    const duvidasListStr = duvidas.map((duvida, index) => 
      `${index + 1} - ${duvida.querySelector('p').textContent}`
    ).join('\n');
    
    const indexToManage = prompt(`Selecione a dúvida para responder:\n${duvidasListStr}`);
    
    if (indexToManage && duvidas[indexToManage - 1]) {
      const resposta = prompt('Digite sua resposta:');
      if (resposta) {
        const duvidaElement = duvidas[indexToManage - 1];
        const respostaElement = document.createElement('div');
        respostaElement.classList.add('resposta');
        respostaElement.innerHTML = `<strong>Resposta do Admin:</strong> ${resposta}`;
        duvidaElement.appendChild(respostaElement);
      }
    }
  };

  // Add dúvidas functionality
  const duvidaForm = document.querySelector('.duvida-form');
  duvidaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = duvidaForm.querySelector('textarea');
    const duvida = textarea.value.trim();
    
    if (duvida) {
      const duvidaElement = document.createElement('div');
      duvidaElement.classList.add('duvida');
      duvidaElement.innerHTML = `
        <p>${duvida}</p>
        <small>Enviado por: ${currentUser?.username || 'Anônimo'}</small>
      `;
      document.querySelector('.duvidas-list').appendChild(duvidaElement);
      textarea.value = '';
    }
  });

  // Menu mobile
  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-mobile');
  menuButton.innerHTML = '☰';
  document.querySelector('nav').prepend(menuButton);
  
  menuButton.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  // Add Minecraft-themed notifications
  function showMinecraftNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(39, 174, 96, 0.9);
      color: white;
      padding: 1rem;
      border: 2px solid #1e8449;
      font-family: var(--minecraft-font);
      z-index: 1000;
      animation: slideIn 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.5s ease-in';
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }

  // Add Minecraft sound effects (using base64 audio or external sources)
  function playMinecraftSound(type) {
    // Implementation would go here - would need actual Minecraft sound files
    console.log(`Playing ${type} sound`);
  }

  // Add floating blocks animation
  function addFloatingBlocks() {
    const blocks = ['dirt', 'stone', 'grass', 'diamond'];
    const container = document.createElement('div');
    container.className = 'floating-blocks';
    
    blocks.forEach(block => {
      const blockDiv = document.createElement('div');
      blockDiv.className = `minecraft-block ${block}`;
      container.appendChild(blockDiv);
    });
    
    document.querySelector('.galaxy-animation').appendChild(container);
  }

  // Initialize UI
  addFloatingBlocks();
  updateUIForUser();
});