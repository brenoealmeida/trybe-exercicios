// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };


// PRIMEIRO EXERCICIO

// console.log ('Bem-vinda, ' + info.personagem)

// SEGUNDO EXERCICIO

// info['recorrente'] = 'Sim';
// console.log (info);

// TERCEIRO EXERCICIO

// for (let key in info) {
//     console.log (key);
// }

//QUARTO EXERCICIO

// for (let key in info) {
//     console.log (info[key]);
// }

//QUINTO EXERCICIO

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

// console.log (info.personagem + ' e ' + info2.personagem);
// console.log (info.origem + ' e ' + info2.origem);
// console.log (info.nota + ' e ' + info2.nota);
// if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
//     console.log ('Ambos recorrentes')
// }


//GABARITO QUINTO EXERCICIO
// for (let properties in info) {
//     if (
//       properties === 'recorrente' &&
//       info[properties] === 'Sim' &&
//       info2[properties] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[properties] + ' e ' + info2[properties]);
//     }
//   }


// SEXTO EXERCICIO
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log ('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama \'' + leitor.livrosFavoritos[0].titulo + '\'');

  //SETIMO EXERCICIO
  leitor.livrosFavoritos.push ({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });


  //OITAVO EXERCICIO

  console.log (leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
