function verificarSenha() {
    var senha = $('#senha').val();
    var repetirSenha = $('#repetir-senha').val();
  
    if (senha !== repetirSenha) {
      alert('A senha não coincide com a repetição da senha. Tente novamente.');
      return false;
    }
  
    return true;
  }
  
  $('#cadastrarButton').on('click', function () {
    if (verificarSenha()) {
      var email = $('#email').val();
      var senha = $('#senha').val();
  
      // Obtenha os dados armazenados
      var dadosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
      // Adicione o novo usuário aos dados armazenados
      dadosArmazenados.push({ email: email, senha: senha });
  
      // Atualize o localStorage
      localStorage.setItem('usuarios', JSON.stringify(dadosArmazenados));
  
      alert('Usuário cadastrado com sucesso');
      window.location.href = '/login.html';
    }

});
  