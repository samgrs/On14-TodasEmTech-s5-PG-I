console.log('-----------------------------------------------------------------------------------')
console.log('                     WELCOME!       ')
console.log('-----------------------------------------------------------------------------------')
console.log('Aqui estão alguns livros lidos e minha wishlist!.')
console.log('-----------------------------------------------------------------------------------')


//vamos instanciar, o nosso banco de dados
const books = require('./database');

//ordenando
books.sort((x, y) => x.pages - y.pages);
console.table(books);

//entrada de dados
const entry = require('readline-sync');

//pergunta no terminal
const booksQuestion = entry.question('Gostaria de ver os livros por categoria? (S/N)? ').toLocaleUpperCase();
console.log(booksQuestion);

//se afirmativo:
if(booksQuestion === 'S') {
    console.log('Insira o tipo (romance, nao-ficcao, tragedia, poema, novela, watakushi). Escreva tudo minúsculo e sem acentos ou "ç". ');

    //exibe no terminal
    const genre = entry.question('Insira o gênero que deseja ver: ').toLocaleLowerCase();
    console.log('Livros selecionados:');

    function tagging(books) {
        return books.type === genre
    }

    const filterBooks = books.filter(tagging);
    console.table(filterBooks);

    //recomendacao
    const recommendationBooks = entry.question('Gostaria de uma recomendação de livro (S/N)? ').toLocaleUpperCase();
    console.log('Livros recomendados:');

if(recommendationBooks  === 'S') {
    function recommendation(books) {
        return books.recommends && books.readed === true
    }

    const answerRecommendation = books.filter(recommendation);
    console.table(answerRecommendation);
} else {
    console.log('Leia sempre! <3');
}
    const readBooks = entry.question('Gostaria de ver minha wishlist (S/N)? ').toLocaleUpperCase();
    console.log('Minha wishlist do momento:');

if(readBooks === 'S'){

    function notReaded(books) {
        return books.readed === false
    }

    const wishList = books.filter(notReaded);
    console.table(wishList);
} else {
    console.log('Leia sempre!<3');
}
} else if(booksQuestion === 'N'){
    console.log('Leia sempre! <3');
   
} else {
    console.log('Todos os livros catalogados: ');
    console.table(books);
}