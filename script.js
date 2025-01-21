document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animação de aparecimento ao scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });

  // Configurações de autenticação
  const ADMIN_USERNAME = 'Ryan0777';
  const ADMIN_PASSWORD = '19283747Ry@';
  const AUTHORIZED_EMAIL = 'seu.email@gmail.com';

  // Estado de autenticação
  let isAuthenticated = false;
  let isAdmin = false;

  // Elementos de autenticação
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const closeBtns = document.querySelectorAll('.close');
  const showAdminLogin = document.getElementById('showAdminLogin');
  const adminControls = document.querySelectorAll('.admin-controls');

  // Funções de manipulação de modais
  function openModal(modal) {
    modal.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  // Event Listeners
  loginBtn.addEventListener('click', () => openModal(loginModal));
  registerBtn.addEventListener('click', () => openModal(registerModal));
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(loginModal);
      closeModal(registerModal);
    });
  });

  // Registro de usuário
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const passwordConfirm = document.getElementById('regPasswordConfirm').value;

    if (password !== passwordConfirm) {
      alert('As senhas não coincidem!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.username === username)) {
      alert('Este nome de usuário já está em uso!');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro realizado com sucesso!');
    closeModal(registerModal);
    registerForm.reset();
  });

  // Login de usuário
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      isAuthenticated = true;
      isAdmin = true;
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('isAdmin', 'true');
      updateUIState();
      closeModal(loginModal);
      loginForm.reset();
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      isAuthenticated = true;
      sessionStorage.setItem('authenticated', 'true');
      sessionStorage.setItem('username', username);
      updateUIState();
      closeModal(loginModal);
      loginForm.reset();
    } else {
      alert('Usuário ou senha incorretos!');
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    isAuthenticated = false;
    isAdmin = false;
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('username');
    updateUIState();
    location.reload();
  });

  // Mostrar login de admin
  showAdminLogin.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.g_id_signin').classList.remove('hidden');
  });

  // Atualizar interface baseado no estado de autenticação
  const updateUIState = () => {
    document.body.classList.toggle('admin-logged-in', isAdmin);
    loginBtn.style.display = isAuthenticated ? 'none' : 'block';
    registerBtn.style.display = isAuthenticated ? 'none' : 'block';
    logoutBtn.style.display = isAuthenticated ? 'block' : 'none';
    
    adminControls.forEach(control => {
      control.style.display = isAdmin ? 'block' : 'none';
    });
  };

  // Verificar estado de autenticação ao carregar
  const checkAuthStatus = () => {
    isAuthenticated = sessionStorage.getItem('authenticated') === 'true';
    isAdmin = sessionStorage.getItem('isAdmin') === 'true';
    updateUIState();
  };

  // Gerenciamento de links
  const linkForm = document.getElementById('link-form');
  const linksContainer = document.getElementById('links-container');
  
  // Carregar links salvos
  const loadLinks = () => {
    const savedLinks = JSON.parse(localStorage.getItem('downloadLinks') || '[]');
    linksContainer.innerHTML = '';
    savedLinks.forEach(link => addLinkCard(link));
  };

  // Adicionar novo card de link
  const addLinkCard = (link) => {
    const card = document.createElement('div');
    card.className = 'download-card';
    card.innerHTML = `
      ${isAdmin ? `<button class="delete-link" data-url="${link.url}">×</button>` : ''}
      <i class="fas fa-link"></i>
      <h3>${link.name}</h3>
      ${link.description ? `<p>${link.description}</p>` : ''}
      <a href="${link.url}" class="download-btn" target="_blank">Download</a>
    `;
    linksContainer.appendChild(card);

    if (isAdmin) {
      card.querySelector('.delete-link').addEventListener('click', (e) => {
        const url = e.target.dataset.url;
        const savedLinks = JSON.parse(localStorage.getItem('downloadLinks') || '[]');
        const updatedLinks = savedLinks.filter(link => link.url !== url);
        localStorage.setItem('downloadLinks', JSON.stringify(updatedLinks));
        loadLinks();
      });
    }
  };

  // Manipular envio do formulário
  linkForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!isAdmin) {
      alert('Você precisa estar logado como administrador para adicionar links!');
      return;
    }

    const newLink = {
      name: document.getElementById('link-name').value,
      url: document.getElementById('link-url').value,
      description: document.getElementById('link-description').value
    };

    const savedLinks = JSON.parse(localStorage.getItem('downloadLinks') || '[]');
    savedLinks.push(newLink);
    localStorage.setItem('downloadLinks', JSON.stringify(savedLinks));

    linkForm.reset();
    loadLinks();
  });

  // Carregar links ao iniciar
  loadLinks();

  // Inicialização
  checkAuthStatus();

  // Criação dinâmica de estrelas
  function createStars() {
    const stars = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      stars.appendChild(star);
    }
  }

  createStars();
});