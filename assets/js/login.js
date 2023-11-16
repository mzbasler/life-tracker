$(document).ready(function () {
    $('#loginButton').on('click', function () {
      var email = $('#email').val();
      var senha = $('#senha').val();
  
      var dadosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
      var usuarioEncontrado = dadosArmazenados.find(function (usuario) {
        return usuario.email === email && usuario.senha === senha;
      });
  
      if (usuarioEncontrado) {
        window.location.href = '/dashboard.html';
      } else {
        alert('Usuário não encontrado. Realize seu cadastro!');
      }
    });

  //janelinha de login

  function exibirMensagemErro(mensagem) {
      $('#mensagemErro').text(mensagem);
  }

  $('.ico-perfil').on('click', function () {
      $('#mensagemErro').text('');
      $('#loginModal').modal('show');
  });

  $('#loginModalButton').on('click', function () {
    var email = $('#emailModal').val();
    var senha = $('#senhaModal').val();

    var dadosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioEncontrado = dadosArmazenados.find(function (usuario) {
      return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
      window.location.href = '/dashboard.html';
      $('#loginModal').modal('hide');
    } else {
      exibirMensagemErro('Usuário não cadastrado. Faça seu cadastro!');
    }
  });

});
  