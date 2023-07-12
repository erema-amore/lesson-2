

// Функция для обработки события регистрации
function handleRegistration(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const password = document.getElementById('regPassword').value;
  const age = document.getElementById('regAge').value;
  socialNetwork.registerUser(name, password, age);
}

// Функция для обработки события авторизации
function handleLogin(event) {
  event.preventDefault();
  const name = document.getElementById('loginName').value;
  const password = document.getElementById('loginPassword').value;
  socialNetwork.loginUser(name, password);
}

// Функция для обработки события отправки сообщения
function handleSendMessage(event) {
  event.preventDefault();
  const receiver = document.getElementById('receiverName').value;
  const content = document.getElementById('messageContent').value;
  socialNetwork.sendMessage(receiver, content);
}

// Функция для обработки события удаления аккаунта
function handleDeleteAccount(event) {
  event.preventDefault();
  const password = document.getElementById('deletePassword').value;
  socialNetwork.deleteAccount(password);
}

// Функция для обработки события удаления сообщения
function handleDeleteMessage(messageId) {
  socialNetwork.deleteMessage(messageId);
}

// Функция для обработки события удаления поста
function handleDeletePost(postId) {
  socialNetwork.deletePost(postId);
}

// Функция для отображения сообщений
function displayMessages() {
  const messagesContainer = document.getElementById('messagesContainer');
  messagesContainer.innerHTML = '';
  for (const message of socialNetwork.messages) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `
      <p>From: ${message.from}</p>
      <p>Content: ${message.content}</p>
      <button onclick="handleDeleteMessage(${message.id})">Delete</button>
    `;
    messagesContainer.appendChild(messageElement);
  }
}

// Функция для отображения постов
function displayPosts() {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';
  for (const post of socialNetwork.posts) {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>Author: ${post.author}</p>
      <p>Likes: ${post.likes}</p>
      <button onclick="handleDeletePost(${post.id})">Delete</button>
    `;
    postsContainer.appendChild(postElement);
  }
}



// Функция для обработки события регистрации
function handleRegistration(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const password = document.getElementById('regPassword').value;
  const age = document.getElementById('regAge').value;
  socialNetwork.registerUser(name, password, age);
  displayMessages();
  displayPosts();
}

// Функция для обработки события авторизации
function handleLogin(event) {
  event.preventDefault();
  const name = document.getElementById('loginName').value;
  const password = document.getElementById('loginPassword').value;
  socialNetwork.loginUser(name, password);
  displayMessages();
  displayPosts();
}

// Функция для обработки события отправки сообщения
function handleSendMessage(event) {
  event.preventDefault();
  const receiver = document.getElementById('receiverName').value;
  const content = document.getElementById('messageContent').value;
  socialNetwork.sendMessage(receiver, content);
  displayMessages();
}

// Функция для обработки события удаления аккаунта
function handleDeleteAccount(event) {
  event.preventDefault();
  const password = document.getElementById('deletePassword').value;
  socialNetwork.deleteAccount(password);
  displayMessages();
  displayPosts();
}

// Функция для обработки события удаления сообщения
function handleDeleteMessage(messageId) {
  socialNetwork.deleteMessage(messageId);
  displayMessages();
}

// Функция для обработки события удаления поста
function handleDeletePost(postId) {
  socialNetwork.deletePost(postId);
  displayPosts();
}

// Функция для отображения сообщений
function displayMessages() {
  const messagesContainer = document.getElementById('messagesContainer');
  messagesContainer.innerHTML = '';
  for (const message of socialNetwork.messages) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `
      <p>From: ${message.from}</p>
      <p>Content: ${message.content}</p>
      <button onclick="handleDeleteMessage(${message.id})">Delete</button>
    `;
    messagesContainer.appendChild(messageElement);
  }
}

// // Функция для отображения постов
function displayPosts() {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = '';
  for (const post of socialNetwork.posts) {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>Author: ${post.author}</p>
      <p>Likes: ${post.likes}</p>
      <button onclick="handleDeletePost(${post.id})">Delete</button>
    `;
    postsContainer.appendChild(postElement);
  }
}