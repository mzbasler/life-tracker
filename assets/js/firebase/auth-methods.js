// auth-methods.js

// Função para registrar um novo usuário
function registerUser() {
  var email = document.getElementById("email-cadastro").value;
  var senha = document.getElementById("senha-cadastro").value;
  var senhaConfirmacao = document.getElementById("senha-confirmacao").value;
  // Aqui você pode adicionar a lógica de verificação de senha
  // Verificar se as senhas correspondem
  if (senha !== senhaConfirmacao) {
    alert("As senhas não correspondem.");
    return; // Impede a continuação da função se as senhas não correspondem
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "dashboard.html"; // Redireciona após o cadastro
    })
    .catch((error) => {
      alert(error.message); // Mostra mensagem de erro
    });
}

// Função para realizar o login
function loginUser() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      console.log("Usuário logado com sucesso!");
      window.location.href = "dashboard.html"; // Redireciona após o login
    })
    .catch((error) => {
      alert(error.message); // Mostra mensagem de erro
    });
}

// Função para realizar o logout
function logoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Usuário deslogou com sucesso!");
      window.location.href = "index.html"; // Redireciona após o logout
    })
    .catch((error) => {
      console.log(error.message); // Mostra mensagem de erro
    });
}

// Monitor de estado de autenticação
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Usuário está logado
    console.log("Usuário logado: ", user.uid);
  } else {
    // Usuário está deslogado
    console.log("Nenhum usuário logado.");
  }
});
