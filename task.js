//Задание 1 
const numbers = { keyin1: 1, keyin2: 2, keyin3: 3, keyin4: 4, keyin5: 5, keyin6: 6, keyin7: 7 };

// Вывести все значения больше или равные 3
console.log('Task 1')
for (const key in numbers) {
    const value = numbers[key];
    if (value >= 3) {
      console.log(value);
    }
  }
  
//Задание 2
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
    {
    userId: 10,
    userName: "Alex",
    text: "lorem ipsum",
    rating: {
    likes: 10,
    dislikes: 2, // вывести это число
    },
    },
    {
    userId: 5, // вывести это число
    userName: "Jane",
    text: "lorem ipsum 2", // вывести этот текст
    rating: {
    likes: 3,
    dislikes: 1,
    },
    },
    ],
    };
    // Решение 
    console.log('Task 2')
    console.log(post.author); // Вывести текст автора: John
    console.log(post.comments[0].rating.dislikes); // Вывести число дизлайков первого комментария: 2
    console.log(post.comments[1].userId); // Вывести число userId второго комментария: 5
    console.log(post.comments[1].text); // Вывести текст второго комментария: lorem ipsum 2
//Задание 3
    console.log('Task 3')
    const products = [
      {
      id: 3,
      price: 200,
      },
      {
      id: 4,
      price: 900,
      },
      {
      id: 1,
      price: 1000,
      },
      ];
      //Решение
      // Уменьшение цены каждого продукта на 15% с использованием метода forEach
      products.forEach(product => {
      product.price = product.price * 0.85; // Уменьшить цену на 15%
      });
      // Вывод обновленного массива products
      console.log(products);
//Задание 4
console.log('Task 4.1')
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);
console.log('Task 4.2')
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);
console.log('Task 5')
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const mergedArray = en.reduce((acc, key, index) => {
  acc[key] = ru[index];
  return acc;
}, {});

console.log(mergedArray);